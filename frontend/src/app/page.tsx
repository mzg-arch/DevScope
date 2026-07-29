import {
  Bot,
  Boxes,
  CheckCircle2,
  GitBranch,
  GitPullRequest,
} from "lucide-react";

import { RepositorySearch } from "@/components/repository-search";

const features = [
  {
    icon: Boxes,
    title: "Architecture overview",
    description:
      "Understand folders, important files, technologies, and how the codebase is organized.",
  },
  {
    icon: Bot,
    title: "Ask the codebase",
    description:
      "Ask questions about the repository and receive answers connected to the source code.",
  },
  {
    icon: GitPullRequest,
    title: "Contribution guidance",
    description:
      "Find approachable issues and learn which parts of the code you should understand first.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <header className="relative z-10 border-b border-white/[0.07]">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="/" className="flex items-center gap-2.5 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-sm">
              D
            </span>
            DevScope
          </a>

          <nav className="flex items-center gap-5 text-sm text-zinc-400">
            <a href="#features" className="hidden hover:text-white sm:block">
              Features
            </a>

            <a href="#how-it-works" className="hidden hover:text-white sm:block">
              How it works
            </a>

            <a
              href="https://github.com/mzg-arch/devscope"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 hover:border-white/20 hover:text-white"
            >
              <GitBranch className="size-4" />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-28 pt-24 text-center sm:pt-32">
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300">
          <CheckCircle2 className="size-3.5" />
          Built for developers exploring unfamiliar codebases
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-6xl">
          Understand any GitHub repository{" "}
          <span className="text-blue-400">in minutes.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          DevScope turns complex public repositories into clear architecture,
          code explanations, and practical contribution guidance.
        </p>

        <div className="mt-10">
          <RepositorySearch />
        </div>

        <p className="mt-4 text-xs text-zinc-600">
          Public repositories only. No GitHub login required.
        </p>
      </section>

      <section
        id="features"
        className="relative z-10 border-y border-white/[0.07] bg-white/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-blue-400">EXPLORE SMARTER</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Everything you need to enter a new codebase confidently.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#0c0f15] p-6"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-5 font-semibold">{feature.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium text-blue-400">HOW IT WORKS</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                From repository URL to useful understanding.
              </h2>
            </div>

            <div className="space-y-3">
              {[
                ["01", "Paste a public GitHub repository URL."],
                ["02", "DevScope examines its structure and metadata."],
                ["03", "Explore the generated repository dashboard."],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="flex items-center gap-5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <span className="font-mono text-sm text-blue-400">
                    {number}
                  </span>
                  <span className="text-sm text-zinc-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>DevScope</span>
          <span>Built by Micahel Biru</span>
        </div>
      </footer>
    </main>
  );
}