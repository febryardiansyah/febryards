import type { Metadata } from "next";
import Link from "next/link";
import { MarqueeCTA } from "@/components/motion/MarqueeCTA";
import { Reveal } from "@/components/motion/Reveal";
import { StarBurst } from "@/components/ornament/Ornaments";
import { FloatingDecorations } from "@/components/ornament/FloatingDecorations";
import { AnimatedSquiggle } from "@/components/motion/AnimatedSquiggle";
import { ProjectGrid } from "@/components/works/ProjectGrid";
import { projects, featuredProjects, extraProjects, archiveProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "A curated selection of mobile apps, frontend builds, and open-source projects by Febry Ardiansyah.",
};

const yearRange = (() => {
  const years = projects.map((p) => p.year);
  const min = Math.min(...years);
  const max = Math.max(...years);
  return min === max ? `${min}` : `${min}–${max}`;
})();

const stackCounts = (() => {
  const counts = new Map<string, number>();
  for (const p of projects) {
    for (const s of p.stack) {
      counts.set(s, (counts.get(s) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
})();

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
      <header className="relative pt-8 pb-10 md:pt-14 md:pb-12">
        <FloatingDecorations variant="hero" />

        <div className="flex flex-wrap items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-[11px]">
          <span className="flex items-center gap-2">
            <StarBurst className="h-3.5 w-3.5 text-[var(--color-accent)] twinkle" />
            <span>Index 02 — The Works File</span>
          </span>
          <span className="hidden sm:inline">Filed {yearRange} · Jkt</span>
        </div>

        <div className="mt-6 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-8">
            <h1
              className="font-display text-[var(--color-fg)]"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)", lineHeight: 0.95 }}
            >
              Selected
              <em className="italic-accent not-italic font-display"> Works</em>
              <span className="text-[var(--color-accent-2)]">.</span>
            </h1>
            <p className="mt-3 max-w-md font-mono text-sm text-[var(--color-muted)] sm:text-base">
              — shipping mobile apps & frontends, since 2020.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:pt-2">
            <div className="border-l border-[var(--color-rule)] pl-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                Reading the index
              </p>
              <p className="mt-2 text-sm text-[var(--color-fg)]">
                {projects.length} projects across{" "}
                <span className="font-mono">{yearRange}</span>. Each entry
                includes the problem, the stack, and what shipped — no filler.
              </p>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                Open the case files below, or{" "}
                <Link
                  href="/contact"
                  className="text-[var(--color-fg)] underline-offset-4 hover:underline"
                  data-cursor="hover"
                >
                  commission a new one
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-y border-[var(--color-rule)] py-3 sm:mt-14">
            <div className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] sm:text-[11px]">
              <span>§ 00</span>
              <span>The Index</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] sm:text-[11px]">
              {featuredProjects.length + extraProjects.length} selected · {archiveProjects.length} archived · ↓
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] sm:text-[11px]">
            {stackCounts.map(([stack, n]) => (
              <li
                key={stack}
                className="rounded-full border border-[var(--color-rule)] px-2.5 py-1"
              >
                {stack}
                <span className="ml-2 text-[var(--color-fg)]">{n}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </header>

      <hr className="hairline" />

      <section className="py-12 md:py-16">
        <ProjectGrid
          featured={featuredProjects}
          extras={extraProjects}
          archive={archiveProjects}
        />
      </section>

      <Reveal>
        <section className="dashed-frame relative mt-12 px-5 py-10 sm:mt-16 sm:px-10 sm:py-12">
          <FloatingDecorations variant="minimal" />
          <div className="grid items-end gap-6 sm:grid-cols-[1fr,auto]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                End of index
              </p>
              <p className="mt-2 text-section text-[var(--color-fg)]">
                Like what you see? The next page could be yours.
              </p>
              <AnimatedSquiggle className="mt-3" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link href="/about" className="btn-pill-outline" data-cursor="hover">
                ← About
              </Link>
              <Link
                href="/contact"
                className="btn-pill cta-pulse"
                data-cursor="hover"
              >
                Start a project →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-12 sm:mt-16">
          <div className="font-mono mb-3 text-[10px] uppercase tracking-widest text-[var(--color-muted)] sm:text-[11px]">
            [ CTA · ALWAYS ON ]
          </div>
          <MarqueeCTA
            text="Have a brief? I'm reading — let's build it"
            href="/contact"
            ariaLabel="Get in touch"
            speed="slow"
            variant="outline"
          />
        </section>
      </Reveal>
    </div>
  );
}
