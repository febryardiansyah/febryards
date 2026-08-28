import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArchiveCard } from "./ArchiveCard";

type ProjectGridProps = {
  selected: Project[];
  archive: Project[];
};

export function ProjectGrid({ selected, archive }: ProjectGridProps) {
  return (
    <div className="space-y-24">
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="bracket">[ 01 / SELECTED ]</h2>
          <span className="bracket">{selected.length} works</span>
        </div>
        <ul className="mt-8 grid gap-16 md:grid-cols-2">
          {selected.map((p, i) => (
            <li key={p.slug}>
              <ProjectCard project={p} index={i} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="bracket">[ 02 / ARCHIVE ]</h2>
          <span className="bracket">{archive.length} works</span>
        </div>
        <p className="mt-3 max-w-prose text-sm text-[var(--color-muted)]">
          Older projects, hobby builds, and open-source experiments. Smaller,
          scrappier, less polished.
        </p>
        <ul className="mt-6 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
          {archive.map((p, i) => (
            <li key={p.slug}>
              <ArchiveCard project={p} index={selected.length + i} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}