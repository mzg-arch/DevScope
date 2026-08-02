import { InspectRepositoryDto } from "./dto/inspect-repository.dto";
import { RepositoriesService } from "./repositories.service";
import { RepositoryExplanationService } from "./repository-explanation.service";
import { RepositoryPersistenceService } from "./repository-persistence.service";
import { TechnologyDetectorService } from "./technology-detector.service";
export declare class RepositoriesController {
    private readonly repositoriesService;
    private readonly technologyDetectorService;
    private readonly repositoryExplanationService;
    private readonly repositoryPersistenceService;
    constructor(repositoriesService: RepositoriesService, technologyDetectorService: TechnologyDetectorService, repositoryExplanationService: RepositoryExplanationService, repositoryPersistenceService: RepositoryPersistenceService);
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
    getRepositoryHistory(dto: InspectRepositoryDto): Promise<{
        repository: {
            owner: string;
            name: string;
            fullName: string;
            githubUrl: string;
            defaultBranch: string;
            primaryLanguage: string | null;
            lastSyncedAt: Date;
        };
        summary: {
            totalSnapshots: number;
            completedSnapshots: number;
            latestAnalyzedAt: Date;
        };
        snapshots: {
            id: string;
            commitSha: string;
            shortCommitSha: string;
            branch: string;
            status: import("../generated/prisma/enums").AnalysisStatus;
            itemsAnalyzed: number;
            languageCount: number;
            technologyCount: number;
            hasAiExplanation: boolean;
            aiModels: string[];
            generatedAt: Date;
            truncatedByGitHub: boolean;
            limitedByDevScope: boolean;
            analyzedAt: Date;
        }[];
    }>;
}
