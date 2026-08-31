"use client";

import { useEffect, useState } from "react";

const tracks = [
  { artist: "Neck Deep", title: "In Bloom" },
  { artist: "Oasis", title: "Wonderwall" },
  { artist: "Simple Plan", title: "I'm Just a Kid" },
  { artist: "Neck Deep", title: "December" },
  { artist: "Oasis", title: "Don't Look Back in Anger" },
  { artist: "Simple Plan", title: "Welcome to My Life" },
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