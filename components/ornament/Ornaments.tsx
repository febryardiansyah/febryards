export function Monogram({
  className,
  withDot = true,
}: {
  className?: string;
  withDot?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Febry monogram"
    >
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="var(--color-ink)"
      />
      <path
        d="M16 50 V14 H25 L37 38 V14 H46 V50 H37 L25 26 V50 Z"
        fill="var(--color-bg)"
      />
      {withDot && <circle cx="50" cy="14" r="4" fill="var(--color-accent)" />}
    </svg>
  );
}

export function StarBurst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M16 0 L18.5 13.5 L32 16 L18.5 18.5 L16 32 L13.5 18.5 L0 16 L13.5 13.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CornerBracket({
  position = "tl",
  className,
}: {
  position?: "tl" | "tr" | "bl" | "br";
  className?: string;
}) {
  const transforms: Record<string, string> = {
    tl: "",
    tr: "scaleX(-1)",
    bl: "scaleY(-1)",
    br: "scale(-1, -1)",
  };
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      style={{ transform: transforms[position] }}
      aria-hidden
    >
      <path
        d="M0 6 V0 H6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function FrameBracket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <path
        d="M2 8 V78 H118 V8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M2 14 L8 8 M118 14 L112 8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function WaveSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 16" className={className} aria-hidden>
      <path
        d="M0 8 Q10 0 20 8 T40 8 T60 8 T80 8 T100 8 T120 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function SkillChip({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "accent" | "coral" | "ink";
}) {
  const cls =
    variant === "accent"
      ? "sticker sticker-accent"
      : variant === "coral"
      ? "sticker sticker-coral"
      : variant === "ink"
      ? "sticker sticker-ink"
      : "sticker";
  return <span className={cls}>{label}</span>;
}