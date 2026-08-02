import { RepositoryPersistenceService } from "./repository-persistence.service";
import { RepositoriesService } from "./repositories.service";
export declare class TechnologyDetectorService {
    private readonly repositoriesService;
    private readonly repositoryPersistenceService;
    constructor(repositoriesService: RepositoriesService, repositoryPersistenceService: RepositoryPersistenceService);
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
}
