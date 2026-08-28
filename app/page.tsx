import type { Metadata } from "next";
import Link from "next/link";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectGrid } from "@/components/works/ProjectGrid";
import { StarBurst, WaveSquiggle } from "@/components/ornament/Ornaments";
import { profile } from "@/data/profile";
import { selectedProjects, archiveProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "A curated selection of mobile apps, frontend builds, and open-source projects by Febry Ardiansyah.",
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-12">
      <section className="pt-12 pb-16 md:pt-20">
        <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
          <StarBurst className="h-4 w-4 text-[var(--color-accent)]" />
          <span className="bracket">[ 00 / SELECTED WORKS ]</span>
        </div>

        <Reveal>
          <h1 className="text-hero mt-6 text-[var(--color-fg)]">
            <span className="block">Febry</span>
            <span className="block italic-accent">Ardiansyah</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-fg)] md:text-xl">
            {profile.tagline}{" "}
            <span className="text-[var(--color-muted)]">
              I build mobile apps and the frontends that connect to them —
              Flutter, Next.js, and the boring glue that ships reliably.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-pill">
              Start a project
              <span aria-hidden>→</span>
            </Link>
            <Link href="/about" className="btn-pill-outline">
              About me
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <Marquee
              speed="slow"
              ariaLabel="Engineer, builder, mobile apps"
            >
              <span className="text-section px-4 text-[var(--color-fg)]">
                Febry <span className="italic-accent">✦</span> Engineer{" "}
                <span className="italic-accent">✦</span> Builder{" "}
                <span className="italic-accent">✦</span> Mobile Apps{" "}
                <span className="italic-accent">✦</span>
              </span>
            </Marquee>
          </div>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="py-12 md:py-16">
        <ProjectGrid
          selected={selectedProjects}
          archive={archiveProjects}
        />
      </section>

      <section className="dashed-frame mt-16 px-8 py-10 text-center">
        <WaveSquiggle className="mx-auto h-4 w-24 text-[var(--color-muted)]" />
        <p className="mt-4 text-section text-[var(--color-fg)]">
          Got a product in mind?
        </p>
        <p className="mt-2 text-[var(--color-muted)]">
          I&apos;m open to interesting collaborations — let&apos;s talk.
        </p>
        <Link href="/contact" className="btn-pill mt-6">
          Say hello →
        </Link>
      </section>
    </div>
  );
}