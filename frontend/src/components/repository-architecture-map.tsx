"use client";

import { useMemo, type CSSProperties } from "react";
import {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import {
  Boxes,
  Layers3,
  Monitor,
  Package,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import "@xyflow/react/dist/style.css";

export type ArchitectureTechnology = {
  name: string;
  category: string;
  evidencePaths?: string[];
  evidence?: string[];
};

type RepositoryArchitectureMapProps = {
  repositoryName: string;
  technologies: readonly ArchitectureTechnology[];
};

type ArchitectureScope = "frontend" | "shared" | "backend";

type NodeLabelProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  evidencePath?: string;
  dark?: boolean;
};

const ROOT_NODE_STYLE: CSSProperties = {
  width: 220,
  border: "1px solid #0f172a",
  borderRadius: 12,
  background: "#0f172a",
  color: "#ffffff",
  padding: 0,
  boxShadow: "0 8px 20px rgba(15, 23, 42, 0.12)",
};

const SCOPE_NODE_STYLE: CSSProperties = {
  width: 210,
  border: "1px solid #cbd5e1",
  borderRadius: 12,
  background: "#e2e8f0",
  color: "#0f172a",
  padding: 0,
};

const TECHNOLOGY_NODE_STYLE: CSSProperties = {
  width: 210,
  border: "1px solid #d7dee8",
  borderRadius: 12,
  background: "#f8fafc",
  color: "#0f172a",
  padding: 0,
  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.04)",
};

const ROOT_NODE_WIDTH = 220;
const SCOPE_NODE_WIDTH = 210;
const SCOPE_COLUMN_GAP = 48;
const ROOT_NODE_Y = 20;
const SCOPE_NODE_Y = 128;
const FIRST_TECHNOLOGY_NODE_Y = 236;
const TECHNOLOGY_NODE_STEP_Y = 84;

const MAP_FIT_VIEW_OPTIONS = {
  padding: 0.08,
  maxZoom: 1,
};

const SCOPE_INFORMATION: Record<
  ArchitectureScope,
  {
    title: string;
    subtitle: string;
    icon: LucideIcon;
  }
> = {
  frontend: {
    title: "Frontend",
    subtitle: "User interface",
    icon: Monitor,
  },
  shared: {
    title: "Shared tooling",
    subtitle: "Project-wide tools",
    icon: Wrench,
  },
  backend: {
    title: "Backend",
    subtitle: "API and server",
    icon: Server,
  },
};

