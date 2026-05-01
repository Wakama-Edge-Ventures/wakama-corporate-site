"use client";

import {motion, useReducedMotion} from "framer-motion";
import {CheckCircle2, FileText, MapPinned} from "lucide-react";
import {useTranslations} from "next-intl";

import {ScoreGauge} from "@/components/visuals/ScoreGauge";

export function DashboardMockup() {
  const t = useTranslations("visuals.dashboard");
  const shouldReduceMotion = useReducedMotion();
  const rows = t.raw("rows") as string[];

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg border border-cyanLogo/15 bg-[linear-gradient(145deg,rgba(7,10,18,0.98),rgba(17,24,42,0.96)_52%,rgba(11,16,32,0.98))] p-5 shadow-[0_22px_70px_rgba(7,10,18,0.28)]"
      initial={shouldReduceMotion ? false : {opacity: 0, y: 20}}
      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
      viewport={{once: true, margin: "-80px"}}
    >
      <div className="absolute inset-0 data-grid opacity-20" />
      <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-cyanLogo/10 blur-3xl" />
      <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-mintCta/10 blur-3xl" />

      <div className="relative mb-5 flex items-center justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyanLogo">{t("label")}</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">{t("title")}</h3>
        </div>
        <div className="rounded-full border border-mintCta/35 bg-mintCta/12 px-3 py-1 font-mono text-xs text-mintCta shadow-[0_0_24px_rgba(53,245,155,0.12)]">
          Live
        </div>
      </div>

      <div className="relative grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-inner">
          <ScoreGauge label={t("scoreLabel")} />
        </div>
        <div className="space-y-3">
          {rows.map((row, index) => {
            const icons = [CheckCircle2, MapPinned, FileText];
            const Icon = icons[index] ?? CheckCircle2;

            return (
              <div key={row} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-3">
                <Icon aria-hidden="true" className="text-mintCta" size={18} />
                <span className="text-sm text-white/78">{row}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
