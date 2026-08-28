"use client";

import { useEffect, useState } from "react";

export function SectionLabel({
  index,
  label,
  count,
}: {
  index: number;
  label: string;
  count?: number;
}) {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 1200);
    return () => clearInterval(id);
  }, []);

  const idx = String(index).padStart(2, "0");
  const total = count !== undefined ? String(count).padStart(2, "0") : "••";

  return (
    <span className="bracket inline-flex items-center gap-3 text-[var(--color-muted)]">
      <span aria-hidden className="inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-2)]" />
      <span>[ {idx} / {total} ]</span>
      <span aria-hidden className={`opacity-50 ${blink ? "" : "opacity-100"}`}>
        ·
      </span>
      <span className="text-[var(--color-fg)]">{label}</span>
    </span>
  );
}