import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/motion/SectionLabel";
import { MarqueeCTA } from "@/components/motion/MarqueeCTA";
import { AnimatedSquiggle } from "@/components/motion/AnimatedSquiggle";
import { ContactForm } from "@/components/contact/ContactForm";
import { StarBurst } from "@/components/ornament/Ornaments";
import { FloatingDecorations } from "@/components/ornament/FloatingDecorations";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Febry Ardiansyah — say hello, share an idea, or propose a collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl overflow-x-hidden px-4 pb-12 sm:px-6">
      <section className="relative overflow-hidden pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-20 md:pb-12">
        <FloatingDecorations variant="hero" />

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--color-muted)] sm:gap-3 sm:text-sm">
          <StarBurst className="h-4 w-4 text-[var(--color-accent)] twinkle" />
          <SectionLabel index={0} label="CONTACT" />
          <span aria-hidden>/</span>
          <span className="bracket text-[10px] text-[var(--color-accent-2)] sm:text-xs">
            ● replies within 48h
          </span>
        </div>

        <Reveal>
          <h1 className="mt-4 text-5xl leading-[0.95] tracking-tight text-[var(--color-fg)] sm:mt-5 sm:text-6xl md:mt-6 md:text-7xl lg:text-8xl">
            Let&apos;s <span className="italic-accent">build</span>{" "}
            <br className="hidden sm:inline" />
            something.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-fg)] sm:mt-5 sm:text-base md:mt-6 md:text-lg lg:text-xl">
            Tell me about the product, the timeline, and what success looks
            like. I&apos;ll get back to you within a couple of days.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 sm:mt-8">
            <MarqueeCTA
              text="Open to interesting collaborations"
              href="#contact-form"
              ariaLabel="Open contact form"
              speed="normal"
            />
          </div>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section
        id="contact-form"
        className="grid gap-8 py-8 md:grid-cols-[1.5fr,1fr] md:gap-12 md:py-16"
      >
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="space-y-6 sm:space-y-8">
            <div>
              <p className="bracket text-[10px] sm:text-xs">[ DIRECT ]</p>
              <ul className="mt-3 space-y-3 text-sm">
                <li>
                  <span className="block text-[var(--color-muted)]">Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all text-base underline-offset-4 hover:underline sm:text-lg"
                  >
                    {profile.email}
                  </a>
                </li>
                <li>
                  <span className="block text-[var(--color-muted)]">
                    Location
                  </span>
                  <span>{profile.location}</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="bracket mb-3 text-[10px] sm:text-xs">[ ELSEWHERE ]</p>
              <ul className="mt-3 space-y-2 text-sm">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {s.label} <span className="text-[var(--color-muted)]">— {s.handle}</span> →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dashed-frame px-4 py-4 sm:px-5 sm:py-5">
              <AnimatedSquiggle className="text-[var(--color-muted)]" />
              <p className="mt-3 text-sm text-[var(--color-fg)]">
                For full-time opportunities, freelance collaborations, or
                technical consulting — just send a clear brief and I&apos;ll
                take it from there.
              </p>
              <Link href="/about" className="mt-4 inline-block text-sm underline-offset-4 hover:underline">
                Read about my approach →
              </Link>
            </div>
          </aside>
        </Reveal>
      </section>

      <Reveal>
        <section className="mt-8 sm:mt-12">
          <div className="bracket mb-3 text-[10px] text-[var(--color-muted)] sm:text-xs">
            [ CTA · ALWAYS ON ]
          </div>
          <MarqueeCTA
            text="Currently shipping · reply within 48h · open to side quests"
            href="#contact-form"
            ariaLabel="Open contact form"
            speed="slow"
            variant="primary"
          />
        </section>
      </Reveal>
    </div>
  );
}