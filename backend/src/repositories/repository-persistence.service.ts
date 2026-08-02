import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";

type PersistableRepository = {
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

@Injectable()
export class RepositoryPersistenceService {
  constructor(private readonly prisma: PrismaService) {}

  async saveRepository(repository: PersistableRepository) {
    const repositoryData = {
      githubId: String(repository.id),
      owner: repository.owner.username,
      name: repository.name,
      fullName: repository.fullName,
      githubUrl: repository.githubUrl,
      description: repository.description,
      defaultBranch: repository.defaultBranch,
      visibility: repository.visibility,
      archived: repository.archived,
      primaryLanguage: repository.language,
      topics: repository.topics,
      stars: repository.stars,
      forks: repository.forks,
      openIssues: repository.openIssues,
      licenseName: repository.license?.name ?? null,
      licenseIdentifier:
        repository.license?.identifier ?? null,
      ownerAvatarUrl: repository.owner.avatarUrl,
      githubUpdatedAt: this.toOptionalDate(
        repository.updatedAt,
      ),
      githubPushedAt: this.toOptionalDate(
        repository.pushedAt,
      ),
      lastSyncedAt: new Date(),
    };

    return this.prisma.repository.upsert({
      where: {
        githubId: String(repository.id),
      },
      create: repositoryData,
      update: repositoryData,
    });
  }

  async findRepositoryByFullName(fullName: string) {
    return this.prisma.repository.findUnique({
      where: {
        fullName,
      },
      include: {
        snapshots: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  }

  async getRecentRepositories(limit = 10) {
    return this.prisma.repository.findMany({
      take: limit,
      orderBy: {
        lastSyncedAt: "desc",
      },
      include: {
        _count: {
          select: {
            snapshots: true,
          },
        },
      },
    });
  }

  private toOptionalDate(value: string | null | undefined) {
    if (!value) {
      return null;
    }

    const date = new Date(value);

    return Number.isNaN(date.getTime()) ? null : date;
  }
}