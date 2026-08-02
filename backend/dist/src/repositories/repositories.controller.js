"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesController = void 0;
const common_1 = require("@nestjs/common");
const inspect_repository_dto_1 = require("./dto/inspect-repository.dto");
const repositories_service_1 = require("./repositories.service");
const repository_explanation_service_1 = require("./repository-explanation.service");
const repository_persistence_service_1 = require("./repository-persistence.service");
const technology_detector_service_1 = require("./technology-detector.service");
let RepositoriesController = class RepositoriesController {
    repositoriesService;
    technologyDetectorService;
    repositoryExplanationService;
    repositoryPersistenceService;
    constructor(repositoriesService, technologyDetectorService, repositoryExplanationService, repositoryPersistenceService) {
        this.repositoriesService = repositoriesService;
        this.technologyDetectorService = technologyDetectorService;
        this.repositoryExplanationService = repositoryExplanationService;
        this.repositoryPersistenceService = repositoryPersistenceService;
    }
    inspectRepository(dto) {
        return this.repositoriesService.inspectRepository(dto.url);
    }
    getRepositoryTree(dto) {
        return this.repositoriesService.getRepositoryTree(dto.url);
    }
    detectTechnologies(dto) {
        return this.technologyDetectorService.detectTechnologies(dto.url);
    }
    explainRepository(dto) {
        return this.repositoryExplanationService.explainRepository(dto.url);
    }
    async getRepositoryHistory(dto) {
        const fullName = this.repositoriesService.getRepositoryFullName(dto.url);
        const history = await this.repositoryPersistenceService.getRepositoryHistory(fullName);
        if (!history) {
            throw new common_1.NotFoundException("No saved analysis history exists for this repository.");
        }
        return history;
    }
};
exports.RepositoriesController = RepositoriesController;
__decorate([
    (0, common_1.Post)("inspect"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inspect_repository_dto_1.InspectRepositoryDto]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "inspectRepository", null);
__decorate([
    (0, common_1.Post)("tree"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inspect_repository_dto_1.InspectRepositoryDto]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "getRepositoryTree", null);
__decorate([
    (0, common_1.Post)("technologies"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inspect_repository_dto_1.InspectRepositoryDto]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "detectTechnologies", null);
__decorate([
    (0, common_1.Post)("explain"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inspect_repository_dto_1.InspectRepositoryDto]),
    __metadata("design:returntype", void 0)
], RepositoriesController.prototype, "explainRepository", null);
__decorate([
    (0, common_1.Post)("history"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inspect_repository_dto_1.InspectRepositoryDto]),
    __metadata("design:returntype", Promise)
], RepositoriesController.prototype, "getRepositoryHistory", null);
exports.RepositoriesController = RepositoriesController = __decorate([
    (0, common_1.Controller)("repositories"),
    __metadata("design:paramtypes", [repositories_service_1.RepositoriesService,
        technology_detector_service_1.TechnologyDetectorService,
        repository_explanation_service_1.RepositoryExplanationService,
        repository_persistence_service_1.RepositoryPersistenceService])
], RepositoriesController);
//# sourceMappingURL=repositories.controller.js.map