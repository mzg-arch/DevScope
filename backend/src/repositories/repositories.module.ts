import { Module } from "@nestjs/common";

import { RepositoriesController } from "./repositories.controller";
import { RepositoriesService } from "./repositories.service";
import { RepositoryExplanationService } from "./repository-explanation.service";
import { RepositoryPersistenceService } from "./repository-persistence.service";
import { TechnologyDetectorService } from "./technology-detector.service";

@Module({
  controllers: [RepositoriesController],
  providers: [
    RepositoriesService,
    RepositoryPersistenceService,
    TechnologyDetectorService,
    RepositoryExplanationService,
  ],
  exports: [
    RepositoriesService,
    RepositoryPersistenceService,
  ],
})
export class RepositoriesModule {}