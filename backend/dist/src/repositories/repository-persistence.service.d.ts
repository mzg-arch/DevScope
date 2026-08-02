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
export declare class RepositoryPersistenceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    saveRepository(repository: InspectedRepository): Promise<{
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
    findCompletedSnapshot(repositoryFullName: string, commitSha: string): Promise<({
        repository: {
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
        };
        languages: {
            id: string;
            name: string;
            createdAt: Date;
            fileCount: number;
            snapshotId: string;
            percentage: number;
            extensions: string[];
        }[];
        technologies: {
            id: string;
            name: string;
            createdAt: Date;
            category: string;
            snapshotId: string;
            confidence: string;
            evidence: string[];
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        repositoryId: string;
        commitSha: string;
        branch: string;
        status: import("../generated/prisma/enums").AnalysisStatus;
        treeData: import("@prisma/client/runtime/client").JsonValue | null;
        truncatedByGitHub: boolean;
        limitedByDevScope: boolean;
        maximumReturnedItems: number;
        itemsAnalyzed: number;
        analysisStartedAt: Date | null;
        analysisCompletedAt: Date | null;
        failureReason: string | null;
    }) | null>;
    saveCompletedSnapshot(input: SaveSnapshotInput): Promise<{
        languages: {
            id: string;
            name: string;
            createdAt: Date;
            fileCount: number;
            snapshotId: string;
            percentage: number;
            extensions: string[];
        }[];
        technologies: {
            id: string;
            name: string;
            createdAt: Date;
            category: string;
            snapshotId: string;
            confidence: string;
            evidence: string[];
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        repositoryId: string;
        commitSha: string;
        branch: string;
        status: import("../generated/prisma/enums").AnalysisStatus;
        treeData: import("@prisma/client/runtime/client").JsonValue | null;
        truncatedByGitHub: boolean;
        limitedByDevScope: boolean;
        maximumReturnedItems: number;
        itemsAnalyzed: number;
        analysisStartedAt: Date | null;
        analysisCompletedAt: Date | null;
        failureReason: string | null;
    }>;
    findRepositoryByFullName(fullName: string): Promise<({
        snapshots: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            repositoryId: string;
            commitSha: string;
            branch: string;
            status: import("../generated/prisma/enums").AnalysisStatus;
            treeData: import("@prisma/client/runtime/client").JsonValue | null;
            truncatedByGitHub: boolean;
            limitedByDevScope: boolean;
            maximumReturnedItems: number;
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
