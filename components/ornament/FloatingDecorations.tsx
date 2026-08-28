import { StarBurst } from "@/components/ornament/Ornaments";

type FloatingDecorationsProps = {
  variant?: "hero" | "section" | "minimal";
};

export function FloatingDecorations({
  variant = "section",
}: FloatingDecorationsProps) {
  if (variant === "minimal") {
    return (
      <>
        <Star
          className="drift-1 twinkle absolute left-[8%] top-[18%] h-4 w-4 text-[var(--color-accent)]"
        />
        <Star
          className="drift-2 twinkle-2 absolute right-[12%] top-[24%] h-3 w-3 text-[var(--color-accent-2)]"
        />
        <Star
          className="drift-3 twinkle-3 absolute left-[15%] bottom-[20%] h-5 w-5 text-[var(--color-accent-3)]"
        />
      </>
    );
  }

  if (variant === "hero") {
    return (
      <>
        <Star
          className="drift-1 twinkle absolute left-[4%] top-[10%] h-5 w-5 text-[var(--color-accent)]"
        />
        <Star
          className="drift-2 twinkle-2 absolute right-[8%] top-[16%] h-6 w-6 text-[var(--color-accent-2)]"
        />
        <Star
          className="drift-3 twinkle-3 absolute left-[6%] bottom-[18%] h-4 w-4 text-[var(--color-accent-3)]"
        />
        <Star
          className="drift-2 twinkle absolute right-[14%] bottom-[12%] h-3 w-3 text-[var(--color-accent)]"
        />
        <Cloud
          className="drift-1 absolute left-[55%] top-[6%] h-10 w-16 text-[var(--color-muted)] opacity-40"
        />
        <Cloud
          className="drift-3 absolute right-[35%] bottom-[6%] h-8 w-12 text-[var(--color-muted)] opacity-30"
        />
      </>
    );
  }

  return (
    <>
      <Star
        className="drift-1 twinkle absolute right-[6%] top-[10%] h-4 w-4 text-[var(--color-accent)]"
      />
      <Star
        className="drift-2 twinkle-2 absolute left-[4%] bottom-[14%] h-5 w-5 text-[var(--color-accent-2)]"
      />
      <Star
        className="drift-3 twinkle-3 absolute right-[10%] bottom-[8%] h-3 w-3 text-[var(--color-accent-3)]"
      />
    </>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <span aria-hidden className={className}>
      <StarBurst className="h-full w-full" />
    </span>
  );
}

function Cloud({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 32"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M14 24 Q4 24 4 16 Q4 8 14 8 Q16 0 26 0 Q40 0 42 10 Q56 8 56 18 Q60 24 52 26 L18 26 Q14 26 14 24 Z" />
    </svg>
  );
}