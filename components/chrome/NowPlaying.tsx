"use client";

import { useEffect, useState } from "react";

const tracks = [
  { artist: "Tame Impala", title: "The Less I Know The Better" },
  { artist: "Mac DeMarco", title: "Chamber of Reflection" },
  { artist: "Khruangbin", title: "Time (You and I)" },
  { artist: "Men I Trust", title: "Show Me How" },
  { artist: "Lamp", title: "さち子" },
  { artist: "Yasuha", title: "Flyday Chinatown" },
];

export function NowPlaying() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % tracks.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const track = tracks[idx];

  return (
    <span
      className="hidden items-center gap-2 md:inline-flex"
      aria-label={`Now playing ${track.title} by ${track.artist}`}
    >
      <PlayingBars />
      <span className="text-[var(--color-muted)]">Now playing:</span>
      <span className="text-[var(--color-fg)]">
        {track.title}
        <span className="text-[var(--color-muted)]"> · {track.artist}</span>
      </span>
    </span>
  );
}

function PlayingBars() {
  return (
    <span aria-hidden className="inline-flex items-end gap-[2px] h-3">
      <span className="block w-[2px] bg-[var(--color-accent-2)] playing-bar-1" />
      <span className="block w-[2px] bg-[var(--color-accent-2)] playing-bar-2" />
      <span className="block w-[2px] bg-[var(--color-accent-2)] playing-bar-3" />
      <span className="block w-[2px] bg-[var(--color-accent-2)] playing-bar-4" />
    </span>
  );
}