import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";

import { InspectRepositoryDto } from "./dto/inspect-repository.dto";
import { RepositoriesService } from "./repositories.service";

@Controller("repositories")
export class RepositoriesController {
  constructor(
    private readonly repositoriesService: RepositoriesService,
  ) {}

  @Post("inspect")
  @HttpCode(HttpStatus.OK)
  inspectRepository(@Body() dto: InspectRepositoryDto) {
    return this.repositoriesService.inspectRepository(dto.url);
  }
}