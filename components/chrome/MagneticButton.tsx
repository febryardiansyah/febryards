"use client";

import Link from "next/link";
import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export function MagneticButton(props: LinkProps | ButtonProps) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const k = (props.strength ?? 0.25);
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * k;
    const y = (e.clientY - rect.top - rect.height / 2) * k;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  if ("href" in props && props.href) {
    const { children, className, strength: _s, ...rest } = props;
    void _s;
    return (
      <Link
        {...rest}
        href={props.href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={onMove}
        onMouseLeave={(e) => {
          onLeave();
          rest.onMouseLeave?.(e);
        }}
        className={`transition-transform duration-300 ease-out ${className ?? ""}`}
      >
        {children}
      </Link>
    );
  }

  const { children, className, strength: _s, ...rest } = props as ButtonProps;
  void _s;
  return (
    <button
      {...rest}
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={(e) => {
        onLeave();
        rest.onMouseLeave?.(e);
      }}
      className={`transition-transform duration-300 ease-out ${className ?? ""}`}
    >
      {children}
    </button>
  );
}