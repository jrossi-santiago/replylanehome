import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "primaryOnInk";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink/90",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40",
  primaryOnInk:
    "bg-paper text-ink hover:bg-paper/90",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-4 font-head text-[15px] font-semibold no-underline ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
