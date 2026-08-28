"use client";

import { useCallback, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Works", note: "selected projects" },
  { href: "/about", label: "About", note: "bio & stack" },
  { href: "/contact", label: "Contact", note: "say hello" },
];

const EASE = [0.87, 0, 0.13, 1] as const;

export function NavSplash({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const handleNav = useCallback(() => {
    // let the link navigate; curtain exit covers the swap
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          initial={reduce ? { opacity: 0 } : { scaleY: 0 }}
          animate={reduce ? { opacity: 1 } : { scaleY: 1 }}
          exit={reduce ? { opacity: 0 } : { scaleY: 0 }}
          transition={{ duration: reduce ? 0.15 : 0.55, ease: EASE }}
          style={{ transformOrigin: "top" }}
        >
          <div className="flex h-full flex-col bg-[var(--color-ink)] text-[var(--color-bg)]">
            {/* top bar */}
            <div className="flex items-center justify-between px-6 py-4 sm:px-10">
              <span className="font-mono text-xs tracking-widest text-[var(--color-bg)]/50">
                [ NAVIGATION ]
              </span>
              <button
                onClick={onClose}
                className="font-mono text-xs tracking-widest text-[var(--color-bg)]/70 transition-colors hover:text-[var(--color-bg)]"
                aria-label="Close navigation"
              >
                [ CLOSE ✕ ]
              </button>
            </div>

            {/* staggered links */}
            <motion.div
              className="flex flex-1 flex-col items-center justify-center gap-2 sm:gap-4"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.09, delayChildren: reduce ? 0 : 0.35 } },
              }}
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  variants={{
                    hidden: reduce
                      ? { opacity: 0 }
                      : { opacity: 0, y: 30 },
                    show: reduce
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: reduce ? 0.15 : 0.5, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    onClick={handleNav}
                    className="group flex items-baseline gap-4 sm:gap-6"
                    data-cursor="hover"
                  >
                    <span className="font-mono text-xs text-[var(--color-accent)]">
                      0{i + 1}
                    </span>
                    <span className="font-display text-5xl leading-tight text-[var(--color-bg)] transition-transform duration-300 group-hover:translate-x-2 sm:text-7xl">
                      {l.label}
                    </span>
                    <span className="hidden font-mono text-xs text-[var(--color-bg)]/40 sm:inline">
                      {l.note}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* footer */}
            <motion.div
              className="flex flex-col gap-2 px-6 pb-8 sm:flex-row sm:items-end sm:justify-between sm:px-10"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : 0.6, ease: EASE }}
            >
              <p className="font-mono text-xs text-[var(--color-bg)]/50">
                febryards.xyz — open to interesting collaborations ✦
              </p>
              <div className="flex gap-4 font-mono text-xs text-[var(--color-bg)]/50">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[var(--color-accent)]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
