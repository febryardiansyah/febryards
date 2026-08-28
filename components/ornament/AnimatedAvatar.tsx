"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function AnimatedAvatar({
  src,
  alt,
  size = 520,
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
    <div className="relative aspect-square w-full">
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          transform: `rotate(${tilt * 0.05}deg) scale(${1 + Math.sin((tilt * Math.PI) / 180) * 0.02})`,
          transition: "transform 1s ease-in-out",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full rounded-xl object-cover"
          unoptimized
          priority
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-[var(--color-rule)] ring-offset-2 ring-offset-[var(--color-card)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-2 h-4 w-4 rounded-full bg-[var(--color-accent)] twinkle"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-[var(--color-accent-2)] twinkle-2"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 bottom-2 font-mono text-[10px] text-[var(--color-muted)]"
      >
        frame_{String(Math.floor(tilt / 60)).padStart(2, "0")}
      </span>
    </div>
  );
}