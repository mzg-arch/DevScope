export type RepositoryTreeItem = {
  path: string;
  name: string;
  type: "file" | "directory";
  sha: string;
  size: number | null;
  extension: string | null;
};

export type RepositoryTreeResponse = {
  repository: {
    name: string;
    fullName: string;
    branch: string;
    githubUrl: string;
  };
  summary: {
    totalItemsReceived: number;
    totalFiles: number;
    totalDirectories: number;
    topExtensions: Array<{
      extension: string;
      count: number;
    }>;
  };
  limits: {
    truncatedByGitHub: boolean;
    limitedByDevScope: boolean;
    maximumReturnedItems: number;
  };
  items: RepositoryTreeItem[];
};