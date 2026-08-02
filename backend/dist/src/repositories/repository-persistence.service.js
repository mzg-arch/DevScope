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
exports.RepositoryPersistenceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RepositoryPersistenceService = class RepositoryPersistenceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async saveRepository(repository) {
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
            licenseIdentifier: repository.license?.identifier ?? null,
            ownerAvatarUrl: repository.owner.avatarUrl,
            githubUpdatedAt: this.toOptionalDate(repository.updatedAt),
            githubPushedAt: this.toOptionalDate(repository.pushedAt),
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
    async findCompletedSnapshot(repositoryFullName, commitSha) {
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
    async saveCompletedSnapshot(input) {
        const repository = await this.prisma.repository.findUnique({
            where: {
                fullName: input.repositoryFullName,
            },
        });
        if (!repository) {
            throw new Error(`Repository ${input.repositoryFullName} was not saved before its snapshot.`);
        }
        const now = new Date();
        return this.prisma.$transaction(async (transaction) => {
            const snapshot = await transaction.repositorySnapshot.upsert({
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
                    treeData: input.treeItems,
                    truncatedByGitHub: input.limits.truncatedByGitHub,
                    limitedByDevScope: input.limits.limitedByDevScope,
                    maximumReturnedItems: input.limits.maximumReturnedItems,
                    itemsAnalyzed: input.treeItems.length,
                    analysisStartedAt: now,
                    analysisCompletedAt: now,
                },
                update: {
                    branch: input.branch,
                    status: "COMPLETED",
                    treeData: input.treeItems,
                    truncatedByGitHub: input.limits.truncatedByGitHub,
                    limitedByDevScope: input.limits.limitedByDevScope,
                    maximumReturnedItems: input.limits.maximumReturnedItems,
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
    async findSavedExplanation(repositoryFullName, commitSha, model) {
        const snapshot = await this.prisma.repositorySnapshot.findFirst({
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
    async saveExplanation(input) {
        const snapshot = await this.prisma.repositorySnapshot.findFirst({
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
            throw new Error(`No completed snapshot exists for ${input.repositoryFullName} at ${input.commitSha}.`);
        }
        const explanationData = {
            model: input.model,
            purpose: input.purpose,
            howItWorks: input.howItWorks,
            architecture: input.architecture,
            gettingStarted: input.gettingStarted,
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
    async getRepositoryHistory(fullName) {
        const repository = await this.prisma.repository.findFirst({
            where: {
                fullName: {
                    equals: fullName,
                    mode: "insensitive",
                },
            },
            select: {
                id: true,
                owner: true,
                name: true,
                fullName: true,
                githubUrl: true,
                defaultBranch: true,
                primaryLanguage: true,
                lastSyncedAt: true,
                snapshots: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    select: {
                        id: true,
                        commitSha: true,
                        branch: true,
                        status: true,
                        itemsAnalyzed: true,
                        truncatedByGitHub: true,
                        limitedByDevScope: true,
                        createdAt: true,
                        analysisCompletedAt: true,
                        _count: {
                            select: {
                                languages: true,
                                technologies: true,
                                explanations: true,
                            },
                        },
                        explanations: {
                            select: {
                                model: true,
                                generatedAt: true,
                            },
                        },
                    },
                },
            },
        });
        if (!repository) {
            return null;
        }
        return {
            repository: {
                owner: repository.owner,
                name: repository.name,
                fullName: repository.fullName,
                githubUrl: repository.githubUrl,
                defaultBranch: repository.defaultBranch,
                primaryLanguage: repository.primaryLanguage,
                lastSyncedAt: repository.lastSyncedAt,
            },
            summary: {
                totalSnapshots: repository.snapshots.length,
                completedSnapshots: repository.snapshots.filter((snapshot) => snapshot.status === "COMPLETED").length,
                latestAnalyzedAt: repository.snapshots[0]?.analysisCompletedAt ??
                    repository.snapshots[0]?.createdAt ??
                    null,
            },
            snapshots: repository.snapshots.map((snapshot) => ({
                id: snapshot.id,
                commitSha: snapshot.commitSha,
                shortCommitSha: snapshot.commitSha.slice(0, 7),
                branch: snapshot.branch,
                status: snapshot.status,
                itemsAnalyzed: snapshot.itemsAnalyzed,
                languageCount: snapshot._count.languages,
                technologyCount: snapshot._count.technologies,
                hasAiExplanation: snapshot._count.explanations > 0,
                aiModels: snapshot.explanations.map((explanation) => explanation.model),
                generatedAt: snapshot.explanations[0]?.generatedAt ?? null,
                truncatedByGitHub: snapshot.truncatedByGitHub,
                limitedByDevScope: snapshot.limitedByDevScope,
                analyzedAt: snapshot.analysisCompletedAt ??
                    snapshot.createdAt,
            })),
        };
    }
    async findRepositoryByFullName(fullName) {
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
    toOptionalDate(value) {
        if (!value) {
            return null;
        }
        const date = new Date(value);
        return Number.isNaN(date.getTime()) ? null : date;
    }
};
exports.RepositoryPersistenceService = RepositoryPersistenceService;
exports.RepositoryPersistenceService = RepositoryPersistenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RepositoryPersistenceService);
//# sourceMappingURL=repository-persistence.service.js.map