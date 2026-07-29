"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  ArrowRight,
  GitBranch,
  LoaderCircle,
} from "lucide-react";

import { inspectRepository } from "@/lib/repositories";

export function RepositorySearch() {
  const router = useRouter();

  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const repository = await inspectRepository(url);

      sessionStorage.setItem(
        "devscope:last-repository",
        JSON.stringify(repository),
      );

      router.push(
        `/dashboard/${encodeURIComponent(repository.owner.username)}/${encodeURIComponent(repository.name)}`,
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );

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
                Opening dashboard
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
    </div>
  );
}