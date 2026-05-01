import {cn} from "@/lib/utils";

type HomeV2SectionIntroProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function HomeV2SectionIntro({
  title,
  description,
  align = "left",
}: HomeV2SectionIntroProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <h2 className="font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
