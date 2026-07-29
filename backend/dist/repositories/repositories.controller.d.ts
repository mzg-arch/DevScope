import { InspectRepositoryDto } from "./dto/inspect-repository.dto";
import { RepositoriesService } from "./repositories.service";
import { TechnologyDetectorService } from "./technology-detector.service";
export declare class RepositoriesController {
    private readonly repositoriesService;
    private readonly technologyDetectorService;
    constructor(repositoriesService: RepositoriesService, technologyDetectorService: TechnologyDetectorService);
    inspectRepository(dto: InspectRepositoryDto): Promise<{
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
    getRepositoryTree(dto: InspectRepositoryDto): Promise<{
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
    detectTechnologies(dto: InspectRepositoryDto): Promise<{
        repository: {
            name: string;
            fullName: string;
            branch: string;
            githubUrl: string;
        };
        summary: {
            analyzedItems: number;
            detectedLanguages: number;
            detectedTechnologies: number;
        };
        languages: {
            percentage: number;
            name: string;
            files: number;
            extensions: string[];
        }[];
        technologies: {
            name: string;
            category: string;
            confidence: "high" | "medium";
            evidence: string[];
        }[];
        limits: {
            truncatedByGitHub: boolean;
            limitedByDevScope: boolean;
            maximumReturnedItems: number;
        };
    }>;
}
