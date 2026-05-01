import Link from "next/link";
import type {AnchorHTMLAttributes, ReactNode} from "react";

import {cn} from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-mintCta text-ink shadow-glow hover:bg-white focus-visible:outline-mintCta",
  secondary:
    "border border-white/16 bg-white/8 text-white hover:border-cyanLogo/50 hover:bg-white/12 focus-visible:outline-cyanLogo",
  ghost:
    "text-white/78 hover:bg-white/8 hover:text-white focus-visible:outline-cyanLogo",
  dark:
    "bg-ink text-white hover:bg-panelDark focus-visible:outline-ink",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "motion-safe:hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
