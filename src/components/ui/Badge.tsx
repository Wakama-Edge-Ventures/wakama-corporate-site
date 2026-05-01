import type {HTMLAttributes, ReactNode} from "react";

import {cn} from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "mint" | "cyan" | "orange" | "violet" | "dark";
};

const tones = {
  mint: "border-mintCta/30 bg-mintCta/10 text-mintCta",
  cyan: "border-cyanLogo/30 bg-cyanLogo/10 text-cyanLogo",
  orange: "border-orangeAccent/30 bg-orangeAccent/10 text-orangeAccent",
  violet: "border-violetLogo/30 bg-violetLogo/10 text-violetLogo",
  dark: "border-ink/10 bg-ink/5 text-ink",
};

export function Badge({children, className, tone = "mint", ...props}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
