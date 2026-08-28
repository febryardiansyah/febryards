import Link from "next/link";
import type { Project } from "@/data/projects";
import { CyclingThumb } from "@/components/motion/CyclingThumb";
import { TiltCard } from "@/components/motion/TiltCard";

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
      data-cursor="hover"
    >
      <div className="flex items-baseline justify-between">
        <p className="bracket text-[10px] sm:text-xs">[ WORK #{idx} ]</p>
        <span className="bracket text-[10px] transition-colors group-hover:text-[var(--color-accent-2)] sm:text-xs">
          {project.year}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 sm:gap-3">
        <span aria-hidden className="wiggle text-xl sm:text-2xl">
          {project.emoji}
        </span>
        <h3 className="text-2xl font-display leading-tight text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent-2)] sm:text-display">
          {project.title}
        </h3>
      </div>

      <p className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">
        {project.year} / {project.categories.join(", ")}
      </p>

      <TiltCard className="mt-4 sm:mt-5">
        <div className="relative overflow-hidden rounded-xl border border-[var(--color-rule)] bg-[var(--color-card)] glow">
          <CyclingThumb
            frames={project.thumbs}
            alt={`${project.title} preview`}
            width={1280}
            height={800}
          />
          <div className="absolute right-3 top-3 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] twinkle" />
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent-2)] twinkle-2" />
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent-3)] twinkle-3" />
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-xl border border-transparent transition-colors group-hover:border-[var(--color-accent-2)]/40"
          />
        </div>
      </TiltCard>

      <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[10px] sm:gap-2 sm:text-xs">
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

      <p className="mt-4 inline-flex items-center gap-2 text-xs text-[var(--color-fg)] underline-offset-4 group-hover:underline sm:mt-5 sm:text-sm">
        Open case study
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </p>
    </Link>
  );
}