"use client";

import {motion, useReducedMotion} from "framer-motion";
import {AlertTriangle, CheckCircle2, FileText, Gauge, MapPinned, UserRound} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

import {IMFSectionIntro} from "./IMFSectionIntro";

export function IMFDashboardPreviewSection() {
  const t = useTranslations("solutionsImf.dashboard");
  const shouldReduceMotion = useReducedMotion();
  const rows = t.raw("rows") as Array<{label: string; value: string}>;

  return (
    <section className="bg-softLight py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <IMFSectionIntro eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
          <motion.div
            className="relative overflow-hidden rounded-lg border border-cyanLogo/15 bg-[linear-gradient(145deg,rgba(7,10,18,0.98),rgba(17,24,42,0.96)_52%,rgba(11,16,32,0.98))] p-4 shadow-[0_20px_60px_rgba(7,10,18,0.24)] sm:p-5"
            initial={shouldReduceMotion ? false : {opacity: 0, y: 20}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <div className="absolute inset-0 data-grid opacity-20" />
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-cyanLogo/10 blur-3xl" />
            <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-mintCta/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyanLogo">{t("mockupLabel")}</p>
                  <h3 className="mt-2 font-sans text-[1.08rem] font-medium text-white sm:text-[1.14rem]">
                    {t("mockupTitle")}
                  </h3>
                </div>
                <div className="rounded-full border border-mintCta/35 bg-mintCta/12 px-3 py-1 font-mono text-xs text-mintCta shadow-[0_0_24px_rgba(53,245,155,0.12)]">
                  {t("status")}
                </div>
              </div>

              <div className="grid gap-3.5 lg:grid-cols-[0.94fr_1.06fr]">
                <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-mintCta text-ink">
                      <UserRound aria-hidden="true" size={20} />
                    </span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/46">{t("profileLabel")}</p>
                      <p className="mt-1 font-sans text-[1rem] font-medium text-white">{t("profileValue")}</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg border border-white/10 bg-backgroundDeep/70 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyanLogo">{t("scoreLabel")}</p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="font-mono text-[2.65rem] font-semibold text-mintCta">78</span>
                      <span className="pb-2 text-sm text-white/54">/100</span>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyanLogo via-mintCta to-orangeAccent"
                        initial={{width: "22%"}}
                        whileInView={shouldReduceMotion ? undefined : {width: "78%"}}
                        viewport={{once: true}}
                        transition={{duration: 0.9, ease: "easeOut"}}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {rows.map((row, index) => {
                    const Icon = [CheckCircle2, MapPinned, Gauge, AlertTriangle, FileText][index] ?? CheckCircle2;

                    return (
                      <div key={row.label} className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.055] px-3.5 py-3">
                        <div className="flex items-center gap-3">
                          <Icon aria-hidden="true" className="text-mintCta" size={18} />
                          <span className="text-sm text-white/72">{row.label}</span>
                        </div>
                        <span className="text-right text-sm font-semibold text-white">{row.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
