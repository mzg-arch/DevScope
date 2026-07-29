import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from "@nestjs/common";

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

@Injectable()
export class RepositoriesService {
  async inspectRepository(repositoryUrl: string) {
    const { owner, repository } = this.extractRepository(repositoryUrl);

    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "DevScope",
      "X-GitHub-Api-Version": "2026-03-10",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repository}`,
      { headers },
    );

    if (response.status === 404) {
      throw new NotFoundException(
        "Repository not found. Make sure it exists and is public.",
      );
    }

    if (response.status === 403 || response.status === 429) {
      throw new ServiceUnavailableException(
        "GitHub API rate limit reached. Please try again later.",
      );
    }

    if (!response.ok) {
      throw new BadGatewayException(
        "DevScope could not retrieve this repository from GitHub.",
      );
    }

    const data = (await response.json()) as GitHubRepositoryResponse;

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

  private extractRepository(repositoryUrl: string) {
    let parsedUrl: URL;

    try {
      parsedUrl = new URL(repositoryUrl);
    } catch {
      throw new BadRequestException("Invalid repository URL.");
    }

    const hostname = parsedUrl.hostname.toLowerCase();

    if (hostname !== "github.com" && hostname !== "www.github.com") {
      throw new BadRequestException(
        "DevScope currently supports GitHub repositories only.",
      );
    }

    const parts = parsedUrl.pathname.split("/").filter(Boolean);

    if (parts.length < 2) {
      throw new BadRequestException(
        "The URL must include a GitHub owner and repository name.",
      );
    }

    const owner = parts[0];
    const repository = parts[1].replace(/\.git$/, "");

    return { owner, repository };
  }
}