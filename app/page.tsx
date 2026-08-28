import type { Metadata } from "next";
import Link from "next/link";
import { MarqueeCTA, MarqueeText } from "@/components/motion/MarqueeCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/motion/SectionLabel";
import { CountUp } from "@/components/motion/CountUp";
import { ProjectGrid } from "@/components/works/ProjectGrid";
import { StarBurst } from "@/components/ornament/Ornaments";
import { FloatingDecorations } from "@/components/ornament/FloatingDecorations";
import { AnimatedSquiggle } from "@/components/motion/AnimatedSquiggle";
import { profile } from "@/data/profile";
import { selectedProjects, archiveProjects, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "A curated selection of mobile apps, frontend builds, and open-source projects by Febry Ardiansyah.",
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-12">
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20">
        <FloatingDecorations variant="hero" />

        <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
          <StarBurst className="h-4 w-4 text-[var(--color-accent)] twinkle" />
          <SectionLabel index={0} label="SELECTED WORKS" />
          <span aria-hidden className="text-[var(--color-muted)]">/</span>
          <span className="bracket">{projects.length} projects indexed</span>
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
            <Link href="/contact" className="btn-pill cta-pulse" data-cursor="hover">
              Start a project
              <span aria-hidden>→</span>
            </Link>
            <Link href="/about" className="btn-pill-outline" data-cursor="hover">
              About me
            </Link>
            <span className="bracket hidden text-[var(--color-muted)] md:inline">
              · reply within 48h
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 overflow-hidden">
            <MarqueeText
              speed="normal"
              className="text-[var(--color-fg)]"
              separator={
                <span className="italic-accent ml-8" aria-hidden>
                  ✦
                </span>
              }
            >
              <span className="text-section px-3">
                Febry{" "}
                <span className="italic-accent">*</span> Engineer{" "}
                <span className="italic-accent">*</span> Builder{" "}
                <span className="italic-accent">*</span> Mobile Apps{" "}
                <span className="italic-accent">*</span> Flutter{" "}
                <span className="italic-accent">*</span> Next.js
              </span>
            </MarqueeText>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-y border-[var(--color-rule)]">
            <Stat label="Years shipping" value={9} suffix="+" />
            <Stat label="Apps launched" value={11} />
            <Stat label="OSS stars" value={300} suffix="+" />
          </dl>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="py-12 md:py-16">
        <ProjectGrid
          selected={selectedProjects}
          archive={archiveProjects}
        />
      </section>

      <Reveal>
        <section className="dashed-frame relative mt-16 px-8 py-10 text-center">
          <FloatingDecorations variant="minimal" />
          <AnimatedSquiggle className="mx-auto" />
          <p className="mt-4 text-section text-[var(--color-fg)]">
            Got a product in mind?
          </p>
          <p className="mt-2 text-[var(--color-muted)]">
            I&apos;m open to interesting collaborations — let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-pill mt-6 cta-pulse" data-cursor="hover">
            Say hello →
          </Link>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-16">
          <div className="bracket mb-3 text-[var(--color-muted)]">
            [ CTA · ALWAYS ON ]
          </div>
          <MarqueeCTA
            text="Get in touch — currently shipping, open to side quests"
            href="/contact"
            ariaLabel="Get in touch"
            speed="normal"
          />
        </section>
      </Reveal>
    </div>
  );
}

function Stat({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div className="py-6">
      <dt className="bracket text-[var(--color-muted)]">{label}</dt>
      <dd className="mt-1 font-display text-4xl text-[var(--color-fg)] md:text-5xl">
        <CountUp value={value} suffix={suffix} />
      </dd>
    </div>
  );
}