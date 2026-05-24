import { projects } from "@/lib/data/projects";
import type { ProjectStatus } from "@/lib/data/types";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  active: "ACTIVE",
  completed: "DONE",
  idea: "IDEA",
  archived: "ARCHIVED",
};

const STATUS_CLASS: Record<ProjectStatus, string> = {
  active: "text-green border-green",
  completed: "text-muted border-muted",
  idea: "text-blue border-blue",
  archived: "text-muted border-muted opacity-50",
};

const STATUS_ORDER: ProjectStatus[] = [
  "active",
  "idea",
  "completed",
  "archived",
];

export default function ProjectsPage() {
  const sorted = [...projects].sort(
    (a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status)
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-muted text-xs mb-4 font-mono">~/projects $</div>
      <h1 className="text-2xl font-bold text-text mb-2">
        <span className="text-red">&gt;</span> Projects
      </h1>
      <p className="text-muted text-sm mb-3">
        Tools we&apos;ve built, are building, and want to build.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs mb-10">
        {STATUS_ORDER.map((s) => (
          <span
            key={s}
            className={`border px-1.5 py-0.5 ${STATUS_CLASS[s]}`}
          >
            {STATUS_LABEL[s]}
          </span>
        ))}
      </div>

      <div className="space-y-px">
        {sorted.map((project) => (
          <div
            key={project.id}
            className="border border-border p-6 hover:border-red/40 hover:bg-surface/50 transition-all group"
          >
            <div className="flex items-start gap-3 mb-3">
              <span
                className={`text-xs border px-1.5 py-0.5 shrink-0 ${STATUS_CLASS[project.status]}`}
              >
                {STATUS_LABEL[project.status]}
              </span>
              <h2 className="font-bold text-text group-hover:text-red-light transition-colors leading-tight">
                {project.name}
              </h2>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-3">
              {project.description}
            </p>

            {project.details && (
              <p className="text-xs text-muted/70 leading-relaxed mb-4 border-l border-border pl-4">
                {project.details}
              </p>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted mt-2">
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-red/70">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              {project.contributors.length > 0 && (
                <span>contributors: {project.contributors.join(", ")}</span>
              )}
              {project.startedAt && <span>started: {project.startedAt}</span>}
              {project.completedAt && (
                <span>completed: {project.completedAt}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
