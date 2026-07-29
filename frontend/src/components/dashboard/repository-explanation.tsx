"use client";

import {
  Bot,
  Code2,
  GraduationCap,
  Layers3,
  ListChecks,
  LoaderCircle,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useState } from "react";

import { explainRepository } from "@/lib/explanations";
import type { Repository } from "@/lib/repositories";
import type { RepositoryExplanationResponse } from "@/types/repository-explanation";

type RepositoryExplanationProps = {
  repository: Repository;
};

const pendingRequests = new Map<
  string,
  Promise<RepositoryExplanationResponse>
>();

export function RepositoryExplanation({
  repository,
}: RepositoryExplanationProps) {
  const [result, setResult] =
    useState<RepositoryExplanationResponse | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  const cacheKey = `devscope:explanation:v1:${repository.fullName}`;

  useEffect(() => {
    let cancelled = false;

    async function loadExplanation() {
      setIsLoading(true);
      setError("");

      try {
        const cached = sessionStorage.getItem(cacheKey);

        if (cached && reloadKey === 0) {
          const parsed = JSON.parse(
            cached,
          ) as RepositoryExplanationResponse;

          if (!cancelled) {
            setResult(parsed);
            setIsLoading(false);
          }

          return;
        }

        let request = pendingRequests.get(cacheKey);

        if (!request) {
          request = explainRepository(repository.githubUrl).finally(
            () => {
              pendingRequests.delete(cacheKey);
            },
          );

          pendingRequests.set(cacheKey, request);
        }

        const explanation = await request;

        sessionStorage.setItem(
          cacheKey,
          JSON.stringify(explanation),
        );

        if (!cancelled) {
          setResult(explanation);
        }
      } catch (caughtError) {
        if (!cancelled) {
          setError(
            caughtError instanceof Error
              ? caughtError.message
              : "Could not generate the repository explanation.",
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadExplanation();

    return () => {
      cancelled = true;
    };
  }, [cacheKey, reloadKey, repository.githubUrl]);

  function regenerateExplanation() {
    sessionStorage.removeItem(cacheKey);
    pendingRequests.delete(cacheKey);
    setReloadKey((current) => current + 1);
  }

  if (isLoading) {
    return (
      <section className="surface flex min-h-[430px] items-center justify-center rounded-2xl border border-slate-200 p-8">
        <div className="max-w-sm text-center">
          <LoaderCircle className="mx-auto h-5 w-5 animate-spin text-slate-700" />

          <p className="mt-4 text-sm font-semibold text-slate-950">
            Generating your repository guide
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            DevScope is combining the repository metadata,
            technologies and verified file paths.
          </p>
        </div>
      </section>
    );
  }

  if (error || !result) {
    return (
      <section className="surface rounded-2xl border border-red-200 p-6">
        <div className="flex items-start gap-3">
          <TriangleAlert className="mt-0.5 h-5 w-5 text-red-500" />

          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              AI explanation failed
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-600">
              {error}
            </p>

            <button
              type="button"
              onClick={regenerateExplanation}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-xs font-medium text-white hover:bg-blue-600"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Try again
            </button>
          </div>
        </div>
      </section>
    );
  }

  const { explanation } = result;

  return (
    <div className="space-y-5">
      <section className="surface rounded-2xl border border-slate-200 p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-blue-600" />

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Ask DevScope
              </p>
            </div>

            <h1 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
              AI repository guide
            </h1>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
              A simple explanation of {repository.fullName} based on
              its repository metadata and detected files.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-300 px-2.5 py-1.5 text-[10px] font-medium text-slate-500">
              {result.model}
            </span>

            <button
              type="button"
              onClick={regenerateExplanation}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-xs font-medium text-slate-700 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Regenerate
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="surface rounded-2xl border border-slate-200 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            What it does
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-700">
            {explanation.purpose}
          </p>
        </article>

        <article className="surface rounded-2xl border border-slate-200 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            How it works
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-700">
            {explanation.howItWorks}
          </p>
        </article>
      </section>

      <section className="surface rounded-2xl border border-slate-200 p-5">
        <div className="flex items-center gap-2">
          <Layers3 className="h-4 w-4 text-slate-700" />

          <h2 className="text-sm font-semibold text-slate-950">
            Architecture explained
          </h2>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {explanation.architecture.map((section) => (
            <article
              key={section.name}
              className="min-w-0 rounded-xl border border-slate-200 bg-slate-100/70 p-4 hover:border-slate-400 hover:bg-slate-200/70"
            >
              <h3 className="text-xs font-semibold text-slate-950">
                {section.name}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                {section.description}
              </p>

              {section.evidencePaths.length > 0 && (
                <div className="mt-4 border-t border-slate-200 pt-3">
                  {section.evidencePaths.map((path) => (
                    <p
                      key={path}
                      title={path}
                      className="mt-1 truncate font-mono text-[10px] text-slate-500"
                    >
                      {path}
                    </p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="surface rounded-2xl border border-slate-200 p-5">
        <div className="flex items-center gap-2">
          <ListChecks className="h-4 w-4 text-slate-700" />

          <h2 className="text-sm font-semibold text-slate-950">
            Where to start
          </h2>
        </div>

        <div className="mt-5 space-y-3">
          {explanation.gettingStarted.map((step) => (
            <article
              key={`${step.step}-${step.title}`}
              className="flex gap-4 rounded-xl border border-slate-200 bg-slate-100/70 p-4"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                {step.step}
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {step.description}
                </p>

                {step.paths.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {step.paths.map((path) => (
                      <span
                        key={path}
                        title={path}
                        className="max-w-full truncate rounded-md bg-slate-200 px-2 py-1 font-mono text-[10px] text-slate-600"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="surface rounded-2xl border border-slate-200 p-5 lg:col-span-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-slate-700" />

            <h2 className="text-sm font-semibold text-slate-950">
              Skills you can learn
            </h2>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {explanation.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="surface rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-slate-700" />

            <h2 className="text-sm font-semibold text-slate-950">
              Difficulty
            </h2>
          </div>

          <span
            className={`mt-4 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold capitalize ${getDifficultyStyle(
              explanation.difficulty.level,
            )}`}
          >
            {explanation.difficulty.level}
          </span>

          <p className="mt-3 text-xs leading-5 text-slate-600">
            {explanation.difficulty.reason}
          </p>
        </article>
      </section>

      <section className="surface rounded-2xl border border-slate-200 p-5">
        <h2 className="text-sm font-semibold text-slate-950">
          Key takeaways
        </h2>

        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {explanation.keyTakeaways.map((takeaway) => (
            <div
              key={takeaway}
              className="flex gap-3 rounded-xl border border-slate-200 bg-slate-100/70 p-3"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

              <p className="text-xs leading-5 text-slate-600">
                {takeaway}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function getDifficultyStyle(
  difficulty: "beginner" | "intermediate" | "advanced",
) {
  if (difficulty === "beginner") {
    return "bg-emerald-100 text-emerald-700";
  }

  if (difficulty === "intermediate") {
    return "bg-amber-100 text-amber-700";
  }

  return "bg-red-100 text-red-700";
}