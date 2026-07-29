"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Clock3,
  ExternalLink,
  FileCode2,
  FolderTree,
  GitBranch,
  GitFork,
  GitPullRequest,
  LayoutDashboard,
  LoaderCircle,
  Plus,
  Scale,
  Search,
  Star,
} from "lucide-react";

import { DevScopeMark } from "@/components/devscope-mark";
import { inspectRepository } from "@/lib/repositories";
import type { Repository } from "@/types/repository";

type RepositoryDashboardProps = {
  owner: string;
  repositoryName: string;
};

const navigation = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    available: true,
  },
  {
    name: "Architecture",
    icon: GitBranch,
    available: false,
  },
  {
    name: "Files",
    icon: FolderTree,
    available: false,
  },
  {
    name: "Ask DevScope",
    icon: Bot,
    available: false,
  },
  {
    name: "Issues",
    icon: GitPullRequest,
    available: false,
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: value >= 10_000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function RepositoryDashboard({
  owner,
  repositoryName,
}: RepositoryDashboardProps) {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadRepository() {
      try {
        const expectedName = `${owner}/${repositoryName}`.toLowerCase();
        const cachedValue = sessionStorage.getItem(
          "devscope:last-repository",
        );

        if (cachedValue) {
          try {
            const cachedRepository = JSON.parse(
              cachedValue,
            ) as Repository;

            if (
              cachedRepository.fullName.toLowerCase() === expectedName
            ) {
              if (!ignore) {
                setRepository(cachedRepository);
              }

              return;
            }
          } catch {
            sessionStorage.removeItem("devscope:last-repository");
          }
        }

        const result = await inspectRepository(
          `https://github.com/${owner}/${repositoryName}`,
        );

        sessionStorage.setItem(
          "devscope:last-repository",
          JSON.stringify(result),
        );

        if (!ignore) {
          setRepository(result);
        }
      } catch (error) {
        if (!ignore) {
          setError(
            error instanceof Error
              ? error.message
              : "Unable to load this repository.",
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadRepository();

    return () => {
      ignore = true;
    };
  }, [owner, repositoryName]);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="surface rounded-xl border border-slate-300 px-7 py-6 text-center">
          <LoaderCircle className="mx-auto size-5 animate-spin text-blue-600" />

          <p className="mt-3 text-xs text-slate-500">
            Loading repository...
          </p>
        </div>
      </main>
    );
  }

  if (error || !repository) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <div className="surface max-w-sm rounded-xl border border-slate-300 p-6 text-center">
          <h1 className="text-base font-semibold">
            Repository unavailable
          </h1>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            {error || "DevScope could not load this repository."}
          </p>

          <Link
            href="/"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-xs font-medium text-white hover:bg-blue-600"
          >
            <ArrowLeft className="size-3.5" />
            Return home
          </Link>
        </div>
      </main>
    );
  }

  const statistics = [
    {
      label: "Stars",
      value: formatNumber(repository.stars),
      icon: Star,
    },
    {
      label: "Forks",
      value: formatNumber(repository.forks),
      icon: GitFork,
    },
    {
      label: "Open issues",
      value: formatNumber(repository.openIssues),
      icon: GitPullRequest,
    },
    {
      label: "Main branch",
      value: repository.defaultBranch,
      icon: GitBranch,
    },
  ];

  const details = [
    {
      label: "Primary language",
      value: repository.language ?? "Not detected",
      icon: FileCode2,
    },
    {
      label: "License",
      value: repository.license?.name ?? "Not specified",
      icon: Scale,
    },
    {
      label: "Last push",
      value: formatDate(repository.pushedAt),
      icon: Clock3,
    },
    {
      label: "Updated",
      value: formatDate(repository.updatedAt),
      icon: Clock3,
    },
  ];

  return (
    <div className="min-h-screen">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[270px] flex-col border-r border-white/10 bg-slate-950 text-white lg:flex">
  <div className="flex h-16 items-center px-4">
    <Link
      href="/"
      className="-ml-2 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
    >
      <DevScopeMark className="text-white" />
      <span>DevScope</span>
    </Link>
  </div>

  <div className="px-3">
    <Link
      href="/"
      className="flex h-10 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 text-[13px] font-medium text-white hover:border-white/25 hover:bg-white/10"
    >
      <Plus className="size-4" />
      New repository
    </Link>
  </div>

  <div className="px-3 pb-3 pt-4">
    <div className="flex h-10 items-center gap-2 rounded-lg border border-transparent px-2.5 transition-colors focus-within:border-white/15 focus-within:bg-white/5">
      <Search className="size-4 text-slate-500" />

      <input
        type="text"
        placeholder="Search sections"
        className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-slate-500"
      />
    </div>
  </div>

  <nav className="space-y-1 px-2">
    <p className="px-2 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-500">
      Workspace
    </p>

    {navigation.map((item) => {
      const Icon = item.icon;

      return (
        <button
          key={item.name}
          type="button"
          disabled={!item.available}
          className={`flex h-10 w-full items-center gap-2.5 rounded-lg px-2.5 text-left text-[13px] ${
            item.available
              ? "bg-white/10 font-medium text-white hover:bg-white/15"
              : "cursor-not-allowed text-slate-600"
          }`}
        >
          <Icon className="size-4" />
          <span>{item.name}</span>

          {!item.available && (
            <span className="ml-auto text-[10px] text-slate-600">
              Soon
            </span>
          )}
        </button>
      );
    })}
  </nav>

  <div className="mt-6 px-2">
    <p className="px-2 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-500">
      Current repository
    </p>

    <a
      href={repository.githubUrl}
      target="_blank"
      rel="noreferrer"
      className="block rounded-lg px-2.5 py-3 hover:bg-white/10"
    >
      <p className="truncate text-[11px] text-slate-500">
        {repository.owner.username}
      </p>

      <p className="mt-1 truncate text-[13px] font-medium text-white">
        {repository.name}
      </p>
    </a>
  </div>

  <div className="mt-auto border-t border-white/10 p-3">
    <a
      href="https://micahelbiru.dev"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2.5 rounded-lg px-2 py-2.5 hover:bg-white/10"
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-slate-950">
        MB
      </span>

      <div className="min-w-0">
        <p className="truncate text-[13px] font-medium text-white">
          Micahel Biru
        </p>

        <p className="truncate text-[11px] text-slate-500">
          Developer
        </p>
      </div>
    </a>
  </div>
      </aside>

      <div className="lg:pl-[265px]">
        <header className="gray-surface sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-300/80 px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-lg p-1 hover:bg-white/80 lg:hidden"
              aria-label="Return to homepage"
            >
              <DevScopeMark />
            </Link>

            <div className="text-xs">
              <span className="text-slate-500">
                {repository.owner.username}
              </span>
              <span className="mx-1.5 text-slate-400">/</span>
              <span className="font-medium">{repository.name}</span>
            </div>
          </div>

          <a
            href={repository.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 items-center gap-1.5 rounded-lg border border-slate-300 bg-white/70 px-3 text-xs font-medium text-slate-700 hover:border-slate-400 hover:bg-white"
          >
            GitHub
            <ExternalLink className="size-3.5" />
          </a>
        </header>

        <main className="mx-auto max-w-[1100px] px-4 py-9 sm:px-6">
          <section>
            <p className="text-[11px] font-medium uppercase tracking-wider text-blue-600">
              Repository overview
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-[22px] font-semibold tracking-tight text-slate-950">
                    {repository.name}
                  </h1>

                  <span className="rounded-full border border-slate-300 bg-white/70 px-2 py-0.5 text-[11px] capitalize text-slate-600">
                    {repository.visibility}
                  </span>

                  {repository.archived && (
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] text-amber-700">
                      Archived
                    </span>
                  )}
                </div>

                <p className="mt-2 max-w-2xl text-[13px] leading-5 text-slate-600">
                  {repository.description ??
                    "This repository does not provide a description."}
                </p>
              </div>

              {repository.language && (
                <span className="w-fit rounded-md bg-blue-50/90 px-2.5 py-1.5 text-xs font-medium text-blue-700">
                  {repository.language}
                </span>
              )}
            </div>
          </section>

          <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((statistic) => {
              const Icon = statistic.icon;

              return (
                <article
                  key={statistic.label}
                  className="surface rounded-xl border border-slate-300/80 p-4"
                >
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Icon className="size-3.5" />
                    {statistic.label}
                  </div>

                  <p className="mt-2 truncate text-base font-semibold text-slate-950">
                    {statistic.value}
                  </p>
                </article>
              );
            })}
          </section>

          <section className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <article className="surface rounded-xl border border-slate-300/80">
              <div className="border-b border-slate-200 px-5 py-4">
                <h2 className="text-[13px] font-semibold">
                  Repository details
                </h2>
              </div>

              <div className="divide-y divide-slate-200 px-5">
                {details.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <div
                      key={detail.label}
                      className="flex items-center justify-between gap-4 py-3.5"
                    >
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Icon className="size-3.5" />
                        {detail.label}
                      </div>

                      <span className="text-right text-xs font-medium text-slate-700">
                        {detail.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>

            <div className="space-y-5">
              <article className="surface rounded-xl border border-slate-300/80 p-5">
                <h2 className="text-[13px] font-semibold">
                  Repository owner
                </h2>

                <div className="mt-4 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-slate-950 text-[11px] font-medium text-white">
                    {repository.owner.username.charAt(0).toUpperCase()}
                  </span>

                  <div>
                    <p className="text-xs font-medium">
                      {repository.owner.username}
                    </p>

                    <a
                      href={repository.owner.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="-ml-1 mt-0.5 block w-fit rounded px-1 py-0.5 text-[11px] text-blue-600 hover:bg-blue-50"
                    >
                      View GitHub profile
                    </a>
                  </div>
                </div>
              </article>

              <article className="surface rounded-xl border border-slate-300/80 p-5">
                <h2 className="text-[13px] font-semibold">Topics</h2>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {repository.topics.length > 0 ? (
                    repository.topics.slice(0, 10).map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md bg-slate-100/90 px-2 py-1 text-[11px] text-slate-600"
                      >
                        {topic}
                      </span>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500">
                      No topics provided.
                    </p>
                  )}
                </div>
              </article>
            </div>
          </section>

          <section className="mt-8">
            <div className="surface flex items-center gap-3 rounded-xl border border-slate-300/80 p-2 shadow-sm">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Bot className="size-4" />
              </span>

              <input
                type="text"
                disabled
                placeholder="Ask DevScope about this repository — coming soon"
                className="h-9 flex-1 bg-transparent text-xs text-slate-600 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                disabled
                className="h-8 rounded-lg bg-slate-100 px-3 text-xs font-medium text-slate-400"
              >
                Ask
              </button>
            </div>

            <p className="mt-2 text-center text-[11px] text-slate-500">
              AI answers with references to repository files are coming in a
              later phase.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}