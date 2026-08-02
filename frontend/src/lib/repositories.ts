import type { Repository } from "@/types/repository";
import type { RepositoryHistoryResponse } from "@/types/repository-history";
import type { RepositoryTreeResponse } from "@/types/repository-tree";

export type { Repository };

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:4000/api";

async function postRepositoryRequest<T>(
  endpoint: string,
  url: string,
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = Array.isArray(data.message)
      ? data.message[0]
      : data.message;

    throw new Error(
      message ?? "Unable to retrieve this repository.",
    );
  }

  return data as T;
}

export function inspectRepository(url: string) {
  return postRepositoryRequest<Repository>(
    "/repositories/inspect",
    url,
  );
}

export function getRepositoryTree(url: string) {
  return postRepositoryRequest<RepositoryTreeResponse>(
    "/repositories/tree",
    url,
  );
}

export function getRepositoryHistory(url: string) {
  return postRepositoryRequest<RepositoryHistoryResponse>(
    "/repositories/history",
    url,
  );
}