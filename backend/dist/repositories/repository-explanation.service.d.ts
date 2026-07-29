import { ConfigService } from "@nestjs/config";
import { RepositoriesService } from "./repositories.service";
import { TechnologyDetectorService } from "./technology-detector.service";
type GeneratedExplanation = {
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
export declare class RepositoryExplanationService {
    private readonly configService;
    private readonly repositoriesService;
    private readonly technologyDetectorService;
    private readonly logger;
    constructor(configService: ConfigService, repositoriesService: RepositoriesService, technologyDetectorService: TechnologyDetectorService);
    explainRepository(url: string): Promise<{
        repository: {
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
        explanation: GeneratedExplanation;
        generatedAt: string;
        model: string;
    }>;
}
export {};
