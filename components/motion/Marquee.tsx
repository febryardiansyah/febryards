import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function Marquee({
  children,
  speed = "normal",
  reverse = false,
  pauseOnHover = true,
  className = "",
  ariaLabel,
}: MarqueeProps) {
  const speedClass =
    speed === "slow" ? "marquee-slow" : speed === "fast" ? "marquee-fast" : "";
  const reverseClass = reverse ? "marquee-reverse" : "";
  const pauseClass = pauseOnHover ? "marquee-pause" : "";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="marquee"
      aria-label={ariaLabel}
    >
      <div
        className={`marquee ${speedClass} ${reverseClass} ${pauseClass}`}
        style={{ ["--marquee-duration" as string]: durationFor(speed) }}
      >
        <span className="mr-12 inline-flex shrink-0">{children}</span>
        <span className="mr-12 inline-flex shrink-0" aria-hidden="true">
          {children}
        </span>
      </div>
    </div>
  );
}

function durationFor(speed: "slow" | "normal" | "fast") {
  if (speed === "slow") return "60s";
  if (speed === "fast") return "18s";
  return "28s";
}