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
    <div className="mx-auto w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div className="surface flex flex-col gap-2 rounded-xl border border-slate-300 p-2 shadow-sm sm:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-lg px-3 transition-colors focus-within:bg-blue-50/70">
            <GitBranch className="size-4 shrink-0 text-slate-400" />

            <input
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="Paste a public GitHub repository URL"
              required
              aria-label="GitHub repository URL"
              className="h-11 w-full bg-transparent text-[13px] text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-xs font-medium text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <LoaderCircle className="size-3.5 animate-spin" />
                Opening
              </>
            ) : (
              <>
                Analyze repository
                <ArrowRight className="size-3.5" />
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/90 px-3 py-2.5 text-xs text-red-700">
          <AlertCircle className="size-3.5 shrink-0" />
          {error}
        </div>
      )}
    </div>
  );
}