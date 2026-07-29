import type { RepositoryExplanationResponse } from "@/types/repository-explanation";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export async function explainRepository(
  url: string,
): Promise<RepositoryExplanationResponse> {
  const response = await fetch(
    `${API_URL}/repositories/explain`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    const message = Array.isArray(data.message)
      ? data.message[0]
      : data.message;

    throw new Error(
      message ?? "Could not generate the AI explanation.",
    );
  }

  return data as RepositoryExplanationResponse;
}