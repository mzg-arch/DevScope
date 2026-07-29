"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  FolderOpen,
  LoaderCircle,
  Search,
} from "lucide-react";

import { getRepositoryTree } from "@/lib/repositories";
import type { Repository } from "@/types/repository";
import type {
  RepositoryTreeItem,
  RepositoryTreeResponse,
} from "@/types/repository-tree";

type RepositoryFilesProps = {
  repository: Repository;
};

type TreeNode = RepositoryTreeItem & {
  children: TreeNode[];
};

function formatFileSize(size: number | null) {
  if (size === null) {
    return "";
  }

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function buildTree(items: RepositoryTreeItem[]) {
  const roots: TreeNode[] = [];
  const nodeMap = new Map<string, TreeNode>();

  const sortedItems = [...items].sort((first, second) => {
    const firstDepth = first.path.split("/").length;
    const secondDepth = second.path.split("/").length;

    if (firstDepth !== secondDepth) {
      return firstDepth - secondDepth;
    }

    if (first.type !== second.type) {
      return first.type === "directory" ? -1 : 1;
    }

    return first.name.localeCompare(second.name);
  });

  for (const item of sortedItems) {
    const node: TreeNode = {
      ...item,
      children: [],
    };

    nodeMap.set(item.path, node);

    const pathParts = item.path.split("/");
    pathParts.pop();

    const parentPath = pathParts.join("/");

    if (!parentPath) {
      roots.push(node);
      continue;
    }

    const parent = nodeMap.get(parentPath);

    if (parent) {
      parent.children.push(node);
    } else {
      roots.push(node);
    }
  }

  function sortNodes(nodes: TreeNode[]) {
    nodes.sort((first, second) => {
      if (first.type !== second.type) {
        return first.type === "directory" ? -1 : 1;
      }

      return first.name.localeCompare(second.name);
    });

    nodes.forEach((node) => sortNodes(node.children));
  }

  sortNodes(roots);

  return roots;
}

export function RepositoryFiles({
  repository,
}: RepositoryFilesProps) {
  const [treeData, setTreeData] =
    useState<RepositoryTreeResponse | null>(null);
  const [openFolders, setOpenFolders] = useState<Set<string>>(
    new Set(),
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadTree() {
      const cacheKey = `devscope:tree:v2:${repository.fullName}:${repository.defaultBranch}`;

      try {
        const cachedValue = sessionStorage.getItem(cacheKey);

        if (cachedValue) {
          const cachedTree = JSON.parse(
            cachedValue,
          ) as RepositoryTreeResponse;

          if (!ignore) {
            setTreeData(cachedTree);
          }

          return;
        }

        const result = await getRepositoryTree(
          repository.githubUrl,
        );

        try {
          sessionStorage.setItem(
            cacheKey,
            JSON.stringify(result),
          );
        } catch {
          // Continue without caching if browser storage is full.
        }

        if (!ignore) {
          setTreeData(result);
        }
      } catch (error) {
        if (!ignore) {
          setError(
            error instanceof Error
              ? error.message
              : "Unable to retrieve repository files.",
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadTree();

    return () => {
      ignore = true;
    };
  }, [
    repository.defaultBranch,
    repository.fullName,
    repository.githubUrl,
  ]);

  const hierarchy = useMemo(
    () => buildTree(treeData?.items ?? []),
    [treeData],
  );

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query || !treeData) {
      return [];
    }

    return treeData.items
      .filter((item) => item.path.toLowerCase().includes(query))
      .slice(0, 250);
  }, [searchQuery, treeData]);

  function toggleFolder(path: string) {
    setOpenFolders((currentFolders) => {
      const nextFolders = new Set(currentFolders);

      if (nextFolders.has(path)) {
        nextFolders.delete(path);
      } else {
        nextFolders.add(path);
      }

      return nextFolders;
    });
  }

  if (isLoading) {
    return (
      <div className="surface flex min-h-72 items-center justify-center rounded-xl border border-slate-300/80">
        <div className="text-center">
          <LoaderCircle className="mx-auto size-5 animate-spin text-blue-600" />

          <p className="mt-3 text-[13px] text-slate-500">
            Loading repository files...
          </p>
        </div>
      </div>
    );
  }

  if (error || !treeData) {
    return (
      <div className="surface rounded-xl border border-red-200 p-5">
        <div className="flex items-center gap-2 text-[13px] text-red-700">
          <AlertCircle className="size-4" />
          {error || "Repository files are unavailable."}
        </div>
      </div>
    );
  }

  return (
    <>
      <section>
        <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
          Repository files
        </p>

        <h1 className="mt-2 text-[26px] font-semibold tracking-tight text-slate-950">
          File explorer
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Browse the folders and files stored on the{" "}
          <span className="font-medium text-slate-800">
            {treeData.repository.branch}
          </span>{" "}
          branch.
        </p>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-3">
        <SummaryCard
          label="Files"
          value={treeData.summary.totalFiles.toLocaleString()}
        />

        <SummaryCard
          label="Folders"
          value={treeData.summary.totalDirectories.toLocaleString()}
        />

        <SummaryCard
          label="Items received"
          value={treeData.summary.totalItemsReceived.toLocaleString()}
        />
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[1fr_280px]">
        <article className="surface overflow-hidden rounded-xl border border-slate-300/80">
          <div className="border-b border-slate-200 p-3">
            <div className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 focus-within:border-blue-300 focus-within:bg-blue-50/40">
              <Search className="size-4 text-slate-400" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search files and folders"
                className="w-full bg-transparent text-[13px] outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="max-h-[620px] min-h-[420px] overflow-auto p-2">
            {searchQuery.trim() ? (
              searchResults.length > 0 ? (
                <div className="space-y-0.5">
                  {searchResults.map((item) => (
                    <SearchResult
                      key={item.path}
                      item={item}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState message="No files or folders match your search." />
              )
            ) : (
              <div className="space-y-0.5">
                {hierarchy.map((node) => (
                  <TreeRow
                    key={node.path}
                    node={node}
                    depth={0}
                    openFolders={openFolders}
                    onToggle={toggleFolder}
                  />
                ))}
              </div>
            )}
          </div>
        </article>

        <aside className="space-y-4">
          <article className="surface rounded-xl border border-slate-300/80 p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Common extensions
            </h2>

            <div className="mt-4 space-y-3">
              {treeData.summary.topExtensions.length > 0 ? (
                treeData.summary.topExtensions.map((item) => (
                  <div
                    key={item.extension}
                    className="flex items-center justify-between text-[13px]"
                  >
                    <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-slate-600">
                      .{item.extension}
                    </span>

                    <span className="text-slate-500">
                      {item.count.toLocaleString()}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-[13px] text-slate-500">
                  No extensions detected.
                </p>
              )}
            </div>
          </article>

          {(treeData.limits.truncatedByGitHub ||
            treeData.limits.limitedByDevScope) && (
            <article className="rounded-xl border border-amber-200 bg-amber-50/90 p-4">
              <p className="text-xs font-medium text-amber-800">
                Partial tree displayed
              </p>

              <p className="mt-1 text-[11px] leading-5 text-amber-700">
                This repository is very large, so DevScope is showing a
                limited number of items.
              </p>
            </article>
          )}
        </aside>
      </section>
    </>
  );
}

type SummaryCardProps = {
  label: string;
  value: string;
};

function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <article className="surface rounded-xl border border-slate-300/80 p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-slate-950">
        {value}
      </p>
    </article>
  );
}

type TreeRowProps = {
  node: TreeNode;
  depth: number;
  openFolders: Set<string>;
  onToggle: (path: string) => void;
};

function TreeRow({
  node,
  depth,
  openFolders,
  onToggle,
}: TreeRowProps) {
  const isDirectory = node.type === "directory";
  const isOpen = openFolders.has(node.path);

  return (
    <>
      {isDirectory ? (
        <button
          type="button"
          onClick={() => onToggle(node.path)}
          className="flex h-9 w-full items-center gap-2 rounded-lg pr-3 text-left text-[13px] text-slate-700 hover:bg-slate-100"
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
        >
          {node.children.length > 0 ? (
            isOpen ? (
              <ChevronDown className="size-3.5 shrink-0 text-slate-400" />
            ) : (
              <ChevronRight className="size-3.5 shrink-0 text-slate-400" />
            )
          ) : (
            <span className="size-3.5 shrink-0" />
          )}

          {isOpen ? (
            <FolderOpen className="size-4 shrink-0 text-blue-600" />
          ) : (
            <Folder className="size-4 shrink-0 text-blue-600" />
          )}

          <span className="truncate">{node.name}</span>
        </button>
      ) : (
        <div
          className="flex h-9 items-center gap-2 rounded-lg pr-3 text-[13px] text-slate-600 hover:bg-slate-100"
          style={{ paddingLeft: `${depth * 16 + 29}px` }}
        >
          <File className="size-4 shrink-0 text-slate-400" />

          <span className="truncate">{node.name}</span>

          <span className="ml-auto shrink-0 text-[11px] text-slate-400">
            {formatFileSize(node.size)}
          </span>
        </div>
      )}

      {isDirectory &&
        isOpen &&
        node.children.map((child) => (
          <TreeRow
            key={child.path}
            node={child}
            depth={depth + 1}
            openFolders={openFolders}
            onToggle={onToggle}
          />
        ))}
    </>
  );
}

function SearchResult({
  item,
}: {
  item: RepositoryTreeItem;
}) {
  return (
    <div className="flex min-h-10 items-center gap-2 rounded-lg px-3 py-2 text-[13px] hover:bg-slate-100">
      {item.type === "directory" ? (
        <Folder className="size-4 shrink-0 text-blue-600" />
      ) : (
        <File className="size-4 shrink-0 text-slate-400" />
      )}

      <span className="truncate text-slate-700">{item.path}</span>

      <span className="ml-auto shrink-0 text-[11px] text-slate-400">
        {formatFileSize(item.size)}
      </span>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex min-h-72 items-center justify-center px-5 text-center">
      <p className="text-[13px] text-slate-500">{message}</p>
    </div>
  );
}