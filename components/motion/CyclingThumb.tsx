"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % frames.length);
    }, 2000);
    return () => clearInterval(id);
  }, [frames.length]);

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {frames.map((src, i) => (
        <div
          key={src + i}
          data-i={i}
          className="cycling-frame absolute inset-0"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={i === 0 ? alt : ""}
            width={width}
            height={height}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}