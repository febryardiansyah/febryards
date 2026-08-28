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
      className="group block py-4 transition-colors hover:bg-[var(--color-rule)]/30 sm:py-5"
      aria-label={`Open case study: ${project.title}`}
      data-cursor="hover"
    >
      <div className="flex items-baseline gap-2 px-2 sm:gap-4">
        <span aria-hidden className="wiggle text-lg sm:text-xl">
          {project.emoji}
        </span>
        <span className="hidden font-mono text-xs text-[var(--color-muted)] tabular-nums sm:inline">
          #{idx}
        </span>
        <h3 className="text-base font-display leading-tight text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent-2)] sm:text-display sm:flex-1">
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
          className="ml-auto text-[var(--color-muted)] transition-all group-hover:translate-x-1 group-hover:text-[var(--color-accent-2)] sm:ml-0"
        >
          →
        </span>
      </div>
    </Link>
  );
}