"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesService = void 0;
const common_1 = require("@nestjs/common");
let RepositoriesService = class RepositoriesService {
    async inspectRepository(repositoryUrl) {
        const { owner, repository } = this.extractRepository(repositoryUrl);
        const headers = {
            Accept: "application/vnd.github+json",
            "User-Agent": "DevScope",
            "X-GitHub-Api-Version": "2026-03-10",
        };
        if (process.env.GITHUB_TOKEN) {
            headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }
        const response = await fetch(`https://api.github.com/repos/${owner}/${repository}`, { headers });
        if (response.status === 404) {
            throw new common_1.NotFoundException("Repository not found. Make sure it exists and is public.");
        }
        if (response.status === 403 || response.status === 429) {
            throw new common_1.ServiceUnavailableException("GitHub API rate limit reached. Please try again later.");
        }
        if (!response.ok) {
            throw new common_1.BadGatewayException("DevScope could not retrieve this repository from GitHub.");
        }
        const data = (await response.json());
        return {
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
        if (hostname !== "github.com" && hostname !== "www.github.com") {
            throw new common_1.BadRequestException("DevScope currently supports GitHub repositories only.");
        }
        const parts = parsedUrl.pathname.split("/").filter(Boolean);
        if (parts.length < 2) {
            throw new common_1.BadRequestException("The URL must include a GitHub owner and repository name.");
        }
        const owner = parts[0];
        const repository = parts[1].replace(/\.git$/, "");
        return { owner, repository };
    }
};
exports.RepositoriesService = RepositoriesService;
exports.RepositoriesService = RepositoriesService = __decorate([
    (0, common_1.Injectable)()
], RepositoriesService);
//# sourceMappingURL=repositories.service.js.map