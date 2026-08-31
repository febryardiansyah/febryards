"use client";

import { useEffect, useRef } from "react";

/**
 * Top scroll progress bar — igma.im style.
 * Driven by requestAnimationFrame: the bar scales with scroll progress and
 * skews horizontally with scroll velocity, like it's being dragged by your
 * scrolling. Falls back to a plain width bar under reduced motion.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let lastY = window.scrollY;
    let raf = 0;

    const loop = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const scale = h > 0 ? Math.min(1, Math.max(0, y / h)) : 0;

      if (reduced) {
        bar.style.transform = `scaleX(${scale})`;
      } else {
        // Velocity = px per frame (60fps → ±80px/frame is a fast scroll).
        const speed = y - lastY;
        lastY = y;
        const skew = Math.max(-80, Math.min(80, speed));
        bar.style.transform = `scaleX(${scale}) skewX(${skew}deg)`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-2)] to-[var(--color-accent-3)] will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
