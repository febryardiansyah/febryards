import Link from "next/link";

export function StatusBar() {
  return (
    <div className="w-full border-b border-[var(--color-rule)] bg-[var(--color-bg)]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs font-mono">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <StatusDot />
          <span className="text-[var(--color-fg)]">
            Open to interesting collaborations
          </span>
          <span aria-hidden className="text-[var(--color-accent-2)]">✦</span>
        </Link>
        <span className="hidden text-[var(--color-muted)] sm:inline">
          Based in Jakarta · UTC+7
        </span>
      </div>
    </div>
  );
}

function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-2)] opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-2)]" />
    </span>
  );
}