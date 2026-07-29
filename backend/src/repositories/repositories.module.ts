import { Module } from "@nestjs/common";

import { RepositoriesController } from "./repositories.controller";
import { RepositoriesService } from "./repositories.service";
import { RepositoryExplanationService } from "./repository-explanation.service";
import { TechnologyDetectorService } from "./technology-detector.service";

@Module({
  controllers: [RepositoriesController],
  providers: [
    RepositoriesService,
    TechnologyDetectorService,
    RepositoryExplanationService,
  ],
})
export class RepositoriesModule {}