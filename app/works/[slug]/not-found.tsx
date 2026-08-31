import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24">
      <p className="bracket">[ 404 / NOT FOUND ]</p>
      <h1 className="text-hero mt-6 text-[var(--color-fg)]">
        That work <span className="italic-accent">doesn&apos;t exist</span>.
      </h1>
      <p className="mt-4 max-w-prose text-[var(--color-muted)]">
        Maybe a typo, or maybe it got archived. Try the works index.
      </p>
      <Link href="/works" className="btn-pill mt-8">
        ← Back to Works
      </Link>
    </div>
  );
}