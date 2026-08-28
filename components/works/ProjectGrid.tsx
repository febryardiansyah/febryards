import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArchiveCard } from "./ArchiveCard";

type ProjectGridProps = {
  selected: Project[];
  archive: Project[];
};

export function ProjectGrid({ selected, archive }: ProjectGridProps) {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="bracket text-[10px] sm:text-xs">
            [ 01 / SELECTED ]
          </h2>
          <span className="bracket text-[10px] sm:text-xs">
            {selected.length} works
          </span>
        </div>
        <ul className="mt-8 grid gap-12 md:grid-cols-2 md:gap-16">
          {selected.map((p, i) => (
            <li key={p.slug}>
              <ProjectCard project={p} index={i} />
            </li>
          ))}
        </ul>
      </section>

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