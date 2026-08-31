"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type SelectedGridProps = {
  featured: Project[];
  extras: Project[];
};

export function SelectedGrid({ featured, extras }: SelectedGridProps) {
  const [expanded, setExpanded] = useState(false);
  const total = featured.length + extras.length;

  return (
    <section>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="bracket text-[10px] sm:text-xs">
          [ 01 / SELECTED ]
        </h2>
        <span className="bracket text-[10px] sm:text-xs">
          {total} works
        </span>
      </div>

      <ul className="mt-8 grid gap-12 md:grid-cols-2 md:gap-16">
        {featured.map((p, i) => (
          <li key={p.slug}>
            <ProjectCard project={p} index={i} />
          </li>
        ))}
        {expanded &&
          extras.map((p, i) => (
            <li
              key={p.slug}
              className="animate-[fadeIn_400ms_ease-out] motion-reduce:animate-none"
            >
              <ProjectCard project={p} index={featured.length + i} />
            </li>
          ))}
      </ul>

      {extras.length > 0 && (
        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="btn-pill-outline"
            data-cursor="hover"
          >
            {expanded
              ? "Show less"
              : `Show more (+${extras.length})`}
            <span
              aria-hidden
              className={`transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
