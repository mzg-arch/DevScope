"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesService = void 0;
const common_1 = require("@nestjs/common");
const repository_persistence_service_1 = require("./repository-persistence.service");
let RepositoriesService = class RepositoriesService {
    repositoryPersistenceService;
    githubApiUrl = "https://api.github.com";
    maxTreeItems = 20_000;
    getRepositoryFullName(repositoryUrl) {
        const { owner, repository } = this.extractRepository(repositoryUrl);
        return `${owner}/${repository}`;
    }
    constructor(repositoryPersistenceService) {
        this.repositoryPersistenceService = repositoryPersistenceService;
    }
    async inspectRepository(repositoryUrl) {
        const { owner, repository } = this.extractRepository(repositoryUrl);
        const data = await this.requestGitHub(`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}`);
        const repositoryDetails = {
            id: data.id,
            name: data.name,
            fullName: data.full_name,
            description: data.description,
            githubUrl: data.html_url,
            defaultBranch: data.default_branch,
            visibility: data.private ? "private" : "public",
            archived: data.archived,
            language: data.language,
            topics: data.topics,
            stars: data.stargazers_count,
            forks: data.forks_count,
            openIssues: data.open_issues_count,
            license: data.license
                ? {
                    name: data.license.name,
                    identifier: data.license.spdx_id,
                }
                : null,
            owner: {
                username: data.owner.login,
                avatarUrl: data.owner.avatar_url,
                githubUrl: data.owner.html_url,
            },
            updatedAt: data.updated_at,
            pushedAt: data.pushed_at,
        };
        await this.repositoryPersistenceService.saveRepository(repositoryDetails);
        return repositoryDetails;
    }
    async getRepositoryVersion(repositoryUrl) {
        const repository = await this.inspectRepository(repositoryUrl);
        const owner = encodeURIComponent(repository.owner.username);
        const name = encodeURIComponent(repository.name);
        const branch = encodeURIComponent(repository.defaultBranch);
        const branchData = await this.requestGitHub(`/repos/${owner}/${name}/branches/${branch}`);
        return {
            repository,
            commitSha: branchData.commit.sha,
        };
    }
    async getRepositoryTree(repositoryUrl, existingVersion) {
        const version = existingVersion ??
            (await this.getRepositoryVersion(repositoryUrl));
        const repository = version.repository;
        const owner = encodeURIComponent(repository.owner.username);
        const name = encodeURIComponent(repository.name);
        const branch = encodeURIComponent(repository.defaultBranch);
        const tree = await this.requestGitHub(`/repos/${owner}/${name}/git/trees/${branch}?recursive=1`);
        const normalizedItems = tree.tree
            .filter((item) => item.type === "blob" || item.type === "tree")
            .map((item) => ({
            path: item.path,
            name: item.path.split("/").pop() ?? item.path,
            type: item.type === "tree" ? "directory" : "file",
            sha: item.sha,
            size: item.size ?? null,
            extension: item.type === "blob"
                ? this.getFileExtension(item.path)
                : null,
        }));
        const files = normalizedItems.filter((item) => item.type === "file");
        const directories = normalizedItems.filter((item) => item.type === "directory");
        const extensionCounts = files.reduce((counts, file) => {
            if (!file.extension) {
                return counts;
            }
            counts[file.extension] =
                (counts[file.extension] ?? 0) + 1;
            return counts;
        }, {});
        const topExtensions = Object.entries(extensionCounts)
            .map(([extension, count]) => ({
            extension,
            count,
        }))
            .sort((first, second) => second.count - first.count)
            .slice(0, 10);
        return {
            repository: {
                name: repository.name,
                fullName: repository.fullName,
                branch: repository.defaultBranch,
                githubUrl: repository.githubUrl,
            },
            commitSha: version.commitSha,
            summary: {
                totalItemsReceived: normalizedItems.length,
                totalFiles: files.length,
                totalDirectories: directories.length,
                topExtensions,
            },
            limits: {
                truncatedByGitHub: tree.truncated,
                limitedByDevScope: normalizedItems.length > this.maxTreeItems,
                maximumReturnedItems: this.maxTreeItems,
            },
            items: normalizedItems.slice(0, this.maxTreeItems),
        };
    }
    async requestGitHub(endpoint) {
        const headers = {
            Accept: "application/vnd.github+json",
            "User-Agent": "DevScope",
            "X-GitHub-Api-Version": "2026-03-10",
        };
        if (process.env.GITHUB_TOKEN) {
            headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }
        const response = await fetch(`${this.githubApiUrl}${endpoint}`, {
            headers,
        });
        if (response.status === 404) {
            throw new common_1.NotFoundException("Repository or requested GitHub resource was not found.");
        }
        if (response.status === 409) {
            throw new common_1.BadRequestException("This repository is empty and does not have a file tree.");
        }
        if (response.status === 403 ||
            response.status === 429) {
            throw new common_1.ServiceUnavailableException("GitHub API rate limit reached. Please try again later.");
        }
        if (!response.ok) {
            const error = (await response
                .json()
                .catch(() => ({})));
            throw new common_1.BadGatewayException(error.message ??
                "DevScope could not retrieve information from GitHub.");
        }
        return (await response.json());
    }
    extractRepository(repositoryUrl) {
        let parsedUrl;
        try {
            parsedUrl = new URL(repositoryUrl);
        }
        catch {
            throw new common_1.BadRequestException("Invalid repository URL.");
        }
        const hostname = parsedUrl.hostname.toLowerCase();
        if (hostname !== "github.com" &&
            hostname !== "www.github.com") {
            throw new common_1.BadRequestException("DevScope currently supports GitHub repositories only.");
        }
        const parts = parsedUrl.pathname
            .split("/")
            .filter(Boolean);
        if (parts.length < 2) {
            throw new common_1.BadRequestException("The URL must include a GitHub owner and repository name.");
        }
        const owner = parts[0];
        const repository = parts[1].replace(/\.git$/, "");
        return {
            owner,
            repository,
        };
    }
    getFileExtension(path) {
        const fileName = path.split("/").pop() ?? path;
        const lastDotIndex = fileName.lastIndexOf(".");
        if (lastDotIndex <= 0 ||
            lastDotIndex === fileName.length - 1) {
            return null;
        }
        return fileName
            .slice(lastDotIndex + 1)
            .toLowerCase();
    }
};
exports.RepositoriesService = RepositoriesService;
exports.RepositoriesService = RepositoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_persistence_service_1.RepositoryPersistenceService])
], RepositoriesService);
//# sourceMappingURL=repositories.service.js.map