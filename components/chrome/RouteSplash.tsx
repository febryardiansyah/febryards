"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { MonogramMark } from "@/components/ornament/Monogram";

const EASE = [0.87, 0, 0.13, 1] as const;

type Phase = "idle" | "cover" | "wipe";

/**
 * igma-style route transition splash.
 * On every pathname change: an ink curtain drops from the top,
 * holds a beat, then wipes back up to reveal the new page.
 * Skipped entirely when the user prefers reduced motion.
 */
export function RouteSplash() {
  const pathname = usePathname();
  const prev = useRef(pathname);
  const [phase, setPhase] = useState<Phase>("idle");
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      prev.current = pathname;
      return;
    }
    if (pathname === prev.current) return;
    prev.current = pathname;
    setPhase("cover");
  }, [pathname, reduce]);

  if (phase === "idle") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[var(--color-ink)]"
      initial={{ scaleY: 0 }}
      animate={phase === "cover" ? { scaleY: 1 } : { scaleY: 0 }}
      transition={
        phase === "cover"
          ? { duration: 0.4, ease: EASE }
          : { delay: 0.3, duration: 0.55, ease: EASE }
      }
      style={{ transformOrigin: "top" }}
      onAnimationComplete={() => {
        if (phase === "cover") setPhase("wipe");
        else if (phase === "wipe") setPhase("idle");
      }}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-4">
        <MonogramMark className="h-14 w-14 sm:h-16 sm:w-16" />
        <span className="font-mono text-xs tracking-widest text-[var(--color-bg)]/60">
          febryards.xyz
        </span>
      </div>
    </motion.div>
  );
}
