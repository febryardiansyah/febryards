"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CyclingThumbProps = {
  frames: [string, string, string];
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function CyclingThumb({
  frames,
  alt,
  width,
  height,
  className,
}: CyclingThumbProps) {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!autoPlay) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % frames.length);
    }, 1800);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, frames.length]);

  return (
    <div
      className={`group/thumb relative overflow-hidden ${className ?? ""}`}
      style={{ aspectRatio: `${width} / ${height}` }}
      onMouseEnter={() => setAutoPlay(true)}
      onMouseLeave={() => setAutoPlay(false)}
    >
      {frames.map((src, i) => (
        <div
          key={src + i}
          data-i={i}
          className="cycling-frame absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={i === 0 ? alt : ""}
            width={width}
            height={height}
            className="h-full w-full object-cover transition-transform duration-700 group-hover/thumb:scale-[1.03]"
            unoptimized
          />
        </div>
      ))}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex gap-1.5 p-3 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100"
        aria-hidden
      >
        {frames.map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i === active ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}