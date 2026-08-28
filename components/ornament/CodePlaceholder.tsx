type CodePlaceholderProps = {
  emoji?: string;
  label?: string;
  className?: string;
};

export function CodePlaceholder({
  emoji = "⌘",
  label = "Code preview",
  className,
}: CodePlaceholderProps) {
  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden rounded-2xl border border-dashed border-[var(--color-rule)] bg-[var(--color-card)] ${
        className ?? ""
      }`}
    >
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-fg) 1px, transparent 1px), linear-gradient(to bottom, var(--color-fg) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-2)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-3)]" />
        <span className="ml-3 font-mono text-[10px] text-[var(--color-muted)]">
          {label}
        </span>
      </div>

      <div className="absolute right-4 top-4">
        <span className="bracket text-[var(--color-muted)]">
          [ PLACEHOLDER ]
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span
            aria-hidden
            className="text-7xl opacity-80 wiggle"
            style={{ filter: "grayscale(0.2)" }}
          >
            {emoji}
          </span>
          <div className="flex flex-col items-center gap-1">
            <p className="bracket text-[var(--color-muted)]">
              no preview captured
            </p>
            <p className="font-mono text-xs text-[var(--color-muted)]">
              see the repo for the real thing
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] text-[var(--color-muted)]">
            {"// file not yet captured"}
          </span>
          <div className="h-1 w-32 overflow-hidden rounded-full bg-[var(--color-rule)]">
            <div className="h-full w-2/3 bg-[var(--color-accent)]" />
          </div>
        </div>
        <span
          aria-hidden
          className="font-mono text-[10px] text-[var(--color-accent-2)] blink"
        >
          ●
        </span>
      </div>
    </div>
  );
}