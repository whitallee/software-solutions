import { resources } from "@/lib/data/resources";
import type { ResourceCategory } from "@/lib/data/types";

const CATEGORY_LABEL: Record<ResourceCategory, string> = {
  tool: "TOOL",
  article: "ARTICLE",
  library: "LIB",
  reference: "REF",
  tutorial: "TUTORIAL",
  other: "OTHER",
};

const CATEGORY_CLASS: Record<ResourceCategory, string> = {
  tool: "text-green border-green",
  article: "text-blue border-blue",
  library: "text-yellow border-yellow",
  reference: "text-muted border-muted",
  tutorial: "text-red border-red",
  other: "text-muted border-border",
};

export default function ResourcesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-muted text-xs mb-4 font-mono">~/resources $</div>
      <h1 className="text-2xl font-bold text-text mb-2">
        <span className="text-red">&gt;</span> Resources
      </h1>
      <p className="text-muted text-sm mb-3">
        Tools, libraries, and references the group has found useful.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 text-xs mb-10">
        {(Object.keys(CATEGORY_LABEL) as ResourceCategory[]).map((cat) => (
          <span
            key={cat}
            className={`border px-1.5 py-0.5 ${CATEGORY_CLASS[cat]}`}
          >
            {CATEGORY_LABEL[cat]}
          </span>
        ))}
      </div>

      <div className="space-y-px">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="border border-border p-6 hover:border-red/40 hover:bg-surface/50 transition-all group"
          >
            <div className="flex items-start gap-3 mb-2">
              <span
                className={`text-xs border px-1.5 py-0.5 shrink-0 ${CATEGORY_CLASS[resource.category]}`}
              >
                {CATEGORY_LABEL[resource.category]}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-bold text-text group-hover:text-red-light transition-colors">
                    {resource.name}
                  </h2>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted hover:text-red transition-colors shrink-0"
                  >
                    ↗ visit
                  </a>
                </div>
                <p className="text-sm text-muted leading-relaxed mt-1.5">
                  {resource.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted mt-3">
              <div className="flex flex-wrap gap-1">
                {resource.tags.map((tag) => (
                  <span key={tag} className="text-red/70">
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="ml-auto text-muted/60">
                added: {resource.addedAt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
