export function MonogramMark({ className }: { className?: string }) {
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
