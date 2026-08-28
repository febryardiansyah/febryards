"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyHello() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/contact"
      aria-label="Say hello"
      className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="btn-pill glow">
        Say hello
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}