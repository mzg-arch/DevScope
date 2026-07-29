import type { Repository } from "@/types/repository";

export type RepositoryExplanation = {
  purpose: string;
  howItWorks: string;
  architecture: {
    name: string;
    description: string;
    evidencePaths: string[];
  }[];
  gettingStarted: {
    step: number;
    title: string;
    description: string;
    paths: string[];
  }[];
  skills: string[];
  difficulty: {
    level: "beginner" | "intermediate" | "advanced";
    reason: string;
  };
  keyTakeaways: string[];
};

export type RepositoryExplanationResponse = {
  repository: Repository;
  explanation: RepositoryExplanation;
  generatedAt: string;
  model: string;
};