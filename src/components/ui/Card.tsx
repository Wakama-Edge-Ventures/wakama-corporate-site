import type {HTMLAttributes, ReactNode} from "react";

import {cn} from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "dark" | "light";
};

export function Card({children, className, tone = "dark", ...props}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6",
        tone === "dark" ? "glass-panel" : "light-panel text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
