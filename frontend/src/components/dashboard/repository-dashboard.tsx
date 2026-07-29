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
  Scale,
  Star,
} from "lucide-react";

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
      const expectedFullName = `${owner}/${repositoryName}`.toLowerCase();
      const cachedRepository = sessionStorage.getItem(
        "devscope:last-repository",
      );

      if (cachedRepository) {
        try {
          const parsedRepository = JSON.parse(
            cachedRepository,
          ) as Repository;

          if (
            parsedRepository.fullName.toLowerCase() === expectedFullName
          ) {
            if (!ignore) {
              setRepository(parsedRepository);
              setIsLoading(false);
            }

            return;
          }
        } catch {
          sessionStorage.removeItem("devscope:last-repository");
        }
      }

      try {
        const result = await inspectRepository(
          `https://github.com/${owner}/${repositoryName}`,
        );

        if (!ignore) {
          setRepository(result);
          setIsLoading(false);
        }
      } catch (error) {
        if (!ignore) {
          setError(
            error instanceof Error
              ? error.message
              : "Unable to load this repository.",
          );

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
      <main className="flex min-h-screen items-center justify-center bg-[#07090d] text-white">
        <div className="text-center">
          <LoaderCircle className="mx-auto size-7 animate-spin text-blue-500" />
          <p className="mt-4 text-sm text-zinc-500">
            Preparing repository dashboard...
          </p>
        </div>
      </main>
    );
  }

  if (error || !repository) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07090d] px-5 text-white">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold">Repository unavailable</h1>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {error || "DevScope could not load this repository."}
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
          >
            <ArrowLeft className="size-4" />
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
      label: "Default branch",
      value: repository.defaultBranch,
      icon: GitBranch,
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090d] text-white">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-white/[0.07] bg-[#090c11] lg:flex">
        <div className="flex h-16 items-center border-b border-white/[0.07] px-5">
          <Link href="/" className="flex items-center gap-2.5 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-sm">
              D
            </span>
            DevScope
          </Link>
        </div>

        <div className="p-4">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
            <p className="truncate text-xs text-zinc-500">{owner}</p>
            <p className="mt-1 truncate text-sm font-medium">
              {repositoryName}
            </p>
          </div>
        </div>

        <nav className="space-y-1 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                type="button"
                disabled={!item.available}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${
                  item.available
                    ? "bg-blue-600/10 text-blue-300"
                    : "cursor-not-allowed text-zinc-600"
                }`}
              >
                <Icon className="size-4" />
                <span>{item.name}</span>

                {!item.available && (
                  <span className="ml-auto text-[10px] uppercase text-zinc-700">
                    Soon
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/[0.07] p-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Analyze another repo
          </Link>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/[0.07] bg-[#07090d]/90 px-5 backdrop-blur lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold lg:hidden"
            >
              D
            </Link>

            <div>
              <p className="text-xs text-zinc-600">Repository</p>
              <p className="text-sm font-medium">{repository.fullName}</p>
            </div>
          </div>

          <a
            href={repository.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:border-white/20 hover:text-white"
          >
            View on GitHub
            <ExternalLink className="size-4" />
          </a>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <section className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 lg:p-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-3xl font-semibold tracking-tight">
                    {repository.name}
                  </h1>

                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs capitalize text-zinc-400">
                    {repository.visibility}
                  </span>

                  {repository.archived && (
                    <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-300">
                      Archived
                    </span>
                  )}
                </div>

                <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                  {repository.description ??
                    "This repository does not provide a description."}
                </p>
              </div>

              {repository.language && (
                <span className="w-fit rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-300">
                  {repository.language}
                </span>
              )}
            </div>
          </section>

          <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statistics.map((statistic) => {
              const Icon = statistic.icon;

              return (
                <article
                  key={statistic.label}
                  className="rounded-xl border border-white/[0.08] bg-[#0c0f15] p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-500">
                      {statistic.label}
                    </p>
                    <Icon className="size-4 text-blue-400" />
                  </div>

                  <p className="mt-4 truncate text-2xl font-semibold">
                    {statistic.value}
                  </p>
                </article>
              );
            })}
          </section>

          <section className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
            <article className="rounded-xl border border-white/[0.08] bg-[#0c0f15] p-6">
              <h2 className="font-semibold">Repository details</h2>

              <div className="mt-5 divide-y divide-white/[0.07]">
                <DetailRow
                  icon={GitBranch}
                  label="Default branch"
                  value={repository.defaultBranch}
                />

                <DetailRow
                  icon={FileCode2}
                  label="Primary language"
                  value={repository.language ?? "Not detected"}
                />

                <DetailRow
                  icon={Scale}
                  label="License"
                  value={repository.license?.name ?? "Not specified"}
                />

                <DetailRow
                  icon={Clock3}
                  label="Last push"
                  value={formatDate(repository.pushedAt)}
                />
              </div>
            </article>

            <div className="space-y-5">
              <article className="rounded-xl border border-white/[0.08] bg-[#0c0f15] p-6">
                <h2 className="font-semibold">Owner</h2>

                <div className="mt-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-blue-600/15 font-semibold text-blue-300">
                    {repository.owner.username.charAt(0).toUpperCase()}
                  </span>

                  <div>
                    <p className="text-sm font-medium">
                      {repository.owner.username}
                    </p>

                    <a
                      href={repository.owner.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-zinc-500 hover:text-blue-400"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </article>

              <article className="rounded-xl border border-white/[0.08] bg-[#0c0f15] p-6">
                <h2 className="font-semibold">Topics</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {repository.topics.length > 0 ? (
                    repository.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-xs text-zinc-400"
                      >
                        {topic}
                      </span>
                    ))
                  ) : (
                    <p className="text-sm text-zinc-600">
                      No topics provided.
                    </p>
                  )}
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

type DetailRowProps = {
  icon: typeof GitBranch;
  label: string;
  value: string;
};

function DetailRow({ icon: Icon, label, value }: DetailRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
      <div className="flex items-center gap-3 text-sm text-zinc-500">
        <Icon className="size-4" />
        {label}
      </div>

      <span className="text-right text-sm text-zinc-300">{value}</span>
    </div>
  );
}