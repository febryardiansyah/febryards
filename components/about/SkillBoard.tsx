import { skillGroups } from "@/data/skills";
import { CornerBracket, SkillChip } from "@/components/ornament/Ornaments";

export function SkillBoard() {
  return (
    <section className="dashed-frame relative px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
      <CornerBracket
        position="tl"
        className="absolute left-2 top-2 h-4 w-4 text-[var(--color-muted)]"
      />
      <CornerBracket
        position="tr"
        className="absolute right-2 top-2 h-4 w-4 text-[var(--color-muted)]"
      />
      <CornerBracket
        position="bl"
        className="absolute bottom-2 left-2 h-4 w-4 text-[var(--color-muted)]"
      />
      <CornerBracket
        position="br"
        className="absolute bottom-2 right-2 h-4 w-4 text-[var(--color-muted)]"
      />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <p className="bracket text-[10px] sm:text-xs">
          [ SKILLBOARD · LV 9 / 9 YRS XP ]
        </p>
        <p className="bracket hidden text-xs md:block">HP ∞ · MP ∞</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {skillGroups.map((group, idx) => (
          <div
            key={group.label}
            className="relative rounded-lg border border-dashed border-[var(--color-rule)] p-4 sm:p-5"
          >
            <p className="bracket mb-3 text-[var(--color-muted)]">
              0{idx + 1} — {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s, i) => (
                <SkillChip
                  key={s}
                  label={s}
                  variant={
                    i === 0 && idx === 0
                      ? "accent"
                      : i === 1 && idx === 0
                      ? "coral"
                      : i === 2 && idx === 0
                      ? "ink"
                      : "default"
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}