"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[var(--color-rule)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl text-[var(--color-fg)]"
        >
          <MonogramMark className="h-7 w-7" />
          <span className="hidden sm:inline">febry/</span>
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/" || pathname.startsWith("/works")
                : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-[var(--color-ink)] text-[var(--color-bg)]"
                      : "text-[var(--color-fg)] hover:bg-[var(--color-rule)]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-1">
            <a
              href="https://drive.google.com/file/d/1CC8hQ_k18P-dIc7tBLFDbbB0wguUo4jU/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-outline text-sm"
            >
              CV →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function MonogramMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="7"
        fill="var(--color-ink)"
      />
      <path
        d="M9 23 V9 H14 L20 19 V9 H23 V23 H18 L12 13 V23 Z"
        fill="var(--color-bg)"
      />
      <circle cx="24.5" cy="9.5" r="2" fill="var(--color-accent)" />
    </svg>
  );
}