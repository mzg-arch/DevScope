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
let RepositoriesController = class RepositoriesController {
    repositoriesService;
    constructor(repositoriesService) {
        this.repositoriesService = repositoriesService;
    }
    inspectRepository(dto) {
        return this.repositoriesService.inspectRepository(dto.url);
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
exports.RepositoriesController = RepositoriesController = __decorate([
    (0, common_1.Controller)("repositories"),
    __metadata("design:paramtypes", [repositories_service_1.RepositoriesService])
], RepositoriesController);
//# sourceMappingURL=repositories.controller.js.map