import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { SkillBoard } from "@/components/about/SkillBoard";
import { Timeline } from "@/components/about/Timeline";
import { StarBurst, WaveSquiggle, Monogram } from "@/components/ornament/Ornaments";
import { profile, approachSteps, interests as interestMap } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Febry Ardiansyah — mobile apps & frontend engineer based in Jakarta. Skills, experience, and approach.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-12">
      <section className="pt-12 pb-12 md:pt-20">
        <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
          <StarBurst className="h-4 w-4 text-[var(--color-accent)]" />
          <span className="bracket">[ 00 / ABOUT ]</span>
        </div>

        <Reveal>
          <h1 className="text-hero mt-6 text-[var(--color-fg)]">
            Hi, I&apos;m <span className="italic-accent">Febry</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-fg)] md:text-xl">
            {profile.longBio}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
            Mobile apps developer at <strong>{profile.location}</strong>. I
            care about shipping software that survives contact with real
            users — accessible, reliable, and pleasant to maintain.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-card)] p-4 glow md:p-6">
            <div className="grid items-center gap-8 md:grid-cols-[260px,1fr]">
              <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-xl bg-[var(--color-ink)] md:mx-0 md:w-full">
                <Image
                  src={profile.avatarUrl}
                  alt={`${profile.name} portrait`}
                  width={520}
                  height={520}
                  className="h-full w-full object-cover"
                  unoptimized
                  priority
                />
                <Monogram
                  className="absolute -bottom-6 -right-6 h-16 w-16 opacity-30"
                  withDot={false}
                />
              </div>
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
                      className="underline-offset-4 hover:underline"
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
          <div className="mt-12">
            <Marquee speed="fast" reverse>
              <span className="text-section px-4 text-[var(--color-fg)]">
                Mobile <span className="italic-accent">✦</span> Frontend{" "}
                <span className="italic-accent">✦</span> Architecture{" "}
                <span className="italic-accent">✦</span> DX{" "}
                <span className="italic-accent">✦</span>
              </span>
            </Marquee>
          </div>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="bracket">[ 01 / SKILLBOARD ]</h2>
          <span className="bracket">{profile.role}</span>
        </div>
        <Reveal>
          <h3 className="text-section mt-3 max-w-3xl text-[var(--color-fg)]">
            Tools that keep me <span className="italic-accent">nimble</span>{" "}
            across mobile and web.
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <SkillBoard />
          </div>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="bracket">[ 02 / EXPERIENCE ]</h2>
          <span className="bracket">5 chapters</span>
        </div>
        <Reveal>
          <h3 className="text-section mt-3 max-w-3xl text-[var(--color-fg)]">
            Shipping product work with teams across{" "}
            <span className="italic-accent">finance</span>, commerce, and
            consumer platforms.
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <Timeline />
          </div>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="bracket">[ 03 / APPROACH ]</h2>
          <span className="bracket">5 steps</span>
        </div>
        <Reveal>
          <h3 className="text-section mt-3 max-w-3xl text-[var(--color-fg)]">
            How I take a product from{" "}
            <span className="italic-accent">zero</span> to one.
          </h3>
        </Reveal>

        <ol className="mt-10 space-y-6">
          {approachSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <li className="grid gap-2 border-t border-[var(--color-rule)] pt-6 md:grid-cols-[120px,1fr] md:gap-8">
                <div className="flex items-center gap-3">
                  <span className="bracket text-[var(--color-muted)]">
                    STEP
                  </span>
                  <span className="font-display text-4xl text-[var(--color-accent-2)]">
                    {step.n}
                  </span>
                </div>
                <div>
                  <h4 className="text-display text-[var(--color-fg)]">
                    {step.title}
                  </h4>
                  <p className="mt-2 max-w-prose text-[var(--color-muted)]">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <hr className="hairline" />

      <section className="py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="bracket">[ 04 / OFF-CLOCK ]</h2>
          <span className="bracket">interests</span>
        </div>
        <Reveal>
          <h3 className="text-section mt-3 max-w-3xl text-[var(--color-fg)]">
            Things I do when I&apos;m not{" "}
            <span className="italic-accent">shipping</span>.
          </h3>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {Object.entries(interestMap).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.05}>
              <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-card)] p-6">
                <p className="bracket mb-3">[ {category.toUpperCase()} ]</p>
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

      <section className="dashed-frame mt-16 px-8 py-10 text-center">
        <WaveSquiggle className="mx-auto h-4 w-24 text-[var(--color-muted)]" />
        <p className="mt-4 text-section text-[var(--color-fg)]">
          Want to see more?
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-pill-outline">
            ← Works
          </Link>
          <Link href="/contact" className="btn-pill">
            Say hello →
          </Link>
        </div>
      </section>
    </div>
  );
}