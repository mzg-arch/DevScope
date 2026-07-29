import { InspectRepositoryDto } from "./dto/inspect-repository.dto";
import { RepositoriesService } from "./repositories.service";
export declare class RepositoriesController {
    private readonly repositoriesService;
    constructor(repositoriesService: RepositoriesService);
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
}
