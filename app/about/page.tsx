import type { Metadata } from "next";
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

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
      <section className="relative overflow-hidden pt-8 pb-10 md:pt-20 md:pb-12">
        <FloatingDecorations variant="hero" />

        <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-muted)] sm:gap-3 sm:text-sm">
          <StarBurst className="h-4 w-4 text-[var(--color-accent)] twinkle" />
          <SectionLabel index={0} label="ABOUT" />
          <span aria-hidden>/</span>
          <span className="bracket text-[10px] sm:text-xs">
            5 chapters · 9+ years
          </span>
        </div>

        <Reveal>
          <h1 className="text-hero mt-5 text-[var(--color-fg)] sm:mt-6">
            Hi, I&apos;m <span className="italic-accent">Febry</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-fg)] sm:mt-6 sm:text-lg md:text-xl">
            {profile.longBio}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)] sm:mt-4 sm:text-base">
            Mobile apps developer at <strong>{profile.location}</strong>. I
            care about shipping software that survives contact with real
            users — accessible, reliable, and pleasant to maintain.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-card)] p-4 glow sm:mt-12 sm:p-6">
            <div className="grid items-center gap-8 md:grid-cols-[260px,1fr]">
              <AnimatedAvatar
                src={profile.avatarUrl}
                alt={`${profile.name} portrait`}
              />
              <div>
                <p className="bracket">[ QUICK FACTS ]</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <strong className="font-medium">Based in</strong>{" "}
                    {profile.location}
                  </li>
                  <li>
                    <strong className="font-medium">Focus</strong> Mobile apps
                    &amp; frontend engineering
                  </li>
                  <li>
                    <strong className="font-medium">Currently</strong>{" "}
                    Mobile Apps Developer @ Central Bank of Indonesia
                  </li>
                  <li>
                    <strong className="font-medium">Stack</strong> Flutter,
                    Next.js, TypeScript, Node.js
                  </li>
                  <li>
                    <strong className="font-medium">Email</strong>{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="break-all underline-offset-4 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <dl className="mt-10 grid grid-cols-3 gap-3 border-y border-[var(--color-rule)] sm:mt-12 sm:gap-6">
            <Stat label="Years shipping" value={9} suffix="+" />
            <Stat label="Apps shipped" value={11} />
            <Stat label="OSS stars" value={300} suffix="+" />
          </dl>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-10 overflow-hidden sm:mt-12">
            <MarqueeText
              speed="fast"
              reverse
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
      </section>

      <hr className="hairline" />

      <section className="py-10 md:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <SectionLabel index={1} label="SKILLBOARD" count={5} />
          <span className="bracket text-[10px] sm:text-xs">{profile.role}</span>
        </div>
        <Reveal>
          <h3 className="text-section mt-3 max-w-3xl text-[var(--color-fg)]">
            Tools that keep me <span className="italic-accent">nimble</span>{" "}
            across mobile and web.
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 sm:mt-10">
            <SkillBoard />
          </div>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="py-10 md:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <SectionLabel index={2} label="EXPERIENCE" count={5} />
          <span className="bracket text-[10px] sm:text-xs">5 chapters</span>
        </div>
        <Reveal>
          <h3 className="text-section mt-3 max-w-3xl text-[var(--color-fg)]">
            Shipping product work with teams across{" "}
            <span className="italic-accent">finance</span>, commerce, and
            consumer platforms.
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 sm:mt-10">
            <Timeline />
          </div>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="py-10 md:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <SectionLabel index={3} label="APPROACH" count={5} />
          <span className="bracket text-[10px] sm:text-xs">5 steps</span>
        </div>
        <Reveal>
          <h3 className="text-section mt-3 max-w-3xl text-[var(--color-fg)]">
            How I take a product from{" "}
            <span className="italic-accent">zero</span> to one.
          </h3>
        </Reveal>

        <ol className="mt-8 space-y-6 sm:mt-10">
          {approachSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <li className="grid gap-2 border-t border-[var(--color-rule)] pt-5 sm:pt-6 md:grid-cols-[120px,1fr] md:gap-8">
                <div className="flex items-center gap-3">
                  <span className="bracket text-[10px] text-[var(--color-muted)] sm:text-xs">
                    STEP
                  </span>
                  <span className="wiggle font-display text-3xl text-[var(--color-accent-2)] sm:text-4xl">
                    {step.n}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-display leading-tight text-[var(--color-fg)] sm:text-display">
                    {step.title}
                  </h4>
                  <p className="mt-2 max-w-prose text-sm text-[var(--color-muted)] sm:text-base">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <hr className="hairline" />

      <section className="py-10 md:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <SectionLabel index={4} label="OFF-CLOCK" />
          <span className="bracket text-[10px] sm:text-xs">interests</span>
        </div>
        <Reveal>
          <h3 className="text-section mt-3 max-w-3xl text-[var(--color-fg)]">
            Things I do when I&apos;m not{" "}
            <span className="italic-accent">shipping</span>.
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2">
          {Object.entries(interestMap).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.05}>
              <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-card)] p-5 transition-colors hover:border-[var(--color-fg)]/40 sm:p-6">
                <p className="bracket mb-3 text-[10px] sm:text-xs">
                  [ {category.toUpperCase()} ]
                </p>
                <ul className="space-y-2 text-sm">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 text-[var(--color-fg)]"
                    >
                      <span aria-hidden className="text-[var(--color-accent-2)]">
                        ✦
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="dashed-frame relative mt-12 px-5 py-8 text-center sm:mt-16 sm:px-8 sm:py-10">
          <FloatingDecorations variant="minimal" />
          <AnimatedSquiggle className="mx-auto" />
          <p className="mt-4 text-section text-[var(--color-fg)]">
            Want to see more?
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:mt-6 sm:flex-row">
            <Link href="/" className="btn-pill-outline w-full sm:w-auto" data-cursor="hover">
              ← Works
            </Link>
            <Link href="/contact" className="btn-pill cta-pulse w-full sm:w-auto" data-cursor="hover">
              Say hello →
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-12 sm:mt-16">
          <div className="bracket mb-3 text-[10px] text-[var(--color-muted)] sm:text-xs">
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
    <div className="py-4 sm:py-6">
      <dt className="bracket text-[10px] text-[var(--color-muted)] sm:text-xs">
        {label}
      </dt>
      <dd className="mt-1 font-display text-3xl text-[var(--color-fg)] sm:text-4xl md:text-5xl">
        <CountUp value={value} suffix={suffix} />
      </dd>
    </div>
  );
}