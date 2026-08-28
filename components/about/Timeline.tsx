import type { Experience } from "@/data/experience";
import { experience } from "@/data/experience";

export function Timeline() {
  return (
    <ol className="relative space-y-12 border-l border-dashed border-[var(--color-rule)] pl-8">
      {experience.map((item) => (
        <ExperienceItem key={`${item.company}-${item.period}`} item={item} />
      ))}
    </ol>
  );
}

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <li className="relative">
      <span
        aria-hidden
        className={`absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full border-2 ${
          item.current
            ? "border-[var(--color-accent-2)] bg-[var(--color-accent-2)]"
            : "border-[var(--color-muted)] bg-[var(--color-bg)]"
        }`}
      />
      <div className="flex flex-wrap items-baseline gap-x-4">
        <h3 className="text-display text-[var(--color-fg)]">{item.role}</h3>
        {item.current && (
          <span className="sticker-coral">Currently shipping</span>
        )}
      </div>
      <p className="mt-1 font-mono text-sm text-[var(--color-muted)]">
        {item.company} · {item.period} · {item.location}
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-fg)]/85">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden className="text-[var(--color-accent-2)]">
              ✦
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.stack.map((s) => (
          <span key={s} className="sticker">
            {s}
          </span>
        ))}
      </div>
    </li>
  );
}