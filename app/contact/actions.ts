"use server";

import { z } from "zod";
import { Resend } from "resend";
import { profile } from "@/data/profile";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Please use a valid email"),
  subject: z.string().trim().min(1, "Subject is required").max(180),
  message: z.string().trim().min(10, "Tell me a little more").max(5000),
  honeypot: z.string().max(0, "Spam detected").optional().default(""),
});

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    subject: formData.get("subject")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    honeypot: formData.get("website")?.toString() ?? "",
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  if (parsed.data.honeypot && parsed.data.honeypot.length > 0) {
    return { status: "error", message: "Spam detected." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Email service is not configured. Please email me directly at " +
        profile.email,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
    const { error } = await resend.emails.send({
      from,
      to: profile.email,
      replyTo: parsed.data.email,
      subject: `[Portfolio] ${parsed.data.subject}`,
      text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(parsed.data.name)} &lt;${escapeHtml(parsed.data.email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(parsed.data.subject)}</p>
        <hr />
        <p>${escapeHtml(parsed.data.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return {
        status: "error",
        message: "Could not send right now — please try again or email me directly.",
      };
    }
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong on our end. Please try again.",
    };
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}