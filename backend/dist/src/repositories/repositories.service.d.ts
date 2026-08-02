import { RepositoryPersistenceService } from "./repository-persistence.service";
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
export declare class RepositoriesService {
    private readonly repositoryPersistenceService;
    private readonly githubApiUrl;
    private readonly maxTreeItems;
    constructor(repositoryPersistenceService: RepositoryPersistenceService);
    inspectRepository(repositoryUrl: string): Promise<InspectedRepository>;
    getRepositoryVersion(repositoryUrl: string): Promise<RepositoryVersion>;
    getRepositoryTree(repositoryUrl: string, existingVersion?: RepositoryVersion): Promise<{
        repository: {
            name: string;
            fullName: string;
            branch: string;
            githubUrl: string;
        };
        commitSha: string;
        summary: {
            totalItemsReceived: number;
            totalFiles: number;
            totalDirectories: number;
            topExtensions: {
                extension: string;
                count: number;
            }[];
        };
        limits: {
            truncatedByGitHub: boolean;
            limitedByDevScope: boolean;
            maximumReturnedItems: number;
        };
        items: {
            path: string;
            name: string;
            type: string;
            sha: string;
            size: number | null;
            extension: string | null;
        }[];
    }>;
    private requestGitHub;
    private extractRepository;
    private getFileExtension;
}