function NodeLabel({
  icon: Icon,
  title,
  subtitle,
  evidencePath,
  dark = false,
}: NodeLabelProps) {
  return (
    <div className="flex min-h-[72px] items-start gap-3 p-3 text-left">
      <div
        className={[
          "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
          dark
            ? "bg-white/10 text-white"
            : "bg-slate-200 text-slate-700",
        ].join(" ")}
      >
        <Icon size={15} />
      </div>

      <div className="min-w-0">
        <p
          className={[
            "truncate text-[13px] font-semibold",
            dark ? "text-white" : "text-slate-950",
          ].join(" ")}
        >
          {title}
        </p>

        <p
          className={[
            "mt-0.5 text-[11px]",
            dark ? "text-slate-300" : "text-slate-500",
          ].join(" ")}
        >
          {subtitle}
        </p>

        {evidencePath ? (
          <p
            className={[
              "mt-2 truncate font-mono text-[9px]",
              dark ? "text-slate-400" : "text-slate-400",
            ].join(" ")}
            title={evidencePath}
          >
            {evidencePath}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function normalizeCategory(category: string) {
  return category
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getEvidencePaths(technology: ArchitectureTechnology) {
  return technology.evidencePaths ?? technology.evidence ?? [];
}

function classifyTechnology(
  technology: ArchitectureTechnology,
): ArchitectureScope {
  const paths = getEvidencePaths(technology);
  const evidenceText = paths.join(" ").toLowerCase();
  const category = technology.category.toLowerCase();
  const name = technology.name.toLowerCase();

  const frontendPath =
    /(^|\/)(frontend|client|web|ui)(\/|$)/.test(evidenceText);

  const backendPath =
    /(^|\/)(backend|server|api)(\/|$)/.test(evidenceText);

  if (frontendPath && backendPath) {
    return "shared";
  }

  if (frontendPath) {
    return "frontend";
  }

  if (backendPath) {
    return "backend";
  }

  const frontendTechnologies = [
    "react",
    "next.js",
    "nextjs",
    "vue",
    "angular",
    "svelte",
    "tailwind css",
  ];

  const backendTechnologies = [
    "nestjs",
    "express",
    "fastify",
    "django",
    "flask",
    "spring boot",
  ];

  if (frontendTechnologies.includes(name)) {
    return "frontend";
  }

  if (backendTechnologies.includes(name)) {
    return "backend";
  }

  const sharedCategories = [
    "package manager",
    "code quality",
    "ci/cd",
    "ci cd",
    "build system",
    "version control",
    "testing",
  ];

  if (
    sharedCategories.some((sharedCategory) =>
      category.includes(sharedCategory),
    )
  ) {
    return "shared";
  }

  return "shared";
}

function shortenPath(path: string | undefined) {
  if (!path) {
    return undefined;
  }

  if (path.length <= 38) {
    return path;
  }

  return `${path.slice(0, 35)}...`;
}

function createArchitectureMap(
  repositoryName: string,
  technologies: readonly ArchitectureTechnology[],
) {
  const groupedTechnologies: Record<
    ArchitectureScope,
    ArchitectureTechnology[]
  > = {
    frontend: [],
    shared: [],
    backend: [],
  };

  technologies.forEach((technology) => {
    const scope = classifyTechnology(technology);
    groupedTechnologies[scope].push(technology);
  });

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const scopes = (
    Object.keys(groupedTechnologies) as ArchitectureScope[]
  ).filter((scope) => groupedTechnologies[scope].length > 0);

  const scopeColumnsWidth =
    scopes.length * SCOPE_NODE_WIDTH +
    Math.max(0, scopes.length - 1) * SCOPE_COLUMN_GAP;
  const diagramWidth = Math.max(
    ROOT_NODE_WIDTH,
    scopeColumnsWidth,
  );
  const firstScopeX = (diagramWidth - scopeColumnsWidth) / 2;

  nodes.push({
    id: "repository",
    position: {
      x: (diagramWidth - ROOT_NODE_WIDTH) / 2,
      y: ROOT_NODE_Y,
    },
    style: ROOT_NODE_STYLE,
    data: {
      label: (
        <NodeLabel
          icon={Layers3}
          title={repositoryName}
          subtitle="Repository"
          dark
        />
      ),
    },
  });

  scopes.forEach((scope, scopeIndex) => {
    const scopeInformation = SCOPE_INFORMATION[scope];
    const scopeNodeId = `scope-${scope}`;
    const scopeX =
      firstScopeX +
      scopeIndex * (SCOPE_NODE_WIDTH + SCOPE_COLUMN_GAP);

    nodes.push({
      id: scopeNodeId,
      position: {
        x: scopeX,
        y: SCOPE_NODE_Y,
      },
      style: SCOPE_NODE_STYLE,
      data: {
        label: (
          <NodeLabel
            icon={scopeInformation.icon}
            title={scopeInformation.title}
            subtitle={`${groupedTechnologies[scope].length} detected`}
          />
        ),
      },
    });

    edges.push({
      id: `repository-${scope}`,
      source: "repository",
      target: scopeNodeId,
      type: "smoothstep",
      style: {
        stroke: "#64748b",
        strokeWidth: 1.5,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#64748b",
      },
    });

    const visibleTechnologies =
      groupedTechnologies[scope].slice(0, 5);

    visibleTechnologies.forEach((technology, index) => {
      const technologyNodeId = `technology-${scope}-${index}`;

      const evidencePath = shortenPath(
        getEvidencePaths(technology)[0],
      );

      nodes.push({
        id: technologyNodeId,
        position: {
          x: scopeX,
          y:
            FIRST_TECHNOLOGY_NODE_Y +
            index * TECHNOLOGY_NODE_STEP_Y,
        },
        style: TECHNOLOGY_NODE_STYLE,
        data: {
          label: (
            <NodeLabel
              icon={
                technology.category
                  .toLowerCase()
                  .includes("package")
                  ? Package
                  : Boxes
              }
              title={technology.name}
              subtitle={normalizeCategory(technology.category)}
              evidencePath={evidencePath}
            />
          ),
        },
      });

      edges.push({
        id: `${scopeNodeId}-${technologyNodeId}`,
        source: scopeNodeId,
        target: technologyNodeId,
        type: "smoothstep",
        style: {
          stroke: "#94a3b8",
          strokeWidth: 1.25,
        },
      });

      if (scope === "shared") {
        if (groupedTechnologies.frontend.length > 0) {
          edges.push({
            id: `${technologyNodeId}-frontend`,
            source: technologyNodeId,
            target: "scope-frontend",
            type: "smoothstep",
            style: {
              stroke: "#cbd5e1",
              strokeWidth: 1,
              strokeDasharray: "5 5",
            },
          });
        }

        if (groupedTechnologies.backend.length > 0) {
          edges.push({
            id: `${technologyNodeId}-backend`,
            source: technologyNodeId,
            target: "scope-backend",
            type: "smoothstep",
            style: {
              stroke: "#cbd5e1",
              strokeWidth: 1,
              strokeDasharray: "5 5",
            },
          });
        }
      }
    });

    const hiddenTechnologyCount =
      groupedTechnologies[scope].length -
      visibleTechnologies.length;

    if (hiddenTechnologyCount > 0) {
      const moreNodeId = `technology-${scope}-more`;

      nodes.push({
        id: moreNodeId,
        position: {
          x: scopeX,
          y:
            FIRST_TECHNOLOGY_NODE_Y +
            visibleTechnologies.length *
              TECHNOLOGY_NODE_STEP_Y,
        },
        style: TECHNOLOGY_NODE_STYLE,
        data: {
          label: (
            <NodeLabel
              icon={Boxes}
              title={`+${hiddenTechnologyCount} more`}
              subtitle="Shown in detected stack"
            />
          ),
        },
      });

      edges.push({
        id: `${scopeNodeId}-${moreNodeId}`,
        source: scopeNodeId,
        target: moreNodeId,
        type: "smoothstep",
        style: {
          stroke: "#94a3b8",
          strokeWidth: 1.25,
        },
      });
    }
  });

  return {
    nodes,
    edges,
  };
}

export function RepositoryArchitectureMap({
  repositoryName,
  technologies,
}: RepositoryArchitectureMapProps) {
  const { nodes, edges } = useMemo(
    () => createArchitectureMap(repositoryName, technologies),
    [repositoryName, technologies],
  );

  return (
    <section className="w-full min-w-0 rounded-2xl border border-slate-200 bg-[#f4f4f5] p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Layers3 size={15} className="text-slate-700" />

            <h2 className="text-sm font-semibold text-slate-950">
              Architecture map
            </h2>
          </div>

          <p className="mt-1 text-xs text-slate-500">
            Relationships created from detected technologies and evidence paths.
          </p>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="block h-px w-5 bg-slate-500" />
            Structure
          </div>

          <div className="flex items-center gap-2">
            <span className="block w-5 border-t border-dashed border-slate-400" />
            Shared tool
          </div>
        </div>
      </div>

      <div className="devscope-architecture-map h-[540px] w-full min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-[#eef0f3] sm:h-[620px] lg:h-[680px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={MAP_FIT_VIEW_OPTIONS}
          minZoom={0.35}
          maxZoom={1.6}
          zoomOnScroll={false}
          preventScrolling={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          proOptions={{
            hideAttribution: true,
          }}
        >
          <Background
            variant={BackgroundVariant.Dots}
            color="#cbd5e1"
            gap={22}
            size={1}
          />

          <Controls
            showInteractive={false}
            position="bottom-right"
            fitViewOptions={MAP_FIT_VIEW_OPTIONS}
          />
        </ReactFlow>
      </div>

      <style jsx global>{`
        .devscope-architecture-map .react-flow__controls {
          overflow: hidden;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          box-shadow: none;
        }

        .devscope-architecture-map .react-flow__controls-button {
          width: 30px;
          height: 30px;
          border: 0;
          border-bottom: 1px solid #334155;
          background: #0f172a;
          color: #ffffff;
          transition: background-color 150ms ease;
        }

        .devscope-architecture-map
          .react-flow__controls-button:last-child {
          border-bottom: 0;
        }

        .devscope-architecture-map
          .react-flow__controls-button:hover {
          background: #1e293b;
        }

        .devscope-architecture-map
          .react-flow__controls-button
          svg {
          fill: currentColor;
        }

        .devscope-architecture-map .react-flow__node {
          cursor: default;
        }
      `}</style>
    </section>
  );
}
