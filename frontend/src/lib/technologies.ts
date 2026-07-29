export type DetectedLanguage = {
  name: string;
  files: number;
  extensions: string[];
  percentage: number;
};

export type DetectedTechnology = {
  name: string;
  category: string;
  confidence: "high" | "medium";
  evidence: string[];
};

export type TechnologyAnalysis = {
  summary: {
    analyzedItems: number;
    detectedLanguages: number;
    detectedTechnologies: number;
  };
  languages: DetectedLanguage[];
  technologies: DetectedTechnology[];
  limits?: {
    githubTruncated?: boolean;
    devScopeLimited?: boolean;
    maxItems?: number;
  };
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export async function detectRepositoryTechnologies(
  url: string,
): Promise<TechnologyAnalysis> {
  const response = await fetch(
    `${API_URL}/repositories/technologies`,
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
      message ?? "Could not detect repository technologies.",
    );
  }

  return data as TechnologyAnalysis;
}