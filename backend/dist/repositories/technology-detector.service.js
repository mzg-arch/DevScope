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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyDetectorService = void 0;
const common_1 = require("@nestjs/common");
const repositories_service_1 = require("./repositories.service");
const languageRules = [
    { name: "TypeScript", extensions: ["ts", "tsx"] },
    { name: "JavaScript", extensions: ["js", "jsx", "mjs", "cjs"] },
    { name: "Python", extensions: ["py"] },
    { name: "Java", extensions: ["java"] },
    { name: "C#", extensions: ["cs"] },
    { name: "C++", extensions: ["cpp", "cc", "cxx", "hpp"] },
    { name: "C", extensions: ["c", "h"] },
    { name: "Go", extensions: ["go"] },
    { name: "Rust", extensions: ["rs"] },
    { name: "Ruby", extensions: ["rb"] },
    { name: "PHP", extensions: ["php"] },
    { name: "Kotlin", extensions: ["kt", "kts"] },
    { name: "Swift", extensions: ["swift"] },
    { name: "Dart", extensions: ["dart"] },
];
const technologyRules = [
    {
        name: "Next.js",
        category: "Framework",
        confidence: "high",
        patterns: [
            /(^|\/)next\.config\.(js|mjs|cjs|ts)$/,
            /(^|\/)app\/layout\.(js|jsx|ts|tsx)$/,
        ],
    },
    {
        name: "React",
        category: "Library",
        confidence: "medium",
        patterns: [/\.(jsx|tsx)$/],
    },
    {
        name: "Vue",
        category: "Framework",
        confidence: "high",
        patterns: [/\.vue$/, /(^|\/)vue\.config\.(js|ts)$/],
    },
    {
        name: "Svelte",
        category: "Framework",
        confidence: "high",
        patterns: [/\.svelte$/, /(^|\/)svelte\.config\.(js|ts)$/],
    },
    {
        name: "NestJS",
        category: "Framework",
        confidence: "high",
        patterns: [/(^|\/)nest-cli\.json$/],
    },
    {
        name: "Angular",
        category: "Framework",
        confidence: "high",
        patterns: [/(^|\/)angular\.json$/],
    },
    {
        name: "Vite",
        category: "Build tool",
        confidence: "high",
        patterns: [/(^|\/)vite\.config\.(js|mjs|ts)$/],
    },
    {
        name: "Tailwind CSS",
        category: "Styling",
        confidence: "high",
        patterns: [/(^|\/)tailwind\.config\.(js|cjs|mjs|ts)$/],
    },
    {
        name: "Prisma",
        category: "Database",
        confidence: "high",
        patterns: [/(^|\/)prisma\/schema\.prisma$/],
    },
    {
        name: "Supabase",
        category: "Database",
        confidence: "high",
        patterns: [/(^|\/)supabase\/config\.toml$/],
    },
    {
        name: "Docker",
        category: "Infrastructure",
        confidence: "high",
        patterns: [
            /(^|\/)dockerfile$/,
            /(^|\/)docker-compose\.ya?ml$/,
            /(^|\/)compose\.ya?ml$/,
        ],
    },
    {
        name: "GitHub Actions",
        category: "CI/CD",
        confidence: "high",
        patterns: [/(^|\/)\.github\/workflows\/.+\.ya?ml$/],
    },
    {
        name: "Turborepo",
        category: "Monorepo",
        confidence: "high",
        patterns: [/(^|\/)turbo\.json$/],
    },
    {
        name: "npm",
        category: "Package manager",
        confidence: "high",
        patterns: [/(^|\/)package-lock\.json$/],
    },
    {
        name: "pnpm",
        category: "Package manager",
        confidence: "high",
        patterns: [/(^|\/)pnpm-lock\.yaml$/],
    },
    {
        name: "Yarn",
        category: "Package manager",
        confidence: "high",
        patterns: [/(^|\/)yarn\.lock$/],
    },
    {
        name: "Bun",
        category: "Package manager",
        confidence: "high",
        patterns: [/(^|\/)bun\.lockb?$/],
    },
    {
        name: "Vitest",
        category: "Testing",
        confidence: "high",
        patterns: [/(^|\/)vitest\.config\.(js|mjs|ts)$/],
    },
    {
        name: "Jest",
        category: "Testing",
        confidence: "high",
        patterns: [/(^|\/)jest\.config\.(js|cjs|mjs|ts)$/],
    },
    {
        name: "Playwright",
        category: "Testing",
        confidence: "high",
        patterns: [/(^|\/)playwright\.config\.(js|ts)$/],
    },
    {
        name: "Cypress",
        category: "Testing",
        confidence: "high",
        patterns: [/(^|\/)cypress\.config\.(js|ts)$/],
    },
    {
        name: "ESLint",
        category: "Code quality",
        confidence: "high",
        patterns: [
            /(^|\/)eslint\.config\.(js|mjs|ts)$/,
            /(^|\/)\.eslintrc(\..+)?$/,
        ],
    },
    {
        name: "Terraform",
        category: "Infrastructure",
        confidence: "high",
        patterns: [/\.tf$/],
    },
    {
        name: "Maven",
        category: "Build tool",
        confidence: "high",
        patterns: [/(^|\/)pom\.xml$/],
    },
    {
        name: "Gradle",
        category: "Build tool",
        confidence: "high",
        patterns: [/(^|\/)build\.gradle(\.kts)?$/],
    },
];
let TechnologyDetectorService = class TechnologyDetectorService {
    repositoriesService;
    constructor(repositoriesService) {
        this.repositoriesService = repositoriesService;
    }
    async detectTechnologies(repositoryUrl) {
        const tree = await this.repositoriesService.getRepositoryTree(repositoryUrl);
        const extensionCounts = tree.items.reduce((counts, item) => {
            if (item.type !== "file" || !item.extension) {
                return counts;
            }
            counts[item.extension] =
                (counts[item.extension] ?? 0) + 1;
            return counts;
        }, {});
        const detectedLanguages = languageRules
            .map((language) => {
            const count = language.extensions.reduce((total, extension) => total + (extensionCounts[extension] ?? 0), 0);
            return {
                name: language.name,
                files: count,
                extensions: language.extensions.filter((extension) => extensionCounts[extension]),
            };
        })
            .filter((language) => language.files > 0)
            .sort((first, second) => second.files - first.files);
        const totalLanguageFiles = detectedLanguages.reduce((total, language) => total + language.files, 0);
        const languages = detectedLanguages.map((language) => ({
            ...language,
            percentage: totalLanguageFiles > 0
                ? Math.round((language.files / totalLanguageFiles) * 1000) / 10
                : 0,
        }));
        const paths = tree.items.map((item) => ({
            original: item.path,
            normalized: item.path.toLowerCase(),
        }));
        const technologies = technologyRules
            .map((rule) => {
            const evidence = paths
                .filter((path) => rule.patterns.some((pattern) => pattern.test(path.normalized)))
                .slice(0, 5)
                .map((path) => path.original);
            return {
                name: rule.name,
                category: rule.category,
                confidence: rule.confidence,
                evidence,
            };
        })
            .filter((technology) => technology.evidence.length > 0)
            .sort((first, second) => {
            const categoryComparison = first.category.localeCompare(second.category);
            if (categoryComparison !== 0) {
                return categoryComparison;
            }
            return first.name.localeCompare(second.name);
        });
        return {
            repository: tree.repository,
            summary: {
                analyzedItems: tree.items.length,
                detectedLanguages: languages.length,
                detectedTechnologies: technologies.length,
            },
            languages,
            technologies,
            limits: tree.limits,
        };
    }
};
exports.TechnologyDetectorService = TechnologyDetectorService;
exports.TechnologyDetectorService = TechnologyDetectorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_service_1.RepositoriesService])
], TechnologyDetectorService);
//# sourceMappingURL=technology-detector.service.js.map