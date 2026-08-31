"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function AnimatedAvatar({
  src,
  alt,
  size = 512,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  const [tilt, setTilt] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const id = setInterval(() => {
      setTilt((t) => (t + 1) % 360);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[180px]">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          transform: `rotate(${tilt * 0.04}deg) scale(${1 + Math.sin((tilt * Math.PI) / 180) * 0.015})`,
          transition: "transform 1s ease-in-out",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full rounded-full object-cover"
          unoptimized
          priority
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[var(--color-rule)]"
        />
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--color-card)] bg-[var(--color-accent)] twinkle"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-bg)]" />
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 -left-1 h-3 w-3 rounded-full border-2 border-[var(--color-card)] bg-[var(--color-accent-2)] twinkle-2"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-5 right-2 font-mono text-[10px] tracking-wide text-[var(--color-muted)]"
      >
        frame_{String(Math.floor(tilt / 60)).padStart(2, "0")}
      </span>
    </div>
  );
}
