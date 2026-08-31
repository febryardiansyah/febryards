import type { Project } from "@/data/projects";
import { ArchiveCard } from "./ArchiveCard";
import { PreviewTrigger } from "./PreviewTrigger";
import { HoverPreview } from "./HoverPreview";
import { SelectedGrid } from "./SelectedGrid";

type ProjectGridProps = {
  featured: Project[];
  extras: Project[];
  archive: Project[];
};

export function ProjectGrid({ featured, extras, archive }: ProjectGridProps) {
  return (
    <div className="space-y-16 sm:space-y-24">
      <SelectedGrid featured={featured} extras={extras} />

      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="bracket text-[10px] sm:text-xs">
            [ 02 / ARCHIVE ]
          </h2>
          <span className="bracket text-[10px] sm:text-xs">
            {archive.length} works
          </span>
        </div>
        <p className="mt-3 max-w-prose text-xs text-[var(--color-muted)] sm:text-sm">
          Older projects, hobby builds, and open-source experiments. Smaller,
          scrappier, still sharp.
        </p>
        <ul className="mt-6 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
          {archive.map((p, i) => (
            <li key={p.slug}>
              <PreviewTrigger src="/icon.png">
                <ArchiveCard project={p} index={i} />
              </PreviewTrigger>
            </li>
          ))}
        </ul>
      </section>

      <HoverPreview />
    </div>
  );
}
