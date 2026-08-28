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
      <div className="dashed-frame p-8 text-center">
        <p className="bracket">[ MESSAGE SENT ]</p>
        <p className="mt-4 text-display text-[var(--color-fg)]">
          Thanks — I&apos;ll reply soon.
        </p>
        <p className="mt-2 text-[var(--color-muted)]">
          I read every message and try to respond within a couple of days.
        </p>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
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
          rows={6}
          className="mt-2 w-full rounded-lg border border-[var(--color-rule)] bg-[var(--color-card)] px-4 py-3 text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-fg)]"
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

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-[var(--color-muted)]">
          Replies go to febryardiansyah27@gmail.com.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="btn-pill disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send message"}
          <span aria-hidden>→</span>
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
        className="mt-2 w-full rounded-lg border border-[var(--color-rule)] bg-[var(--color-card)] px-4 py-3 text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-fg)]"
      />
      {error && (
        <p className="mt-1 text-xs text-[var(--color-accent-2)]">{error}</p>
      )}
    </div>
  );
}