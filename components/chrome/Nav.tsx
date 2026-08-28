"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MonogramMark } from "@/components/ornament/Monogram";

const links = [
  { href: "/", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[var(--color-rule)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-display text-lg text-[var(--color-fg)] sm:text-xl"
        >
          <MonogramMark className="h-7 w-7 shrink-0" />
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
                  className={`rounded-full px-2.5 py-1 text-xs transition-colors sm:px-3 sm:py-1.5 sm:text-sm ${
                    active
                      ? "bg-[var(--color-pill)] text-[var(--color-bg)]"
                      : "text-[var(--color-fg)] hover:bg-[var(--color-rule)]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-1 shrink-0">
            <a
              href="https://drive.google.com/file/d/1CC8hQ_k18P-dIc7tBLFDbbB0wguUo4jU/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-rule)] px-3 py-1 text-xs transition-colors hover:border-[var(--color-fg)] sm:px-4 sm:py-1.5 sm:text-sm"
            >
              CV →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}