import {
  Bot,
  FolderTree,
  GitBranch,
  GitPullRequest,
} from "lucide-react";

import { DevScopeMark } from "@/components/devscope-mark";
import { RepositorySearch } from "@/components/repository-search";

const features = [
  {
    number: "01",
    icon: FolderTree,
    title: "Repository structure",
    description:
      "See the important folders, technologies, and basic organization of the codebase.",
  },
  {
    number: "02",
    icon: Bot,
    title: "Codebase questions",
    description:
      "Ask questions about unfamiliar code and receive answers connected to real files.",
  },
  {
    number: "03",
    icon: GitPullRequest,
    title: "Contribution guidance",
    description:
      "Find approachable issues and understand which parts of the repository matter first.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="gray-surface sticky top-0 z-20 border-b border-slate-300/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a
            href="/"
            className="-ml-2 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold hover:bg-white/80"
          >
            <DevScopeMark />
            <span>DevScope</span>
          </a>

          <nav className="flex items-center gap-1 text-xs text-slate-600">
            <a
              href="#features"
              className="hidden rounded-lg px-3 py-2 hover:bg-white/80 hover:text-slate-950 sm:block"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="hidden rounded-lg px-3 py-2 hover:bg-white/80 hover:text-slate-950 sm:block"
            >
              How it works
            </a>

            <a
              href="https://github.com/mzg-arch/devscope"
              target="_blank"
              rel="noreferrer"
              className="ml-1 flex h-9 items-center gap-1.5 rounded-lg border border-slate-300 bg-white/80 px-3 font-medium text-slate-700 hover:border-slate-400 hover:bg-white"
            >
              <GitBranch className="size-3.5" />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-28 pt-24 text-center sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium text-blue-600">
            Repository intelligence for developers
          </p>

          <h1 className="mt-4 text-[40px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[50px]">
            Understand a codebase before you start working on it.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[14px] leading-6 text-slate-600">
            Paste any public GitHub repository and explore its structure,
            technologies, activity, and contribution opportunities.
          </p>
        </div>

        <div className="mt-9">
          <RepositorySearch />
        </div>

        <p className="mt-3 text-[11px] text-slate-500">
          Public repositories only. No GitHub login required.
        </p>
      </section>

      <section
        id="features"
        className="border-y border-slate-300/80 bg-[#eef0f3]/75 backdrop-blur-[2px]"
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-xl">
            <p className="text-xs font-medium text-blue-600">
              What DevScope does
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Enter unfamiliar repositories with context.
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-slate-600">
              A focused workspace for students, interns, and developers
              exploring open-source projects.
            </p>
          </div>

          <div className="mt-9 grid gap-3 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="surface rounded-xl border border-slate-300/80 p-5"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-4 text-blue-600" />

                    <span className="text-[11px] text-slate-400">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[13px] font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-medium text-blue-600">
                How it works
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Three steps from URL to understanding.
              </h2>
            </div>

            <div className="surface overflow-hidden rounded-xl border border-slate-300/80">
              {[
                [
                  "01",
                  "Paste a repository",
                  "Enter the URL of a public GitHub repository.",
                ],
                [
                  "02",
                  "DevScope retrieves the data",
                  "The backend validates the URL and requests its information from GitHub.",
                ],
                [
                  "03",
                  "Explore the dashboard",
                  "Review the repository details and continue into deeper analysis.",
                ],
              ].map(([number, title, description], index) => (
                <div
                  key={number}
                  className={`grid gap-3 px-5 py-4 transition-colors hover:bg-blue-50/60 sm:grid-cols-[40px_160px_1fr] sm:items-center ${
                    index !== 2 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <span className="text-[11px] font-medium text-blue-600">
                    {number}
                  </span>

                  <span className="text-xs font-semibold text-slate-900">
                    {title}
                  </span>

                  <span className="text-xs leading-5 text-slate-600">
                    {description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="gray-surface border-t border-slate-300/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>DevScope</span>
          <span>Built by Micahel Biru</span>
        </div>
      </footer>
    </main>
  );
}