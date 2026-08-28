import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

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
        <ul className="mt-8 grid gap-12 md:grid-cols-2">
          {archive.map((p, i) => (
            <li key={p.slug}>
              <ProjectCard project={p} index={selected.length + i} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}