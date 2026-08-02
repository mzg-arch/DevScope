import { RepositoriesService } from "./repositories.service";
type Confidence = "high" | "medium";
export declare class TechnologyDetectorService {
    private readonly repositoriesService;
    constructor(repositoriesService: RepositoriesService);
    detectTechnologies(repositoryUrl: string): Promise<{
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
            confidence: Confidence;
            evidence: string[];
        }[];
        limits: {
            truncatedByGitHub: boolean;
            limitedByDevScope: boolean;
            maximumReturnedItems: number;
        };
    }>;
}
export {};
