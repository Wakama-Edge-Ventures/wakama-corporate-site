import {Badge} from "@/components/ui/Badge";
import {cn} from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <Badge tone={dark ? "cyan" : "dark"} className={cn(align === "center" && "mx-auto")}>
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "mt-5 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 text-muted sm:text-lg",
            dark && "text-white/68",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
