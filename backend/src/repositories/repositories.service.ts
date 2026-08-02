import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from "@nestjs/common";

import { RepositoryPersistenceService } from "./repository-persistence.service";

type GitHubRepositoryResponse = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  default_branch: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  topics: string[];
  private: boolean;
  archived: boolean;
  updated_at: string;
  pushed_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  license: {
    name: string;
    spdx_id: string;
  } | null;
};

type GitHubBranchResponse = {
  name: string;
  commit: {
    sha: string;
  };
};

type GitHubTreeEntry = {
  path: string;
  mode: string;
  type: "blob" | "tree" | "commit";
  sha: string;
  size?: number;
  url: string;
};

type GitHubTreeResponse = {
  sha: string;
  tree: GitHubTreeEntry[];
  truncated: boolean;
};

type GitHubErrorResponse = {
  message?: string;
};

export type InspectedRepository = {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  githubUrl: string;
  defaultBranch: string;
  visibility: string;
  archived: boolean;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  openIssues: number;
  license: {
    name: string;
    identifier: string;
  } | null;
  owner: {
    username: string;
    avatarUrl: string;
    githubUrl: string;
  };
  updatedAt: string;
  pushedAt: string;
};

export type RepositoryVersion = {
  repository: InspectedRepository;
  commitSha: string;
};

@Injectable()
export class RepositoriesService {
  private readonly githubApiUrl = "https://api.github.com";
  private readonly maxTreeItems = 20_000;
  getRepositoryFullName(repositoryUrl: string) {
  const { owner, repository } =
    this.extractRepository(repositoryUrl);

  return `${owner}/${repository}`;
}
  constructor(
    private readonly repositoryPersistenceService: RepositoryPersistenceService,
  ) {}

  async inspectRepository(
    repositoryUrl: string,
  ): Promise<InspectedRepository> {
    const { owner, repository } =
      this.extractRepository(repositoryUrl);

    const data = await this.requestGitHub<GitHubRepositoryResponse>(
      `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}`,
    );

    const repositoryDetails: InspectedRepository = {
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

    await this.repositoryPersistenceService.saveRepository(
      repositoryDetails,
    );

    return repositoryDetails;
  }

  async getRepositoryVersion(
    repositoryUrl: string,
  ): Promise<RepositoryVersion> {
    const repository =
      await this.inspectRepository(repositoryUrl);

    const owner = encodeURIComponent(
      repository.owner.username,
    );
    const name = encodeURIComponent(repository.name);
    const branch = encodeURIComponent(
      repository.defaultBranch,
    );

    const branchData =
      await this.requestGitHub<GitHubBranchResponse>(
        `/repos/${owner}/${name}/branches/${branch}`,
      );

    return {
      repository,
      commitSha: branchData.commit.sha,
    };
  }

  async getRepositoryTree(
    repositoryUrl: string,
    existingVersion?: RepositoryVersion,
  ) {
    const version =
      existingVersion ??
      (await this.getRepositoryVersion(repositoryUrl));

    const repository = version.repository;

    const owner = encodeURIComponent(
      repository.owner.username,
    );
    const name = encodeURIComponent(repository.name);
    const branch = encodeURIComponent(
      repository.defaultBranch,
    );

    const tree = await this.requestGitHub<GitHubTreeResponse>(
      `/repos/${owner}/${name}/git/trees/${branch}?recursive=1`,
    );

    const normalizedItems = tree.tree
      .filter(
        (item) =>
          item.type === "blob" || item.type === "tree",
      )
      .map((item) => ({
        path: item.path,
        name: item.path.split("/").pop() ?? item.path,
        type:
          item.type === "tree" ? "directory" : "file",
        sha: item.sha,
        size: item.size ?? null,
        extension:
          item.type === "blob"
            ? this.getFileExtension(item.path)
            : null,
      }));

    const files = normalizedItems.filter(
      (item) => item.type === "file",
    );

    const directories = normalizedItems.filter(
      (item) => item.type === "directory",
    );

    const extensionCounts = files.reduce<Record<string, number>>(
      (counts, file) => {
        if (!file.extension) {
          return counts;
        }

        counts[file.extension] =
          (counts[file.extension] ?? 0) + 1;

        return counts;
      },
      {},
    );

    const topExtensions = Object.entries(extensionCounts)
      .map(([extension, count]) => ({
        extension,
        count,
      }))
      .sort(
        (first, second) => second.count - first.count,
      )
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
        limitedByDevScope:
          normalizedItems.length > this.maxTreeItems,
        maximumReturnedItems: this.maxTreeItems,
      },
      items: normalizedItems.slice(
        0,
        this.maxTreeItems,
      ),
    };
  }

  private async requestGitHub<T>(
    endpoint: string,
  ): Promise<T> {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "DevScope",
      "X-GitHub-Api-Version": "2026-03-10",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `${this.githubApiUrl}${endpoint}`,
      {
        headers,
      },
    );

    if (response.status === 404) {
      throw new NotFoundException(
        "Repository or requested GitHub resource was not found.",
      );
    }

    if (response.status === 409) {
      throw new BadRequestException(
        "This repository is empty and does not have a file tree.",
      );
    }

    if (
      response.status === 403 ||
      response.status === 429
    ) {
      throw new ServiceUnavailableException(
        "GitHub API rate limit reached. Please try again later.",
      );
    }

    if (!response.ok) {
      const error = (await response
        .json()
        .catch(() => ({}))) as GitHubErrorResponse;

      throw new BadGatewayException(
        error.message ??
          "DevScope could not retrieve information from GitHub.",
      );
    }

    return (await response.json()) as T;
  }

  private extractRepository(repositoryUrl: string) {
    let parsedUrl: URL;

    try {
      parsedUrl = new URL(repositoryUrl);
    } catch {
      throw new BadRequestException(
        "Invalid repository URL.",
      );
    }

    const hostname = parsedUrl.hostname.toLowerCase();

    if (
      hostname !== "github.com" &&
      hostname !== "www.github.com"
    ) {
      throw new BadRequestException(
        "DevScope currently supports GitHub repositories only.",
      );
    }

    const parts = parsedUrl.pathname
      .split("/")
      .filter(Boolean);

    if (parts.length < 2) {
      throw new BadRequestException(
        "The URL must include a GitHub owner and repository name.",
      );
    }

    const owner = parts[0];
    const repository = parts[1].replace(/\.git$/, "");

    return {
      owner,
      repository,
    };
  }

  private getFileExtension(path: string) {
    const fileName = path.split("/").pop() ?? path;
    const lastDotIndex = fileName.lastIndexOf(".");

    if (
      lastDotIndex <= 0 ||
      lastDotIndex === fileName.length - 1
    ) {
      return null;
    }

    return fileName
      .slice(lastDotIndex + 1)
      .toLowerCase();
  }
}