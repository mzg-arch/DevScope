import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";

import { InspectRepositoryDto } from "./dto/inspect-repository.dto";
import { RepositoriesService } from "./repositories.service";
import { RepositoryExplanationService } from "./repository-explanation.service";
import { TechnologyDetectorService } from "./technology-detector.service";

@Controller("repositories")
export class RepositoriesController {
  constructor(
    private readonly repositoriesService: RepositoriesService,
    private readonly technologyDetectorService: TechnologyDetectorService,
    private readonly repositoryExplanationService: RepositoryExplanationService,
  ) {}

  @Post("inspect")
  @HttpCode(HttpStatus.OK)
  inspectRepository(@Body() dto: InspectRepositoryDto) {
    return this.repositoriesService.inspectRepository(dto.url);
  }

  @Post("tree")
  @HttpCode(HttpStatus.OK)
  getRepositoryTree(@Body() dto: InspectRepositoryDto) {
    return this.repositoriesService.getRepositoryTree(dto.url);
  }

  @Post("technologies")
  @HttpCode(HttpStatus.OK)
  detectTechnologies(@Body() dto: InspectRepositoryDto) {
    return this.technologyDetectorService.detectTechnologies(
      dto.url,
    );
  }

  @Post("explain")
  @HttpCode(HttpStatus.OK)
  explainRepository(@Body() dto: InspectRepositoryDto) {
    return this.repositoryExplanationService.explainRepository(
      dto.url,
    );
  }
}