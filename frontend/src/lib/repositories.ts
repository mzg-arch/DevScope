import type { Repository } from "@/types/repository";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export async function inspectRepository(
  url: string,
): Promise<Repository> {
  const response = await fetch(`${API_URL}/repositories/inspect`, {
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

    throw new Error(message ?? "Unable to inspect this repository.");
  }

  return data as Repository;
}