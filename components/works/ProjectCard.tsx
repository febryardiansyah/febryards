import Link from "next/link";
import type { Project } from "@/data/projects";
import { CyclingThumb } from "@/components/motion/CyclingThumb";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const idx = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/works/${project.slug}`}
      className="group block"
      aria-label={`Open case study: ${project.title}`}
    >
      <div className="flex items-baseline justify-between">
        <p className="bracket">[ WORK #{idx} ]</p>
        <span className="bracket">{project.year}</span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span aria-hidden className="text-2xl">
          {project.emoji}
        </span>
        <h3 className="text-display text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent-2)]">
          {project.title}
        </h3>
      </div>

      <p className="mt-1 text-sm text-[var(--color-muted)]">
        {project.year} / {project.categories.join(", ")}
      </p>

      <div className="relative mt-5 overflow-hidden rounded-xl border border-[var(--color-rule)] bg-[var(--color-card)]">
        <CyclingThumb
          frames={project.thumbs}
          alt={`${project.title} preview`}
          width={1280}
          height={800}
          className="transition-transform duration-500 group-hover:scale-[1.01]"
        />
        <div className="absolute right-3 top-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent-2)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent-3)]" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="sticker-ink">{project.role}</span>
        {project.stack.slice(0, 3).map((s) => (
          <span key={s} className="sticker">
            {s}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="sticker">+{project.stack.length - 3}</span>
        )}
      </div>

      <p className="mt-4 max-w-prose text-sm leading-relaxed text-[var(--color-muted)]">
        {project.summary}
      </p>

      <p className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--color-fg)] underline-offset-4 group-hover:underline">
        Open case study
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </p>
    </Link>
  );
}