"use client";

import {
  Bot,
  CheckCircle2,
  Clock3,
  GitBranch,
  GitCommitHorizontal,
  Languages,
  LoaderCircle,
  RefreshCw,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import {
  type ReactNode,
  useEffect,
  useState,
} from "react";

import {
  getRepositoryHistory,
  type Repository,
} from "@/lib/repositories";
import type { RepositoryHistoryResponse } from "@/types/repository-history";

type RepositoryHistoryProps = {
  repository: Repository;
};

export function RepositoryHistory({
  repository,
}: RepositoryHistoryProps) {
  const [history, setHistory] =
    useState<RepositoryHistoryResponse | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadHistory() {
      setIsLoading(true);
      setError("");

      try {
        const result = await getRepositoryHistory(
          repository.githubUrl,
        );

        if (!cancelled) {
          setHistory(result);
        }
      } catch (caughtError) {
        if (!cancelled) {
          setError(
            caughtError instanceof Error
              ? caughtError.message
              : "Could not load analysis history.",
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadHistory();

    return () => {
      cancelled = true;
    };
  }, [repository.githubUrl, reloadKey]);

  if (isLoading) {
    return (
      <section className="surface rounded-2xl border border-slate-200 p-8 text-center">
        <LoaderCircle className="mx-auto h-5 w-5 animate-spin text-slate-700" />

        <p className="mt-3 text-sm font-semibold text-slate-950">
          Loading analysis history
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Reading saved repository snapshots.
        </p>
      </section>
    );
  }

  if (error || !history) {
    return (
      <section className="surface rounded-2xl border border-red-200 p-6">
        <div className="flex items-start gap-3">
          <TriangleAlert className="mt-0.5 h-5 w-5 text-red-500" />

          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              History could not be loaded
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {error}
            </p>

            <button
              type="button"
              onClick={() =>
                setReloadKey((current) => current + 1)
              }
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

  return (
    <div className="space-y-5">
      <section className="surface rounded-2xl border border-slate-200 p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              Repository history
            </p>

            <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
              Analysis snapshots
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Review the repository versions DevScope has
              analyzed and the intelligence saved for each
              commit.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setReloadKey((current) => current + 1)
            }
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Refresh
          </button>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <SummaryCard
          icon={<GitCommitHorizontal className="h-4 w-4" />}
          label="Snapshots"
          value={history.summary.totalSnapshots.toLocaleString()}
        />

        <SummaryCard
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Completed"
          value={history.summary.completedSnapshots.toLocaleString()}
        />

        <SummaryCard
          icon={<Clock3 className="h-4 w-4" />}
          label="Latest analysis"
          value={
            history.summary.latestAnalyzedAt
              ? formatDate(history.summary.latestAnalyzedAt)
              : "Not available"
          }
        />
      </section>

      <section className="surface rounded-2xl border border-slate-200 p-5 sm:p-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-950">
            Commit timeline
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            A new snapshot is created whenever GitHub reports a
            different commit SHA.
          </p>
        </div>

        {history.snapshots.length > 0 ? (
          <div className="mt-5 space-y-3">
            {history.snapshots.map((snapshot) => (
              <article
                key={snapshot.id}
                className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-400"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={`${history.repository.githubUrl}/commit/${snapshot.commitSha}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md bg-slate-950 px-2 py-1 font-mono text-[11px] font-medium text-white hover:bg-blue-600"
                      >
                        {snapshot.shortCommitSha}
                      </a>

                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-semibold ${getStatusClass(
                          snapshot.status,
                        )}`}
                      >
                        {formatStatus(snapshot.status)}
                      </span>

                      {snapshot.hasAiExplanation && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700">
                          <Bot className="h-3 w-3" />
                          AI explanation
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <GitBranch className="h-3.5 w-3.5" />
                        {snapshot.branch}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {formatDateTime(snapshot.analyzedAt)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 md:min-w-[330px]">
                    <SnapshotMetric
                      label="Items"
                      value={snapshot.itemsAnalyzed}
                    />

                    <SnapshotMetric
                      label="Languages"
                      value={snapshot.languageCount}
                    />

                    <SnapshotMetric
                      label="Technologies"
                      value={snapshot.technologyCount}
                    />
                  </div>
                </div>

                {(snapshot.truncatedByGitHub ||
                  snapshot.limitedByDevScope) && (
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-200 pt-3 text-[11px] text-amber-700">
                    <TriangleAlert className="h-3.5 w-3.5" />
                    This snapshot contains a partial repository
                    analysis.
                  </div>
                )}

                {snapshot.aiModels.length > 0 && (
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-200 pt-3 text-[11px] text-slate-500">
                    <Bot className="h-3.5 w-3.5" />
                    Generated with{" "}
                    {snapshot.aiModels.join(", ")}
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-white/60 p-8 text-center">
            <GitCommitHorizontal className="mx-auto h-5 w-5 text-slate-400" />

            <p className="mt-3 text-sm font-semibold text-slate-950">
              No snapshots yet
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Run the Architecture analysis to create the first
              snapshot.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function SummaryCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <article className="surface rounded-xl border border-slate-200 p-4">
      <div className="flex items-center gap-2 text-slate-500">
        {icon}

        <p className="text-[10px] font-semibold uppercase tracking-[0.12em]">
          {label}
        </p>
      </div>

      <p className="mt-3 truncate text-sm font-semibold text-slate-950">
        {value}
      </p>
    </article>
  );
}

function SnapshotMetric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-lg bg-slate-100 px-3 py-2">
      <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold text-slate-950">
        {value.toLocaleString()}
      </p>
    </div>
  );
}

function getStatusClass(status: string) {
  if (status === "COMPLETED") {
    return "bg-emerald-50 text-emerald-700";
  }

  if (status === "FAILED") {
    return "bg-red-50 text-red-700";
  }

  if (status === "RUNNING") {
    return "bg-blue-50 text-blue-700";
  }

  return "bg-amber-50 text-amber-700";
}

function formatStatus(status: string) {
  return (
    status.charAt(0) +
    status.slice(1).toLowerCase()
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}