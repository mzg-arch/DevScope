"use client";

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
  Layers3,
  LayoutDashboard,
  LoaderCircle,
  Plus,
  Scale,
  Search,
  Star,
  TriangleAlert,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useState,
} from "react";

import { DevScopeMark } from "@/components/devscope-mark";
import { RepositoryArchitecture } from "@/components/dashboard/repository-architecture";
import { RepositoryExplanation } from "@/components/dashboard/repository-explanation";
import { RepositoryFiles } from "@/components/dashboard/repository-files";
import {
  inspectRepository,
  type Repository,
} from "@/lib/repositories";

type DashboardView =
  | "overview"
  | "files"
  | "architecture"
  | "ask";

type RepositoryDashboardProps = {
  owner: string;
  repositoryName: string;
  activeView?: DashboardView;
};

export function RepositoryDashboard({
  owner,
  repositoryName,
  activeView = "overview",
}: RepositoryDashboardProps) {
  const router = useRouter();

  const [repository, setRepository] = useState<Repository | null>(
    null,
  );
  const [repositoryInput, setRepositoryInput] = useState("");
  const [searchError, setSearchError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const dashboardBasePath = `/dashboard/${encodeURIComponent(
    owner,
  )}/${encodeURIComponent(repositoryName)}`;

  useEffect(() => {
    let cancelled = false;

    async function loadRepository() {
      setIsLoading(true);
      setLoadError("");

      try {
        const result = await inspectRepository(
          `https://github.com/${owner}/${repositoryName}`,
        );

        if (!cancelled) {
          setRepository(result);
        }
      } catch (caughtError) {
        if (!cancelled) {
          setLoadError(
            caughtError instanceof Error
              ? caughtError.message
              : "Could not load this repository.",
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadRepository();

    return () => {
      cancelled = true;
    };
  }, [owner, repositoryName]);

  function handleRepositorySearch(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setSearchError("");

    const cleanedInput = repositoryInput.trim().replace(/\/+$/, "");

    const match = cleanedInput.match(
      /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^/]+)\/([^/?#]+)$/i,
    );

    if (!match) {
      setSearchError(
        "Enter a valid public GitHub repository URL.",
      );
      return;
    }

    const nextOwner = match[1];
    const nextRepository = match[2].replace(/\.git$/i, "");

    router.push(
      `/dashboard/${encodeURIComponent(
        nextOwner,
      )}/${encodeURIComponent(nextRepository)}`,
    );

    setRepositoryInput("");
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="surface rounded-2xl border border-slate-200 px-8 py-7 text-center">
          <LoaderCircle className="mx-auto h-5 w-5 animate-spin text-slate-700" />

          <p className="mt-3 text-sm font-semibold text-slate-950">
            Loading repository
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Getting the latest repository details.
          </p>
        </div>
      </div>
    );
  }

  if (loadError || !repository) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">
        <div className="surface w-full max-w-md rounded-2xl border border-red-200 p-6">
          <TriangleAlert className="h-5 w-5 text-red-500" />

          <h1 className="mt-4 text-lg font-semibold text-slate-950">
            Repository could not be loaded
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {loadError}
          </p>

          <Link
            href="/"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-medium text-white hover:bg-blue-600"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[260px] flex-col bg-black text-white lg:flex">
        <div className="border-b border-white/10 px-5 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-white/10"
          >
            <DevScopeMark className="h-7 w-7 text-white" />

            <span className="text-lg font-semibold tracking-tight">
              DevScope
            </span>
          </Link>
        </div>

        <div className="border-b border-white/10 px-5 py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Current repository
          </p>

          <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="truncate text-sm font-semibold text-white">
              {repository.name}
            </p>

            <p className="mt-1 truncate text-xs text-slate-400">
              {repository.fullName}
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Analysis
          </p>

          <Link
            href={dashboardBasePath}
            className={getNavigationClass(
              activeView === "overview",
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            Overview
          </Link>

          <Link
            href={`${dashboardBasePath}/files`}
            className={getNavigationClass(
              activeView === "files",
            )}
          >
            <FolderTree className="h-4 w-4" />
            Files
          </Link>

          <Link
            href={`${dashboardBasePath}/architecture`}
            className={getNavigationClass(
              activeView === "architecture",
            )}
          >
            <Layers3 className="h-4 w-4" />
            Architecture
          </Link>

          <Link
            href={`${dashboardBasePath}/ask`}
            className={getNavigationClass(activeView === "ask")}
          >
            <Bot className="h-4 w-4" />
            Ask DevScope
          </Link>

          <div className="flex cursor-not-allowed items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-500">
            <span className="flex items-center gap-3">
              <GitPullRequest className="h-4 w-4" />
              Issues
            </span>

            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-400">
              Soon
            </span>
          </div>
        </nav>

        <div className="border-t border-white/10 p-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <Plus className="h-4 w-4" />
            Analyze another repo
          </Link>
        </div>
      </aside>

      <main className="min-h-screen lg:pl-[260px]">
        <header className="border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur sm:px-7 lg:px-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <Link
                href="/"
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-950 hover:text-white lg:hidden"
                aria-label="Return home"
              >
                <DevScopeMark className="h-6 w-6" />
              </Link>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="truncate text-lg font-semibold tracking-tight text-slate-950">
                    {repository.fullName}
                  </h1>

                  <span className="rounded-full border border-slate-300 bg-white px-2 py-0.5 text-[10px] font-medium capitalize text-slate-600">
                    {repository.visibility}
                  </span>
                </div>

                <p className="mt-0.5 text-xs capitalize text-slate-500">
                  {activeView === "ask"
                    ? "Ask DevScope"
                    : activeView}
                </p>
              </div>
            </div>

            <form
              onSubmit={handleRepositorySearch}
              className="flex w-full max-w-xl items-center rounded-xl border border-slate-300 bg-white p-1.5 focus-within:border-slate-500"
            >
              <Search className="ml-2 h-4 w-4 shrink-0 text-slate-400" />

              <input
                type="text"
                value={repositoryInput}
                onChange={(event) => {
                  setRepositoryInput(event.target.value);
                  setSearchError("");
                }}
                placeholder="Paste another public GitHub repository URL"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />

              <button
                type="submit"
                className="shrink-0 rounded-lg bg-slate-950 px-4 py-2 text-xs font-medium text-white hover:bg-blue-600"
              >
                Analyze
              </button>
            </form>
          </div>

          {searchError && (
            <p className="mt-2 text-right text-xs text-red-600">
              {searchError}
            </p>
          )}

          <nav className="mt-4 flex gap-1 overflow-x-auto lg:hidden">
            <MobileNavigationLink
              href={dashboardBasePath}
              active={activeView === "overview"}
            >
              Overview
            </MobileNavigationLink>

            <MobileNavigationLink
              href={`${dashboardBasePath}/files`}
              active={activeView === "files"}
            >
              Files
            </MobileNavigationLink>

            <MobileNavigationLink
              href={`${dashboardBasePath}/architecture`}
              active={activeView === "architecture"}
            >
              Architecture
            </MobileNavigationLink>

            <MobileNavigationLink
              href={`${dashboardBasePath}/ask`}
              active={activeView === "ask"}
            >
              Ask DevScope
            </MobileNavigationLink>
          </nav>
        </header>

        <div className="max-w-[1180px] px-5 py-9 sm:px-7 lg:px-8">
          {activeView === "files" ? (
            <RepositoryFiles repository={repository} />
          ) : activeView === "architecture" ? (
            <RepositoryArchitecture repository={repository} />
          ) : activeView === "ask" ? (
            <RepositoryExplanation repository={repository} />
          ) : (
            <RepositoryOverview repository={repository} />
          )}
        </div>
      </main>
    </div>
  );
}

function RepositoryOverview({
  repository,
}: {
  repository: Repository;
}) {
  return (
    <div className="space-y-5">
      <section className="surface rounded-2xl border border-slate-200 p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Repository overview
              </p>

              {repository.archived && (
                <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-700">
                  Archived
                </span>
              )}
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {repository.fullName}
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              {repository.description ||
                "This repository does not have a description."}
            </p>
          </div>

          <a
            href={repository.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            View on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-5">
          <RepositoryStat
            icon={<Star className="h-4 w-4" />}
            value={repository.stars}
            label="Stars"
          />

          <RepositoryStat
            icon={<GitFork className="h-4 w-4" />}
            value={repository.forks}
            label="Forks"
          />

          <RepositoryStat
            icon={<GitPullRequest className="h-4 w-4" />}
            value={repository.openIssues}
            label="Open issues"
          />
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <InformationCard
          icon={<GitBranch className="h-4 w-4" />}
          label="Default branch"
          value={repository.defaultBranch}
        />

        <InformationCard
          icon={<FileCode2 className="h-4 w-4" />}
          label="Primary language"
          value={repository.language || "Not detected"}
        />

        <InformationCard
          icon={<Scale className="h-4 w-4" />}
          label="License"
          value={repository.license?.name || "No license"}
        />

        <InformationCard
          icon={<Clock3 className="h-4 w-4" />}
          label="Last pushed"
          value={formatDate(repository.pushedAt)}
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="surface rounded-2xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-950">
            Repository topics
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Keywords added by the repository owner.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {repository.topics.length > 0 ? (
              repository.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-600 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                >
                  {topic}
                </span>
              ))
            ) : (
              <p className="text-xs text-slate-500">
                No topics have been added to this repository.
              </p>
            )}
          </div>
        </article>

        <article className="surface rounded-2xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-950">
            Repository owner
          </h3>

          <div className="mt-4 flex items-center gap-3">
            <img
              src={repository.owner.avatarUrl}
              alt={`${repository.owner.username} avatar`}
              className="h-10 w-10 rounded-full border border-slate-200 object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-950">
                {repository.owner.username}
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                GitHub repository owner
              </p>
            </div>

            <a
              href={repository.owner.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-950 hover:text-white"
              aria-label="Open owner GitHub profile"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-5">
        <div className="flex items-start gap-3">
          <Bot className="mt-0.5 h-5 w-5 text-slate-700" />

          <div>
            <h3 className="text-sm font-semibold text-slate-950">
              AI repository explanation
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Use Ask DevScope to understand what this repository does,
              how it works and where you should start.
            </p>

            <Link
              href={`/dashboard/${encodeURIComponent(
                repository.owner.username,
              )}/${encodeURIComponent(repository.name)}/ask`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-xs font-medium text-white hover:bg-blue-600"
            >
              <Bot className="h-3.5 w-3.5" />
              Open AI guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function RepositoryStat({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-slate-600">
      {icon}

      <span className="text-xs">
        <strong className="font-semibold text-slate-950">
          {value.toLocaleString()}
        </strong>{" "}
        {label}
      </span>
    </div>
  );
}

function InformationCard({
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

function MobileNavigationLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium ${
        active
          ? "bg-slate-950 text-white"
          : "text-slate-600 hover:bg-slate-200 hover:text-slate-950"
      }`}
    >
      {children}
    </Link>
  );
}

function getNavigationClass(active: boolean) {
  return `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
    active
      ? "bg-white text-black"
      : "text-slate-300 hover:bg-white/10 hover:text-white"
  }`;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}