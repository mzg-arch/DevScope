import { InspectRepositoryDto } from "./dto/inspect-repository.dto";
import { RepositoriesService } from "./repositories.service";
import { RepositoryExplanationService } from "./repository-explanation.service";
import { TechnologyDetectorService } from "./technology-detector.service";
export declare class RepositoriesController {
    private readonly repositoriesService;
    private readonly technologyDetectorService;
    private readonly repositoryExplanationService;
    constructor(repositoriesService: RepositoriesService, technologyDetectorService: TechnologyDetectorService, repositoryExplanationService: RepositoryExplanationService);
    inspectRepository(dto: InspectRepositoryDto): Promise<import("./repositories.service").InspectedRepository>;
    getRepositoryTree(dto: InspectRepositoryDto): Promise<{
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
            name: string;
            files: number;
            extensions: string[];
            percentage: number;
        }[];
        technologies: {
            name: string;
            category: string;
            confidence: string;
            evidence: string[];
        }[];
        limits: {
            truncatedByGitHub: boolean;
            limitedByDevScope: boolean;
            maximumReturnedItems: number;
        };
        cache: {
            hit: boolean;
            commitSha: string;
        };
    }>;
    explainRepository(dto: InspectRepositoryDto): Promise<{
        repository: import("./repositories.service").InspectedRepository;
        explanation: {
            purpose: string;
            howItWorks: string;
            architecture: {
                name: string;
                description: string;
                evidencePaths: string[];
            }[];
            gettingStarted: {
                step: number;
                title: string;
                description: string;
                paths: string[];
            }[];
            skills: string[];
            difficulty: {
                level: "beginner" | "intermediate" | "advanced";
                reason: string;
            };
            keyTakeaways: string[];
        };
        generatedAt: string;
        model: string;
    }>;
}
