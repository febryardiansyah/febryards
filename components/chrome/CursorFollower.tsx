"use client";

import { useEffect, useRef, useState } from "react";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let rx = 0;
    let ry = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (hidden) setHidden(false);
    };

    const leave = () => setHidden(true);

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], [data-cursor='hover']",
      );
      setActive(Boolean(interactive));
    };

    const tick = () => {
      rx += (tx - rx) * 0.35;
      ry += (ty - ry) * 0.35;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, [hidden]);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[60] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-fg)] transition-opacity duration-200 ${
          hidden ? "opacity-0" : "opacity-100"
        } ${active ? "scale-0" : "scale-100"}`}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[60] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,opacity] duration-200 ${
          hidden ? "opacity-0" : "opacity-100"
        } ${active ? "h-14 w-14 border-[var(--color-accent-2)] bg-[var(--color-accent-2)]/10" : "border-[var(--color-fg)]/40"}`}
      />
    </>
  );
}