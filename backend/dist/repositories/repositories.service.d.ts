export declare class RepositoriesService {
    private readonly githubApiUrl;
    private readonly maxTreeItems;
    inspectRepository(repositoryUrl: string): Promise<{
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
    }>;
    getRepositoryTree(repositoryUrl: string): Promise<{
        repository: {
            name: string;
            fullName: string;
            branch: string;
            githubUrl: string;
        };
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
