import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RepositoriesService } from './repositories.service';
import { TechnologyDetectorService } from './technology-detector.service';
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
        level: 'beginner' | 'intermediate' | 'advanced';
        reason: string;
    };
    keyTakeaways: string[];
};
type RepositoryDetails = Awaited<ReturnType<RepositoriesService['inspectRepository']>>;
type RepositoryExplanationResult = {
    repository: RepositoryDetails;
    explanation: GeneratedExplanation;
    generatedAt: string;
    model: string;
};
export declare class RepositoryExplanationService implements OnModuleInit {
    private readonly configService;
    private readonly repositoriesService;
    private readonly technologyDetectorService;
    private readonly logger;
    private readonly explanationCache;
    private readonly inFlightRequests;
    constructor(configService: ConfigService, repositoriesService: RepositoriesService, technologyDetectorService: TechnologyDetectorService);
    onModuleInit(): void;
    explainRepository(url: string): Promise<RepositoryExplanationResult>;
    private generateRepositoryExplanation;
    private createGeminiInteractionWithRetry;
    private isTransientProviderError;
    private isRateLimitError;
    private calculateRetryDelay;
    private wait;
    private createCacheKey;
    private getCachedExplanation;
    private getGeminiConfiguration;
    private normalizeEnvironmentValue;
    private getProviderErrorDetails;
    private extractRetryAfterSeconds;
    private sanitizeLogValue;
    private throwProviderException;
}
export {};
