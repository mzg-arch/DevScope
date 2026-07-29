import type { ReactNode } from "react";

import { RepositoryDashboard } from "@/components/dashboard/repository-dashboard";

type RepositoryDashboardLayoutProps = {
  children: ReactNode;
  params: Promise<{
    owner: string;
    repository: string;
  }>;
};

export default async function RepositoryDashboardLayout({
  children,
  params,
}: RepositoryDashboardLayoutProps) {
  const { owner, repository } = await params;

  return (
    <RepositoryDashboard
      owner={owner}
      repositoryName={repository}
    >
      {children}
    </RepositoryDashboard>
  );
}
