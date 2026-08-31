"use client";

import { useRef, type ReactNode } from "react";

type PreviewTriggerProps = {
  src: string;
  children: ReactNode;
};

/**
 * Wraps a project row and dispatches cursor position to <HoverPreview>
 * while hovered. Igma-style: hover a text row, a floating image preview
 * follows your mouse. Desktop only — touch devices have no hover.
 */
export function PreviewTrigger({ src, children }: PreviewTriggerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const send = (x: number, y: number) => {
    window.dispatchEvent(
      new CustomEvent("portfolio:preview", { detail: { src, x, y } }),
    );
  };

  const hide = () => {
    window.dispatchEvent(new CustomEvent("portfolio:preview-hide"));
  };

  return (
    <div
      ref={ref}
      className="contents"
      onMouseEnter={(e) => send(e.clientX, e.clientY)}
      onMouseMove={(e) => send(e.clientX, e.clientY)}
      onMouseLeave={hide}
    >
      {children}
    </div>
  );
}
