import { WaveSquiggle } from "@/components/ornament/Ornaments";

export function AnimatedSquiggle({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="wave-svg flex w-max">
        <WaveSquiggle className={`h-4 w-24 ${color ?? "text-[var(--color-muted)]"}`} />
        <WaveSquiggle className={`h-4 w-24 ${color ?? "text-[var(--color-muted)]"}`} />
        <WaveSquiggle className={`h-4 w-24 ${color ?? "text-[var(--color-muted)]"}`} />
        <WaveSquiggle className={`h-4 w-24 ${color ?? "text-[var(--color-muted)]"}`} />
      </div>
    </div>
  );
}