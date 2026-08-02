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
export declare class RepositoryPersistenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    saveRepository(repository: PersistableRepository): Promise<{
        id: string;
        githubId: string;
        fullName: string;
        githubUrl: string;
        owner: string;
        name: string;
        description: string | null;
        defaultBranch: string;
        visibility: string;
        archived: boolean;
        primaryLanguage: string | null;
        topics: string[];
        stars: number;
        forks: number;
        openIssues: number;
        licenseName: string | null;
        licenseIdentifier: string | null;
        ownerAvatarUrl: string | null;
        githubUpdatedAt: Date | null;
        githubPushedAt: Date | null;
        lastSyncedAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findRepositoryByFullName(fullName: string): Promise<({
        snapshots: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            commitSha: string;
            status: import("../generated/prisma/enums").AnalysisStatus;
            repositoryId: string;
            branch: string;
            treeData: import("@prisma/client/runtime/client").JsonValue | null;
            treeTruncated: boolean;
            itemsAnalyzed: number;
            analysisStartedAt: Date | null;
            analysisCompletedAt: Date | null;
            failureReason: string | null;
        }[];
    } & {
        id: string;
        githubId: string;
        fullName: string;
        githubUrl: string;
        owner: string;
        name: string;
        description: string | null;
        defaultBranch: string;
        visibility: string;
        archived: boolean;
        primaryLanguage: string | null;
        topics: string[];
        stars: number;
        forks: number;
        openIssues: number;
        licenseName: string | null;
        licenseIdentifier: string | null;
        ownerAvatarUrl: string | null;
        githubUpdatedAt: Date | null;
        githubPushedAt: Date | null;
        lastSyncedAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    getRecentRepositories(limit?: number): Promise<({
        _count: {
            snapshots: number;
        };
    } & {
        id: string;
        githubId: string;
        fullName: string;
        githubUrl: string;
        owner: string;
        name: string;
        description: string | null;
        defaultBranch: string;
        visibility: string;
        archived: boolean;
        primaryLanguage: string | null;
        topics: string[];
        stars: number;
        forks: number;
        openIssues: number;
        licenseName: string | null;
        licenseIdentifier: string | null;
        ownerAvatarUrl: string | null;
        githubUpdatedAt: Date | null;
        githubPushedAt: Date | null;
        lastSyncedAt: Date;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    private toOptionalDate;
}
export {};
