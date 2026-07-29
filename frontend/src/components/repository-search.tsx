"use client";

import { FormEvent, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  GitFork,
  LoaderCircle,
  Star,
} from "lucide-react";

type Repository = {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  githubUrl: string;
  language: string | null;
  stars: number;
  forks: number;
  openIssues: number;
  visibility: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export function RepositorySearch() {
  const [url, setUrl] = useState("");
  const [repository, setRepository] = useState<Repository | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setRepository(null);
    setIsLoading(true);

    try {
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

      setRepository(data);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-blue-950/30 backdrop-blur sm:flex-row">
          <div className="flex flex-1 items-center gap-3 px-3">
            <GitBranch className="size-5 shrink-0 text-zinc-500" />

            <input
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://github.com/facebook/react"
              required
              aria-label="GitHub repository URL"
              className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <LoaderCircle className="size-4 animate-spin" />
                Inspecting
              </>
            ) : (
              <>
                Analyze repository
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="size-4 shrink-0" />
          {error}
        </div>
      )}

      {repository && (
        <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.07] p-5 text-left">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-emerald-300">
                <CheckCircle2 className="size-4" />
                Repository found
              </div>

              <a
                href={repository.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-white hover:text-blue-300"
              >
                {repository.fullName}
              </a>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                {repository.description ?? "No repository description provided."}
              </p>
            </div>

            <span className="rounded-full border border-white/10 px-3 py-1 text-xs capitalize text-zinc-400">
              {repository.visibility}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-400">
            {repository.language && <span>{repository.language}</span>}

            <span className="flex items-center gap-1">
              <Star className="size-4" />
              {repository.stars.toLocaleString()}
            </span>

            <span className="flex items-center gap-1">
              <GitFork className="size-4" />
              {repository.forks.toLocaleString()}
            </span>

            <span>{repository.openIssues.toLocaleString()} open issues</span>
          </div>
        </div>
      )}
    </div>
  );
}