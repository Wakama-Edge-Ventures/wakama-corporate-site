"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Activity, AlertTriangle, CheckCircle2, FileSearch, ScanLine, ShieldCheck, UserRound} from "lucide-react";
import {useTranslations} from "next-intl";

const icons = [UserRound, AlertTriangle, CheckCircle2, ShieldCheck];

export function HomeV2IdjorInsightCard() {
  const t = useTranslations("homeV2.platformTeaser.card");
  const shouldReduceMotion = useReducedMotion();
  const sections = t.raw("sections") as Array<{title: string; body: string}>;
  const chips = t.raw("chips") as string[];

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-violetLogo/16 bg-[linear-gradient(145deg,rgba(7,10,18,0.98),rgba(17,24,42,0.95)_54%,rgba(11,16,32,0.99))] p-5 shadow-[0_24px_64px_rgba(7,10,18,0.26)]"
      initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
      viewport={{once: true, margin: "-80px"}}
      whileHover={shouldReduceMotion ? undefined : {y: -3}}
      transition={{duration: 0.25}}
    >
      <div className="absolute inset-0 data-grid opacity-14" />
      <div className="absolute -right-16 top-0 h-44 w-44 rounded-full bg-violetLogo/10 blur-3xl" />
      <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-mintCta/10 blur-3xl" />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-cyanLogo/65 to-transparent"
        animate={shouldReduceMotion ? undefined : {y: [0, 220, 0], opacity: [0.12, 0.68, 0.12]}}
        transition={{duration: 5.6, repeat: Infinity, ease: "easeInOut"}}
      />

      <div className="relative">
        <div className="mb-4 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violetLogo">
              {t("eyebrow")}
            </p>
            <h3 className="mt-2 font-sans text-[1.08rem] font-medium text-white sm:text-[1.15rem]">
              {t("title")}
            </h3>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-mintCta/30 bg-mintCta/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mintCta">
            <motion.span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-mintCta"
              animate={shouldReduceMotion ? undefined : {scale: [1, 1.7, 1], opacity: [0.75, 1, 0.75]}}
              transition={{duration: 1.8, repeat: Infinity, ease: "easeInOut"}}
            />
            {t("status")}
          </span>
        </div>

        <div className="mb-4 rounded-lg border border-cyanLogo/14 bg-cyanLogo/[0.055] p-4">
          <div className="mb-3 flex items-center gap-2 text-cyanLogo">
            <ScanLine aria-hidden="true" size={16} />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">{t("scanLabel")}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/72"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {sections.map((section, index) => {
            const Icon = icons[index] ?? FileSearch;
            const isRisk = index === 1;
            const isAction = index === 2;

            return (
              <div
                key={section.title}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-4 transition duration-200 group-hover:border-white/12"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-cyanLogo/20 bg-cyanLogo/10">
                    {isRisk ? (
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-1 rounded-md border border-orangeAccent/35"
                        animate={shouldReduceMotion ? undefined : {opacity: [0.2, 0.65, 0.2]}}
                        transition={{duration: 2.2, repeat: Infinity, ease: "easeInOut"}}
                      />
                    ) : null}
                    <Icon aria-hidden="true" size={16} className={isRisk ? "text-orangeAccent" : "text-cyanLogo"} />
                  </span>
                  <h4 className="text-[13.5px] font-medium text-white sm:text-sm">{section.title}</h4>
                  {isRisk ? <Activity aria-hidden="true" size={15} className="ml-auto text-orangeAccent" /> : null}
                  {isAction ? <CheckCircle2 aria-hidden="true" size={15} className="ml-auto text-mintCta" /> : null}
                </div>
                <p className="mt-2 text-[13.5px] leading-6 text-white/64 sm:text-sm">{section.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
