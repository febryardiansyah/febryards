import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { StarBurst, WaveSquiggle } from "@/components/ornament/Ornaments";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Febry Ardiansyah — say hello, share an idea, or propose a collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-12">
      <section className="pt-12 pb-12 md:pt-20">
        <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
          <StarBurst className="h-4 w-4 text-[var(--color-accent)]" />
          <span className="bracket">[ 00 / CONTACT ]</span>
        </div>

        <Reveal>
          <h1 className="text-hero mt-6 text-[var(--color-fg)]">
            Let&apos;s <span className="italic-accent">build</span>
            <br />
            something.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-fg)] md:text-xl">
            Tell me about the product, the timeline, and what success looks
            like. I&apos;ll get back to you within a couple of days.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="grid gap-12 py-12 md:grid-cols-[1.5fr,1fr] md:py-16">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="space-y-8">
            <div>
              <p className="bracket">[ DIRECT ]</p>
              <ul className="mt-3 space-y-3 text-sm">
                <li>
                  <span className="block text-[var(--color-muted)]">Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-lg underline-offset-4 hover:underline"
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
              <p className="bracket">[ ELSEWHERE ]</p>
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

            <div className="dashed-frame px-5 py-5">
              <WaveSquiggle className="h-4 w-20 text-[var(--color-muted)]" />
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
    </div>
  );
}