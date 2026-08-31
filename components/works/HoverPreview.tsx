"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Floating image preview that follows the cursor — the igma.im signature move.
 *
 * Listens for `portfolio:preview` / `portfolio:preview-hide` custom events
 * dispatched by <PreviewTrigger>. The preview lerps toward the cursor with
 * easing instead of snapping, so it glides. Desktop only (hover-based).
 */
export function HoverPreview() {
  const [src, setSrc] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const srcRef = useRef<string | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const shown = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ease = reduced ? 1 : 0.09;

    const loop = () => {
      const el = wrapRef.current;
      if (el && srcRef.current) {
        current.current.x += (target.current.x - current.current.x) * ease;
        current.current.y += (target.current.y - current.current.y) * ease;
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        // Offset right of the cursor, clamped to the viewport.
        let x = current.current.x + 28;
        let y = current.current.y - h - 28;
        x = Math.max(12, Math.min(x, window.innerWidth - w - 12));
        y = Math.max(12, Math.min(y, window.innerHeight - h - 12));
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    const onShow = (e: Event) => {
      const d = (e as CustomEvent<{ src: string; x: number; y: number }>).detail;
      if (!d?.src) return;
      if (!shown.current) {
        // Jump straight to the cursor on first show — no flying in from a corner.
        current.current = { x: d.x, y: d.y };
        shown.current = true;
      }
      target.current = { x: d.x, y: d.y };
      srcRef.current = d.src;
      setSrc(d.src);
    };

    const onHide = () => {
      srcRef.current = null;
      shown.current = false;
      setSrc(null);
    };

    window.addEventListener("portfolio:preview", onShow);
    window.addEventListener("portfolio:preview-hide", onHide);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("portfolio:preview", onShow);
      window.removeEventListener("portfolio:preview-hide", onHide);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!src) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden will-change-transform md:block"
      style={{ width: 340, transform: "translate3d(0,0,0)" }}
    >
      <div className="glow relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-rule)] bg-[var(--color-card)] shadow-2xl">
        <Image
          src={src}
          alt=""
          fill
          unoptimized
          sizes="340px"
          className="object-cover"
          draggable={false}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10"
        />
      </div>
    </div>
  );
}
