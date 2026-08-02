import { Injectable } from "@nestjs/common";

import type { Prisma } from "../generated/prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import type { InspectedRepository } from "./repositories.service";

type SnapshotTreeItem = {
  path: string;
  name: string;
  type: string;
  sha: string;
  size: number | null;
  extension: string | null;
};

type SnapshotLanguage = {
  name: string;
  files: number;
  percentage: number;
  extensions: string[];
};

type SnapshotTechnology = {
  name: string;
  category: string;
  confidence: string;
  evidence: string[];
};

type SaveSnapshotInput = {
  repositoryFullName: string;
  commitSha: string;
  branch: string;
  treeItems: SnapshotTreeItem[];
  limits: {
    truncatedByGitHub: boolean;
    limitedByDevScope: boolean;
    maximumReturnedItems: number;
  };
  languages: SnapshotLanguage[];
  technologies: SnapshotTechnology[];
};

@Injectable()
export class RepositoryPersistenceService {
  constructor(private readonly prisma: PrismaService) {}

  async saveRepository(repository: InspectedRepository) {
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

  async findCompletedSnapshot(
    repositoryFullName: string,
    commitSha: string,
  ) {
    return this.prisma.repositorySnapshot.findFirst({
      where: {
        commitSha,
        status: "COMPLETED",
        repository: {
          is: {
            fullName: repositoryFullName,
          },
        },
      },
      include: {
        repository: true,
        languages: {
          orderBy: {
            fileCount: "desc",
          },
        },
        technologies: {
          orderBy: [
            {
              category: "asc",
            },
            {
              name: "asc",
            },
          ],
        },
      },
    });
  }

  async saveCompletedSnapshot(input: SaveSnapshotInput) {
    const repository =
      await this.prisma.repository.findUnique({
        where: {
          fullName: input.repositoryFullName,
        },
      });

    if (!repository) {
      throw new Error(
        `Repository ${input.repositoryFullName} was not saved before its snapshot.`,
      );
    }

    const now = new Date();

    return this.prisma.$transaction(async (transaction) => {
      const snapshot =
        await transaction.repositorySnapshot.upsert({
          where: {
            repositoryId_commitSha: {
              repositoryId: repository.id,
              commitSha: input.commitSha,
            },
          },
          create: {
            repositoryId: repository.id,
            commitSha: input.commitSha,
            branch: input.branch,
            status: "COMPLETED",
            treeData:
              input.treeItems as Prisma.InputJsonValue,
            truncatedByGitHub:
              input.limits.truncatedByGitHub,
            limitedByDevScope:
              input.limits.limitedByDevScope,
            maximumReturnedItems:
              input.limits.maximumReturnedItems,
            itemsAnalyzed: input.treeItems.length,
            analysisStartedAt: now,
            analysisCompletedAt: now,
          },
          update: {
            branch: input.branch,
            status: "COMPLETED",
            treeData:
              input.treeItems as Prisma.InputJsonValue,
            truncatedByGitHub:
              input.limits.truncatedByGitHub,
            limitedByDevScope:
              input.limits.limitedByDevScope,
            maximumReturnedItems:
              input.limits.maximumReturnedItems,
            itemsAnalyzed: input.treeItems.length,
            analysisStartedAt: now,
            analysisCompletedAt: now,
            failureReason: null,
          },
        });

      await transaction.languageStatistic.deleteMany({
        where: {
          snapshotId: snapshot.id,
        },
      });

      await transaction.technologyDetection.deleteMany({
        where: {
          snapshotId: snapshot.id,
        },
      });

      if (input.languages.length > 0) {
        await transaction.languageStatistic.createMany({
          data: input.languages.map((language) => ({
            snapshotId: snapshot.id,
            name: language.name,
            fileCount: language.files,
            percentage: language.percentage,
            extensions: language.extensions,
          })),
        });
      }

      if (input.technologies.length > 0) {
        await transaction.technologyDetection.createMany({
          data: input.technologies.map((technology) => ({
            snapshotId: snapshot.id,
            name: technology.name,
            category: technology.category,
            confidence: technology.confidence,
            evidence: technology.evidence,
          })),
        });
      }

      return transaction.repositorySnapshot.findUniqueOrThrow({
        where: {
          id: snapshot.id,
        },
        include: {
          languages: true,
          technologies: true,
        },
      });
    });
  }
  async findSavedExplanation(
  repositoryFullName: string,
  commitSha: string,
  model: string,
) {
  const snapshot =
    await this.prisma.repositorySnapshot.findFirst({
      where: {
        commitSha,
        status: "COMPLETED",
        repository: {
          is: {
            fullName: repositoryFullName,
          },
        },
      },
      select: {
        id: true,
      },
    });

  if (!snapshot) {
    return null;
  }

  return this.prisma.aiExplanation.findUnique({
    where: {
      snapshotId_model: {
        snapshotId: snapshot.id,
        model,
      },
    },
  });
}

async saveExplanation(input: {
  repositoryFullName: string;
  commitSha: string;
  model: string;
  purpose: string;
  howItWorks: string;
  architecture: unknown;
  gettingStarted: unknown;
  skills: string[];
  difficultyLevel: string;
  difficultyReason: string;
  keyTakeaways: string[];
  generatedAt: Date;
}) {
  const snapshot =
    await this.prisma.repositorySnapshot.findFirst({
      where: {
        commitSha: input.commitSha,
        status: "COMPLETED",
        repository: {
          is: {
            fullName: input.repositoryFullName,
          },
        },
      },
      select: {
        id: true,
      },
    });

  if (!snapshot) {
    throw new Error(
      `No completed snapshot exists for ${input.repositoryFullName} at ${input.commitSha}.`,
    );
  }

  const explanationData = {
    model: input.model,
    purpose: input.purpose,
    howItWorks: input.howItWorks,
    architecture:
      input.architecture as Prisma.InputJsonValue,
    gettingStarted:
      input.gettingStarted as Prisma.InputJsonValue,
    skills: input.skills,
    difficultyLevel: input.difficultyLevel,
    difficultyReason: input.difficultyReason,
    keyTakeaways: input.keyTakeaways,
    generatedAt: input.generatedAt,
  };

  return this.prisma.aiExplanation.upsert({
    where: {
      snapshotId_model: {
        snapshotId: snapshot.id,
        model: input.model,
      },
    },
    create: {
      snapshotId: snapshot.id,
      ...explanationData,
    },
    update: explanationData,
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

  private toOptionalDate(
    value: string | null | undefined,
  ) {
    if (!value) {
      return null;
    }

    const date = new Date(value);

    return Number.isNaN(date.getTime()) ? null : date;
  }
}