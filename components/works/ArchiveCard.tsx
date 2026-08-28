import Link from "next/link";
import type { Project } from "@/data/projects";

type ArchiveCardProps = {
  project: Project;
  index: number;
};

export function ArchiveCard({ project, index }: ArchiveCardProps) {
  const idx = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/works/${project.slug}`}
      className="group block py-5 transition-colors hover:bg-[var(--color-rule)]/30"
      aria-label={`Open case study: ${project.title}`}
      data-cursor="hover"
    >
      <div className="flex items-baseline gap-4 px-2">
        <span aria-hidden className="wiggle text-xl">
          {project.emoji}
        </span>
        <span className="font-mono text-xs text-[var(--color-muted)] tabular-nums">
          #{idx}
        </span>
        <h3 className="text-display flex-1 text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent-2)]">
          {project.title}
        </h3>
        <span className="hidden font-mono text-xs text-[var(--color-muted)] sm:inline">
          {project.year}
        </span>
        <span className="bracket hidden md:inline">
          {project.categories.slice(0, 2).join(" · ")}
        </span>
        <span
          aria-hidden
          className="text-[var(--color-muted)] transition-all group-hover:translate-x-1 group-hover:text-[var(--color-accent-2)]"
        >
          →
        </span>
      </div>
    </Link>
  );
}