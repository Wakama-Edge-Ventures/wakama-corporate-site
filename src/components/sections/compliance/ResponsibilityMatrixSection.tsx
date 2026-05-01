"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Check} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {cn} from "@/lib/utils";

type Owner = "wakama" | "institution" | "shared";

export function ResponsibilityMatrixSection() {
  const t = useTranslations("compliancePage.matrix");
  const shouldReduceMotion = useReducedMotion();
  const rows = t.raw("rows") as Array<{activity: string; owner: Owner}>;
  const columns: Array<{key: Owner; label: string}> = [
    {key: "wakama", label: t("columns.wakama")},
    {key: "institution", label: t("columns.institution")},
    {key: "shared", label: t("columns.shared")},
  ];
  const ownerLabels: Record<Owner, string> = {
    wakama: t("columns.wakama"),
    institution: t("columns.institution"),
    shared: t("columns.shared"),
  };

  return (
    <section className="bg-softLight py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1rem]">
            {t("description")}
          </p>
        </div>

        <motion.div
          className="mt-8 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_16px_42px_rgba(16,24,40,0.06)]"
          initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
          whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
        >
          <div className="hidden sm:grid grid-cols-[1.15fr_repeat(3,0.72fr)] border-b border-ink/10 bg-ink text-white">
            <div className="px-4 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60 sm:px-5">
              {t("activityLabel")}
            </div>
            {columns.map((column) => (
              <div
                key={column.key}
                className="border-l border-white/10 px-3 py-3.5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white/76 sm:px-5"
              >
                {column.label}
              </div>
            ))}
          </div>
          {rows.map((row) => (
            <div key={row.activity} className="border-b border-ink/10 last:border-b-0">
              <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:hidden">
                <span className="text-sm font-medium leading-6 text-ink">{row.activity}</span>
                <span
                  className={cn(
                    "inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
                    row.owner === "wakama" && "border-cyanLogo/20 bg-cyanLogo/8 text-cyanLogo",
                    row.owner === "institution" && "border-mintCta/24 bg-mintCta/10 text-ink",
                    row.owner === "shared" && "border-violetLogo/20 bg-violetLogo/10 text-violetLogo",
                  )}
                >
                  {ownerLabels[row.owner]}
                </span>
              </div>
              <div className="hidden sm:grid sm:grid-cols-[1.15fr_repeat(3,0.72fr)]">
                <div className="px-4 py-3.5 text-[0.92rem] font-medium text-ink sm:px-5">{row.activity}</div>
                {columns.map((column) => (
                  <div key={column.key} className="flex items-center justify-center border-l border-ink/10 px-3 py-3.5 sm:px-5">
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full border",
                        row.owner === column.key
                          ? "border-mintCta/40 bg-mintCta text-ink"
                          : "border-ink/8 bg-ink/4 text-transparent",
                      )}
                      aria-label={row.owner === column.key ? column.label : undefined}
                    >
                      {row.owner === column.key ? <Check aria-hidden="true" size={15} /> : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
