"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="dashed-frame p-5 text-center sm:p-8">
        <p className="bracket text-[10px] sm:text-xs">[ MESSAGE SENT ]</p>
        <p className="mt-3 text-2xl font-display leading-tight text-[var(--color-fg)] sm:mt-4 sm:text-display">
          Thanks — I&apos;ll reply soon.
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted)] sm:text-base">
          I read every message and try to respond within a couple of days.
        </p>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form action={formAction} className="space-y-2.5 sm:space-y-5" noValidate>
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <Field
        label="Name"
        name="name"
        required
        error={fieldErrors.name}
        autoComplete="name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        error={fieldErrors.email}
        autoComplete="email"
      />
      <Field
        label="Subject"
        name="subject"
        required
        error={fieldErrors.subject}
      />

      <div>
        <label
          htmlFor="message"
          className="bracket block text-[var(--color-muted)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          className="mt-1 w-full resize-y rounded-lg border border-[var(--color-rule)] bg-[var(--color-card)] px-3 py-2 text-sm leading-snug text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-fg)] sm:mt-2 sm:px-4 sm:py-3 sm:text-base"
          style={{ minHeight: "5rem" }}
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs text-[var(--color-accent-2)]">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {state.status === "error" && !Object.keys(fieldErrors).length && (
        <p className="rounded-lg border border-[var(--color-accent-2)] bg-[var(--color-accent-2)]/10 px-4 py-2 text-sm text-[var(--color-accent-2)]">
          {state.message}
        </p>
      )}

      <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:pt-2">
        <p className="text-[11px] leading-snug text-[var(--color-muted)] sm:text-xs">
          Replies go to{" "}
          <span className="block sm:inline">febryardiansyah27@gmail.com.</span>
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-[var(--color-pill)] px-5 py-3 text-sm font-medium text-[var(--color-bg)] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isPending ? "Sending…" : "Send message"}
          <span aria-hidden className="ml-1.5">→</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="bracket block text-[var(--color-muted)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 w-full rounded-lg border border-[var(--color-rule)] bg-[var(--color-card)] px-3 py-2 text-sm leading-snug text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-fg)] sm:mt-2 sm:px-4 sm:py-3 sm:text-base"
      />
      {error && (
        <p className="mt-1 text-xs text-[var(--color-accent-2)]">{error}</p>
      )}
    </div>
  );
}