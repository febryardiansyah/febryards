"use client";

import Link from "next/link";
import type { ReactNode } from "react";

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
            className={`${pillClass} mr-4 cta-pulse shrink-0`}
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
}: {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
}) {
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
          <span key={i} className={`mr-8 inline-flex shrink-0 ${itemClassName}`}>
            <span aria-hidden={i > 0 ? "true" : undefined}>{children}</span>
            {separator && <span className="ml-8">{separator}</span>}
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