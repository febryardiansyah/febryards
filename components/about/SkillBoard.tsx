import { skillGroups } from "@/data/skills";

export function SkillBoard() {
  return (
    <dl className="grid grid-cols-1 gap-x-10 gap-y-6 border-y border-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="border-t border-[var(--color-rule)] py-5 first:border-t-0 sm:py-6"
        >
          <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            {group.label}
          </dt>
          <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm text-[var(--color-fg)] sm:text-[15px]">
            {group.skills.map((s, i) => (
              <span key={s} className="flex items-baseline gap-3">
                <span>{s}</span>
                {i < group.skills.length - 1 ? (
                  <span aria-hidden className="text-[var(--color-rule)]">
                    /
                  </span>
                ) : null}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
