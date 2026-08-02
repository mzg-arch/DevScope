import { Injectable } from "@nestjs/common";
import { RepositoryPersistenceService } from "./repository-persistence.service";
import { RepositoriesService } from "./repositories.service";

type Confidence = "high" | "medium";

type TechnologyRule = {
  name: string;
  category: string;
  confidence: Confidence;
  patterns: RegExp[];
};

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

const technologyRules: TechnologyRule[] = [
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

@Injectable()
export class TechnologyDetectorService {
  constructor(
    private readonly repositoriesService: RepositoriesService,
    private readonly repositoryPersistenceService: RepositoryPersistenceService,
  ) {}

  async detectTechnologies(repositoryUrl: string) {
    const version =
      await this.repositoriesService.getRepositoryVersion(
        repositoryUrl,
      );

    const cachedSnapshot =
      await this.repositoryPersistenceService.findCompletedSnapshot(
        version.repository.fullName,
        version.commitSha,
      );

    if (cachedSnapshot) {
      return {
        repository: {
          name: cachedSnapshot.repository.name,
          fullName: cachedSnapshot.repository.fullName,
          branch: cachedSnapshot.branch,
          githubUrl: cachedSnapshot.repository.githubUrl,
        },
        summary: {
          analyzedItems: cachedSnapshot.itemsAnalyzed,
          detectedLanguages:
            cachedSnapshot.languages.length,
          detectedTechnologies:
            cachedSnapshot.technologies.length,
        },
        languages: cachedSnapshot.languages.map(
          (language) => ({
            name: language.name,
            files: language.fileCount,
            extensions: language.extensions,
            percentage: language.percentage,
          }),
        ),
        technologies: cachedSnapshot.technologies.map(
          (technology) => ({
            name: technology.name,
            category: technology.category,
            confidence: technology.confidence,
            evidence: technology.evidence,
          }),
        ),
        limits: {
          truncatedByGitHub:
            cachedSnapshot.truncatedByGitHub,
          limitedByDevScope:
            cachedSnapshot.limitedByDevScope,
          maximumReturnedItems:
            cachedSnapshot.maximumReturnedItems,
        },
        cache: {
          hit: true,
          commitSha: cachedSnapshot.commitSha,
        },
      };
    }

    const tree =
      await this.repositoriesService.getRepositoryTree(
        repositoryUrl,
        version,
      );

    const extensionCounts = tree.items.reduce<
      Record<string, number>
    >((counts, item) => {
      if (item.type !== "file" || !item.extension) {
        return counts;
      }

      counts[item.extension] =
        (counts[item.extension] ?? 0) + 1;

      return counts;
    }, {});

    const detectedLanguages = languageRules
      .map((language) => {
        const count = language.extensions.reduce(
          (total, extension) =>
            total + (extensionCounts[extension] ?? 0),
          0,
        );

        return {
          name: language.name,
          files: count,
          extensions: language.extensions.filter(
            (extension) => extensionCounts[extension],
          ),
        };
      })
      .filter((language) => language.files > 0)
      .sort(
        (first, second) =>
          second.files - first.files,
      );

    const totalLanguageFiles =
      detectedLanguages.reduce(
        (total, language) =>
          total + language.files,
        0,
      );

    const languages = detectedLanguages.map(
      (language) => ({
        ...language,
        percentage:
          totalLanguageFiles > 0
            ? Math.round(
                (language.files /
                  totalLanguageFiles) *
                  1000,
              ) / 10
            : 0,
      }),
    );

    const paths = tree.items.map((item) => ({
      original: item.path,
      normalized: item.path.toLowerCase(),
    }));

    const technologies = technologyRules
      .map((rule) => {
        const evidence = paths
          .filter((path) =>
            rule.patterns.some((pattern) =>
              pattern.test(path.normalized),
            ),
          )
          .slice(0, 5)
          .map((path) => path.original);

        return {
          name: rule.name,
          category: rule.category,
          confidence: rule.confidence,
          evidence,
        };
      })
      .filter(
        (technology) =>
          technology.evidence.length > 0,
      )
      .sort((first, second) => {
        const categoryComparison =
          first.category.localeCompare(
            second.category,
          );

        if (categoryComparison !== 0) {
          return categoryComparison;
        }

        return first.name.localeCompare(second.name);
      });

    await this.repositoryPersistenceService.saveCompletedSnapshot({
      repositoryFullName: tree.repository.fullName,
      commitSha: tree.commitSha,
      branch: tree.repository.branch,
      treeItems: tree.items,
      limits: tree.limits,
      languages,
      technologies,
    });

    return {
      repository: tree.repository,
      summary: {
        analyzedItems: tree.items.length,
        detectedLanguages: languages.length,
        detectedTechnologies:
          technologies.length,
      },
      languages,
      technologies,
      limits: tree.limits,
      cache: {
        hit: false,
        commitSha: tree.commitSha,
      },
    };
  }
}