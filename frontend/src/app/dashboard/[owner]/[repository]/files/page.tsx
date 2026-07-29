"use client";

import { useParams } from "next/navigation";

import { RepositoryDashboard } from "@/components/dashboard/repository-dashboard";

export default function RepositoryFilesPage() {
  const params = useParams<{
    owner: string;
    repository: string;
  }>();

  return (
    <RepositoryDashboard
      owner={decodeURIComponent(params.owner)}
      repositoryName={decodeURIComponent(params.repository)}
      activeView="files"
    />
  );
}