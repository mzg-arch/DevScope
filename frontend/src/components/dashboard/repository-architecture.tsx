"use client";

import {
  Code2,
  Layers3,
  LoaderCircle,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useState } from "react";

import type { Repository } from "@/lib/repositories";
import {
  detectRepositoryTechnologies,
  type TechnologyAnalysis,
} from "@/lib/technologies";

type RepositoryArchitectureProps = {
  repository: Repository;
};

export function RepositoryArchitecture({
  repository,
}: RepositoryArchitectureProps) {
  const [analysis, setAnalysis] =
    useState<TechnologyAnalysis | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  const cacheKey = `devscope:technologies:v1:${repository.fullName}`;

  useEffect(() => {
    let cancelled = false;

    async function loadArchitecture() {
      setIsLoading(true);
      setError("");

      try {
        const cached = sessionStorage.getItem(cacheKey);

        if (cached && reloadKey === 0) {
          const parsed = JSON.parse(cached) as TechnologyAnalysis;

          if (!cancelled) {
            setAnalysis(parsed);
            setIsLoading(false);
          }

          return;
        }

        const result = await detectRepositoryTechnologies(
          repository.githubUrl,
        );

        sessionStorage.setItem(cacheKey, JSON.stringify(result));

        if (!cancelled) {
          setAnalysis(result);
        }
      } catch (caughtError) {
        if (!cancelled) {
          setError(
            caughtError instanceof Error
              ? caughtError.message
              : "Could not analyze this repository.",
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadArchitecture();

    return () => {
      cancelled = true;
    };
  }, [cacheKey, reloadKey, repository.githubUrl]);

  function retryAnalysis() {
    sessionStorage.removeItem(cacheKey);
    setReloadKey((current) => current + 1);
  }

  if (isLoading) {
    return (
      <section className="surface flex min-h-[360px] items-center justify-center rounded-2xl border border-slate-200 p-8">
        <div className="text-center">
          <LoaderCircle className="mx-auto h-5 w-5 animate-spin text-slate-700" />

          <p className="mt-3 text-sm font-medium text-slate-900">
            Detecting repository architecture
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Checking files, frameworks and development tools.
          </p>
        </div>
      </section>
    );
  }

  if (error || !analysis) {
    return (
      <section className="surface rounded-2xl border border-red-200 p-6">
        <div className="flex items-start gap-3">
          <TriangleAlert className="mt-0.5 h-5 w-5 text-red-500" />

          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              Architecture analysis failed
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-600">
              {error}
            </p>

            <button
              type="button"
              onClick={retryAnalysis}
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

  const analysisIsPartial =
    analysis.limits?.githubTruncated ||
    analysis.limits?.devScopeLimited;

  return (
    <div className="space-y-5">
      <section className="surface rounded-2xl border border-slate-200 p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <div className="flex items-center gap-2">
              <Layers3 className="h-4 w-4 text-blue-600" />

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Repository architecture
              </p>
            </div>

            <h1 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
              Technology overview
            </h1>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
              A file-based overview of the languages, frameworks and
              development tools used inside {repository.fullName}.
            </p>
          </div>

          <button
            type="button"
            onClick={retryAnalysis}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-xs font-medium text-slate-700 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Reanalyze
          </button>
        </div>
      </section>

      {analysisIsPartial && (
        <section className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3">
          <div className="flex items-start gap-3">
            <TriangleAlert className="mt-0.5 h-4 w-4 text-amber-600" />

            <div>
              <p className="text-xs font-semibold text-amber-900">
                Partial repository analysis
              </p>

              <p className="mt-1 text-xs leading-5 text-amber-700">
                This repository exceeded one of the analysis limits, so
                these results are based on the files DevScope received.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="grid gap-3 sm:grid-cols-3">
        <SummaryCard
          label="Items analyzed"
          value={analysis.summary.analyzedItems}
        />

        <SummaryCard
          label="Languages"
          value={analysis.summary.detectedLanguages}
        />

        <SummaryCard
          label="Technologies"
          value={analysis.summary.detectedTechnologies}
        />
      </section>

      <section className="surface rounded-2xl border border-slate-200 p-5">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-slate-700" />

          <h2 className="text-sm font-semibold text-slate-950">
            Languages
          </h2>
        </div>

        <div className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {analysis.languages.map((language) => (
            <div key={language.name} className="min-w-0">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    {language.name}
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500">
                    {language.files}{" "}
                    {language.files === 1 ? "file" : "files"}
                  </p>
                </div>

                <p className="text-xs font-medium text-slate-600">
                  {language.percentage}%
                </p>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-300">
                <div
                  className="h-full rounded-full bg-slate-950"
                  style={{
                    width: `${Math.max(language.percentage, 2)}%`,
                  }}
                />
              </div>

              <p className="mt-1.5 truncate text-[10px] text-slate-400">
                {language.extensions.join(", ")}
              </p>
            </div>
          ))}

          {analysis.languages.length === 0 && (
            <p className="text-xs leading-5 text-slate-500">
              No supported programming languages were detected.
            </p>
          )}
        </div>
      </section>

      <section className="surface rounded-2xl border border-slate-200 p-5">
        <div className="flex items-center gap-2">
          <Layers3 className="h-4 w-4 text-slate-700" />

          <h2 className="text-sm font-semibold text-slate-950">
            Detected stack
          </h2>
        </div>

        <p className="mt-1 text-xs text-slate-500">
          Frameworks and development tools detected from repository files.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {analysis.technologies.map((technology) => (
            <article
              key={`${technology.category}-${technology.name}`}
              className="min-w-0 rounded-xl border border-slate-200 bg-slate-100/70 p-4 transition hover:border-slate-400 hover:bg-slate-200/70"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {technology.category}
                  </p>

                  <h3 className="mt-1 truncate text-xs font-semibold text-slate-950">
                    {technology.name}
                  </h3>
                </div>

                <span
                  className={
                    technology.confidence === "high"
                      ? "shrink-0 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-medium text-emerald-700"
                      : "shrink-0 rounded-full bg-amber-100 px-2 py-1 text-[10px] font-medium text-amber-700"
                  }
                >
                  {technology.confidence}
                </span>
              </div>

              <div className="mt-4 space-y-1">
                {technology.evidence.slice(0, 3).map((item) => (
                  <p
                    key={item}
                    className="truncate font-mono text-[10px] text-slate-500"
                    title={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}

          {analysis.technologies.length === 0 && (
            <p className="text-xs leading-5 text-slate-500">
              No supported frameworks or development tools were detected.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <article className="surface rounded-xl border border-slate-200 p-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold text-slate-950">
        {value.toLocaleString()}
      </p>
    </article>
  );
}