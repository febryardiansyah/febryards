import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { MarqueeCTA, MarqueeText } from "@/components/motion/MarqueeCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/motion/SectionLabel";
import { CountUp } from "@/components/motion/CountUp";
import { SkillBoard } from "@/components/about/SkillBoard";
import { Timeline } from "@/components/about/Timeline";
import { StarBurst } from "@/components/ornament/Ornaments";
import { FloatingDecorations } from "@/components/ornament/FloatingDecorations";
import { AnimatedSquiggle } from "@/components/motion/AnimatedSquiggle";
import { AnimatedAvatar } from "@/components/ornament/AnimatedAvatar";
import { profile, approachSteps, interests as interestMap } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Febry Ardiansyah — mobile apps & frontend engineer based in Jakarta. Skills, experience, and approach.",
};

const today = new Date().toISOString().slice(0, 10);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <header className="relative pt-8 pb-10 md:pt-16 md:pb-12">
        <FloatingDecorations variant="hero" />

        <div className="flex flex-wrap items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-[11px]">
          <span className="flex items-center gap-2">
            <StarBurst className="h-3.5 w-3.5 text-[var(--color-accent)] twinkle" />
            <span>Issue 01 — The About File</span>
          </span>
          <span className="hidden sm:inline">Filed {today} · Jkt</span>
        </div>

        <div className="mt-6 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-8">
            <h1
              className="font-display text-[var(--color-fg)]"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)", lineHeight: 0.95 }}
            >
              Hi, I&apos;m{" "}
              <em className="italic-accent not-italic font-display">Febry</em>
              <span className="text-[var(--color-accent-2)]">.</span>
            </h1>
            <p className="mt-3 max-w-md font-mono text-sm text-[var(--color-muted)] sm:text-base">
              — making mobile apps since 2020.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:pt-2">
            <div className="border-l border-[var(--color-rule)] pl-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                Now reading
              </p>
              <p className="mt-2 text-sm text-[var(--color-fg)]">
                {profile.longBio}
              </p>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                Mobile apps developer at{" "}
                <span className="text-[var(--color-fg)]">{profile.location}</span>.
                Software that survives contact with real users — accessible,
                reliable, and pleasant to maintain.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-y border-[var(--color-rule)] py-3 sm:mt-14">
            <SectionLabel index={0} label="The Dossier" count={5} />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
              ↓ scroll for chapters
            </span>
          </div>
        </Reveal>
      </header>

      <Section number="01" kicker="The Dossier" title="Quick facts" anchor="dossier">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-4 lg:col-span-3">
            <figure className="relative">
              <AnimatedAvatar
                src={profile.avatarUrl}
                alt={`${profile.name} portrait`}
              />
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                <span className="text-[var(--color-fg)]">{profile.name}</span>
                <span className="mx-2">/</span>
                {profile.role}
              </figcaption>
              <span
                aria-hidden
                className="absolute -top-2 -left-2 font-mono text-[10px] text-[var(--color-muted)]"
              >
                ↖ fig. 01
              </span>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8 lg:col-span-9">
            <dl className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              <Fact label="Based in" value={profile.location} mono />
              <Fact label="Focus" value="Mobile · Frontend" mono />
              <Fact
                label="Currently"
                value="Mobile Apps Developer @ Central Bank of Indonesia"
              />
              <Fact label="Stack" value="Flutter · Next.js · TS · Node" mono />
              <Fact
                label="Email"
                value={
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all underline-offset-4 hover:underline"
                  >
                    {profile.email}
                  </a>
                }
                mono
                className="sm:col-span-2"
              />
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section number="02" kicker="Receipts" title="By the numbers" anchor="numbers">
        <Reveal>
          <dl className="grid grid-cols-1 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <Stat label="Years shipping" value={5} suffix="+" note="and counting" />
            <Stat label="Apps shipped" value={11} note="to the App Store" />
            <Stat label="OSS stars" value={300} suffix="+" note="across personal repos" />
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden">
            <MarqueeText
              speed="fast"
              reverse
              interactive
              className="text-[var(--color-fg)]"
              separator={
                <span className="italic-accent ml-8" aria-hidden>
                  ✦
                </span>
              }
            >
              <span className="text-section px-3">
                Mobile <span className="italic-accent">*</span> Frontend{" "}
                <span className="italic-accent">*</span> Architecture{" "}
                <span className="italic-accent">*</span> DX{" "}
                <span className="italic-accent">*</span>
              </span>
            </MarqueeText>
          </div>
        </Reveal>
      </Section>

      <Section number="03" kicker="Toolkit" title="What I reach for" anchor="skillboard">
        <Reveal delay={0.1}>
          <SkillBoard />
        </Reveal>
      </Section>

      <Section number="04" kicker="Resume" title="Where I've been" anchor="experience">
        <Reveal delay={0.1}>
          <Timeline />
        </Reveal>
      </Section>

      <Section number="05" kicker="Method" title="How I work" anchor="approach">
        <ol className="space-y-0">
          {approachSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <li className="group relative grid grid-cols-[44px,1fr] gap-4 border-t border-[var(--color-rule)] py-5 sm:grid-cols-[80px,1fr] sm:gap-6 sm:py-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                  <span className="block">{step.n}</span>
                  <span className="hidden text-[9px] text-[var(--color-muted)]/60 sm:block">
                    / 05
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-display leading-tight text-[var(--color-fg)] sm:text-xl">
                    {step.title}
                    <span className="ml-2 align-middle text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                      →
                    </span>
                  </h4>
                  <p className="mt-2 max-w-prose text-sm text-[var(--color-muted)] sm:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
          <li className="border-t border-[var(--color-rule)]" aria-hidden />
        </ol>
      </Section>

      <Section number="06" kicker="Off-clock" title="When I'm not shipping" anchor="off-clock">
        <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {Object.entries(interestMap).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.05}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                  <span className="text-[var(--color-fg)]">—</span> {category}
                </p>
                <ul className="mt-3 space-y-1.5 text-[15px] text-[var(--color-fg)]">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="flex items-baseline gap-3 border-b border-dashed border-[var(--color-rule)] pb-1.5"
                    >
                      <span aria-hidden className="text-[var(--color-accent-2)]">
                        ·
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Reveal>
        <section className="dashed-frame relative mt-16 px-5 py-10 sm:px-10 sm:py-12">
          <FloatingDecorations variant="minimal" />
          <div className="grid items-end gap-6 sm:grid-cols-[1fr,auto]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                End of file
              </p>
              <p className="mt-2 text-section text-[var(--color-fg)]">
                Want to see more, or skip ahead to a conversation?
              </p>
              <AnimatedSquiggle className="mt-3" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link href="/works" className="btn-pill-outline" data-cursor="hover">
                ← Works
              </Link>
              <Link href="/contact" className="btn-pill cta-pulse" data-cursor="hover">
                Say hello →
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
            text="Get in touch — currently shipping, open to side quests"
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

function Section({
  number,
  kicker,
  title,
  anchor,
  children,
}: {
  number: string;
  kicker: string;
  title: string;
  anchor: string;
  children: ReactNode;
}) {
  return (
    <section id={anchor} className="relative py-10 md:py-16">
      <div className="mb-6 flex items-baseline justify-between gap-3 sm:mb-8">
        <div className="flex items-baseline gap-3 sm:gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] sm:text-[11px]">
            § {number}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] sm:text-[11px]">
            {kicker}
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] sm:text-[11px]">
          /{anchor}
        </span>
      </div>
      <h2 className="text-section max-w-3xl text-[var(--color-fg)]">
        {title}
        <span className="block h-px w-10 bg-[var(--color-fg)]/40 mt-3" aria-hidden />
      </h2>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  );
}

function Fact({
  label,
  value,
  mono = false,
  className = "",
}: {
  label: string;
  value: ReactNode;
  mono?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
        {label}
      </dt>
      <dd
        className={`mt-1.5 text-[15px] text-[var(--color-fg)] ${
          mono ? "font-mono" : ""
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function Stat({
  label,
  value,
  suffix = "",
  note,
}: {
  label: string;
  value: number;
  suffix?: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-1 py-5 sm:py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
      <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
        {label}
      </dt>
      <dd className="flex items-baseline gap-1 font-display text-4xl text-[var(--color-fg)] sm:text-5xl">
        <CountUp value={value} suffix={suffix} />
      </dd>
      {note ? (
        <p className="font-mono text-[10px] text-[var(--color-muted)]">{note}</p>
      ) : null}
    </div>
  );
}
