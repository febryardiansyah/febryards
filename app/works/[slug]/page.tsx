import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { MarqueeCTA } from "@/components/motion/MarqueeCTA";
import { FloatingDecorations } from "@/components/ornament/FloatingDecorations";
import { CodePlaceholder } from "@/components/ornament/CodePlaceholder";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/works/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not found" };
  const coverImages = project.gallery.length > 0 ? project.gallery : [];
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      images: coverImages.map((t) => ({ url: t })),
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: coverImages,
    },
  };
}

export default async function WorkPage(
  props: PageProps<"/works/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const { next } = getAdjacentProjects(slug);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6">
      <nav className="pt-8">
        <Link
          href="/works"
          className="bracket inline-flex flex-wrap items-center gap-2 break-words hover:opacity-70"
        >
          ← Works / {project.title}
        </Link>
      </nav>

      <header className="relative overflow-hidden pt-6 md:pt-12">
        <FloatingDecorations variant="minimal" />

        <div className="flex flex-wrap items-center gap-2 text-[10px] sm:gap-3 sm:text-xs">
          <span className="bracket">[ CASE STUDY ]</span>
          <span aria-hidden className="wiggle text-xl sm:text-2xl">
            {project.emoji}
          </span>
          <span className="bracket">{project.year}</span>
          {project.client && (
            <span className="sticker">{project.client}</span>
          )}
        </div>

        <Reveal>
          <h1 className="text-hero mt-3 text-[var(--color-fg)] sm:mt-4">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-fg)] sm:mt-6 sm:text-lg md:text-xl">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-8 grid gap-5 border-y border-[var(--color-rule)] py-5 sm:mt-10 sm:grid-cols-3 sm:gap-6 sm:py-6">
            <Meta label="Role" value={project.role} />
            <Meta label="Year" value={String(project.year)} />
            <Meta label="Categories" value={project.categories.join(", ")} />
          </dl>
        </Reveal>
      </header>

      <Reveal>
        {project.gallery.length > 0 ? (
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-[var(--color-rule)] bg-[var(--color-card)] glow">
            <div className="aspect-[16/9]">
              <Image
                src={project.gallery[0]}
                alt={`${project.title} cover`}
                width={1280}
                height={720}
                className="h-full w-full object-cover"
                unoptimized
                priority
              />
            </div>
          </div>
        ) : (
          <div className="mt-10">
            <CodePlaceholder
              emoji={project.emoji}
              label={`${project.slug} · code preview`}
            />
          </div>
        )}
      </Reveal>

      <section className="grid gap-4 py-10 md:grid-cols-[200px,1fr] md:gap-10 md:py-16">
        <div className="bracket text-[var(--color-muted)]">[ PROBLEM ]</div>
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--color-fg)] sm:text-lg">
            {project.problem}
          </p>
        </Reveal>
      </section>

      <section className="grid gap-4 border-t border-[var(--color-rule)] py-10 md:grid-cols-[200px,1fr] md:gap-10 md:py-16">
        <div className="bracket text-[var(--color-muted)]">[ SOLUTION ]</div>
        <Reveal>
          <ul className="space-y-4">
            {project.solution.map((s, i) => (
              <li key={i} className="flex gap-3 text-[var(--color-fg)]">
                <span
                  aria-hidden
                  className="shrink-0 font-mono text-xs text-[var(--color-muted)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="max-w-2xl">{s}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="grid gap-4 border-t border-[var(--color-rule)] py-10 md:grid-cols-[200px,1fr] md:gap-10 md:py-16">
        <div className="bracket text-[var(--color-muted)]">[ STACK ]</div>
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="sticker">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {project.metrics && project.metrics.length > 0 && (
        <section className="grid gap-4 border-t border-[var(--color-rule)] py-10 md:grid-cols-[200px,1fr] md:gap-10 md:py-16">
          <div className="bracket text-[var(--color-muted)]">[ IMPACT ]</div>
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {project.metrics.map((m) => (
                <li
                  key={m.label}
                  className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-card)] p-4 sm:p-5"
                >
                  <p className="bracket text-[var(--color-muted)]">
                    {m.label}
                  </p>
                  <p className="mt-1 text-display text-[var(--color-fg)]">
                    {m.value}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      )}

      <section className="grid gap-10 border-t border-[var(--color-rule)] py-12 md:grid-cols-[200px,1fr] md:py-16">
        <div className="bracket text-[var(--color-muted)]">[ LINKS ]</div>
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-outline"
              >
                Live →
              </a>
            )}
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-outline"
              >
                App Store →
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-outline"
              >
                Play Store →
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-outline"
              >
                Repo →
              </a>
            )}
          </div>
        </Reveal>
      </section>

      {next && (
        <Link
          href={`/works/${next.slug}`}
          className="group mt-8 block border-t border-[var(--color-rule)] py-10 transition-colors hover:bg-[var(--color-rule)]/30 sm:py-12"
        >
          <p className="bracket text-[var(--color-muted)]">[ NEXT PROJECT ]</p>
          <p className="mt-3 text-3xl font-display leading-tight text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent-2)] sm:text-section">
            {next.title} →
          </p>
        </Link>
      )}

      <Reveal>
        <section className="mt-12">
          <div className="bracket mb-3 text-[var(--color-muted)]">
            [ CTA · ALWAYS ON ]
          </div>
          <MarqueeCTA
            text={`Liked ${project.title}? Let's talk about yours`}
            href="/contact"
            ariaLabel="Get in touch"
            speed="normal"
          />
        </section>
      </Reveal>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="bracket text-[var(--color-muted)]">{label}</dt>
      <dd className="mt-1 text-[var(--color-fg)]">{value}</dd>
    </div>
  );
}