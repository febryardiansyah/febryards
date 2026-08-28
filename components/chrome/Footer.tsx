"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { MarqueeText } from "@/components/motion/MarqueeCTA";

export function Footer() {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = d.getHours().toString().padStart(2, "0");
      const mm = d.getMinutes().toString().padStart(2, "0");
      const ss = d.getSeconds().toString().padStart(2, "0");
      setNow(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-24 border-t border-[var(--color-rule)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-section text-[var(--color-fg)]">
              Say <span className="italic-accent">hello</span>.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-flex items-center gap-2 break-all text-lg underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <p className="bracket mb-3">[ 02 / NAVIGATE ]</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-70">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-70">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-70">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="bracket mb-3">[ 03 / ELSEWHERE ]</p>
            <ul className="space-y-2 text-sm">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-70"
                  >
                    {s.label} {s.handle} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden border-y border-[var(--color-rule)] py-3">
          <MarqueeText
            speed="slow"
            className="text-sm font-mono text-[var(--color-muted)]"
            itemClassName="text-[var(--color-fg)]"
            separator={<span className="text-[var(--color-accent-2)]">✦</span>}
          >
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)] twinkle" />
                Online
              </span>
              <span className="italic-accent">—</span>
              <span>Thoughts racing, pixels aligning</span>
            </span>
          </MarqueeText>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs font-mono text-[var(--color-muted)] sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Febry Ardiansyah — Built with Next.js
            &amp; Tailwind.
          </span>
          <span className="flex items-center gap-2">
            <span className="blink">●</span>
            <span>.beat time</span>
            <span aria-hidden>·</span>
            <span suppressHydrationWarning>{now || "00:00:00"}</span>
            <span aria-hidden>·</span>
            <span>WIB</span>
          </span>
        </div>
      </div>
    </footer>
  );
}