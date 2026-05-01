import {Badge} from "@/components/ui/Badge";
import {cn} from "@/lib/utils";

type IMFSectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
};

export function IMFSectionIntro({
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
}: IMFSectionIntroProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <Badge tone={dark ? "cyan" : "dark"} className={cn(align === "center" && "mx-auto")}>
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "mt-4 font-display text-[clamp(1.8rem,3vw,3rem)] font-light leading-[1.12] text-ink",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]",
            dark && "text-white/68",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
