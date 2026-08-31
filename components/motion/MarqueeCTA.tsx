"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

type MarqueeCTAProps = {
  text: string;
  href: string;
  ariaLabel?: string;
  variant?: "primary" | "outline";
  speed?: "slow" | "normal" | "fast";
  className?: string;
};

export function MarqueeCTA({
  text,
  href,
  ariaLabel,
  variant = "primary",
  speed = "normal",
  className = "",
}: MarqueeCTAProps) {
  const pillClass =
    variant === "primary" ? "btn-pill" : "btn-pill-outline";

  const speedClass =
    speed === "slow"
      ? "marquee-slow"
      : speed === "fast"
      ? "marquee-fast"
      : "";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="marquee"
      aria-label={ariaLabel}
    >
      <div
        className={`marquee marquee-pause ${speedClass}`}
        style={{ ["--marquee-duration" as string]: durationForCTA(speed) }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <Link
            key={i}
            href={href}
            aria-label={ariaLabel}
            aria-hidden={i > 0 ? "true" : undefined}
            tabIndex={i > 0 ? -1 : undefined}
            className={`${pillClass} mr-3 cta-pulse shrink-0 whitespace-nowrap px-4 py-2 text-xs sm:mr-4 sm:px-5 sm:py-2.5 sm:text-sm ${i === 0 ? "" : ""}`}
            data-cursor="hover"
          >
            <span>{text}</span>
            <span aria-hidden>✦</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function durationForCTA(speed: "slow" | "normal" | "fast") {
  if (speed === "slow") return "40s";
  if (speed === "fast") return "14s";
  return "24s";
}

export function MarqueeText({
  children,
  speed = "normal",
  reverse = false,
  className = "",
  itemClassName = "",
  separator,
  interactive = false,
}: {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
  interactive?: boolean;
}) {
  if (interactive) {
    return (
      <InteractiveMarquee
        reverse={reverse}
        className={className}
        itemClassName={itemClassName}
        separator={separator}
      >
        {children}
      </InteractiveMarquee>
    );
  }

  const speedClass =
    speed === "slow"
      ? "marquee-slow"
      : speed === "fast"
      ? "marquee-fast"
      : "";
  return (
    <div className={`relative overflow-hidden ${className}`} role="marquee">
      <div
        className={`marquee marquee-pause ${speedClass} ${reverse ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: durationFor(speed) }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={`mr-6 inline-flex shrink-0 sm:mr-8 ${itemClassName}`}>
            <span aria-hidden={i > 0 ? "true" : undefined}>{children}</span>
            {separator && <span className="ml-6 sm:ml-8">{separator}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Igma-style interactive ticker: the marquee follows the cursor's X position
 * with lerp smoothing, and skews proportionally to mouse velocity. Falls back
 * to gentle auto-scroll when the cursor leaves or on touch/reduced-motion.
 */
function InteractiveMarquee({
  children,
  reverse = false,
  className = "",
  itemClassName = "",
  separator,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [copies, setCopies] = useState(6);
  const rafRef = useRef(0);
  const state = useRef({
    step: 0,
    skew: 0,
    targetStep: 0,
    lastX: 0,
    lastT: 0,
    speedX: 0,
    hovering: false,
  });

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    // Render enough copies so the track always covers container + cursor range.
    const measure = () => {
      const first = track.children[0] as HTMLElement | undefined;
      if (!first) return;
      const textW = first.getBoundingClientRect().width || 1;
      const needed = Math.ceil((container.clientWidth + window.innerWidth) / textW) + 2;
      setCopies((c) => (c === needed ? c : needed));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    window.addEventListener("resize", measure);

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const now = performance.now();
      const dt = now - state.current.lastT;
      if (dt > 0) {
        state.current.speedX = ((e.clientX - state.current.lastX) / dt) * 1000;
      }
      state.current.lastX = e.clientX;
      state.current.lastT = now;
      state.current.hovering = true;
      state.current.targetStep = e.clientX - rect.left;
    };

    const onLeave = () => {
      state.current.hovering = false;
      state.current.speedX = 0;
    };

    const loop = () => {
      const s = state.current;
      const half = track.scrollWidth / 2;
      if (s.hovering) {
        s.step += (s.targetStep - s.step) * 0.08;
        const skewTarget = Math.max(-32, Math.min(32, s.speedX / 180));
        s.skew += (skewTarget - s.skew) * 0.075;
      } else {
        s.skew *= 0.92; // settle back
        s.step += reverse ? -1.6 : 1.6;
        if (s.step >= half) s.step -= half;
        if (s.step < 0) s.step += half;
      }
      track.style.transform = `translate3d(${-s.step}px, 0, 0) skewX(${s.skew.toFixed(2)}deg)`;
      rafRef.current = requestAnimationFrame(loop);
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reverse]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      role="marquee"
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <span key={i} className={`mr-6 inline-flex shrink-0 sm:mr-8 ${itemClassName}`}>
            <span aria-hidden={i > 0 ? "true" : undefined}>{children}</span>
            {separator && <span className="ml-6 sm:ml-8">{separator}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function durationFor(speed: "slow" | "normal" | "fast") {
  if (speed === "slow") return "50s";
  if (speed === "fast") return "16s";
  return "30s";
}