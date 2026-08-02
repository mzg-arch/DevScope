export type RepositoryHistorySnapshot = {
  id: string;
  commitSha: string;
  shortCommitSha: string;
  branch: string;
  status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
  itemsAnalyzed: number;
  languageCount: number;
  technologyCount: number;
  hasAiExplanation: boolean;
  aiModels: string[];
  generatedAt: string | null;
  truncatedByGitHub: boolean;
  limitedByDevScope: boolean;
  analyzedAt: string;
};

export type RepositoryHistoryResponse = {
  repository: {
    owner: string;
    name: string;
    fullName: string;
    githubUrl: string;
    defaultBranch: string;
    primaryLanguage: string | null;
    lastSyncedAt: string;
  };
  summary: {
    totalSnapshots: number;
    completedSnapshots: number;
    latestAnalyzedAt: string | null;
  };
  snapshots: RepositoryHistorySnapshot[];
};