"use client";

import {motion, useReducedMotion} from "framer-motion";
import {
  AlertTriangle,
  Bot,
  FileSearch,
  FileText,
  Radar,
  ScanLine,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const icons: LucideIcon[] = [FileText, FileSearch, ShieldAlert, AlertTriangle, Radar];

export function IdjorPlatformSection() {
  const t = useTranslations("platformPage.idjor");
  const shouldReduceMotion = useReducedMotion();
  const capabilities = t.raw("capabilities") as string[];
  const panels = t.raw("panels") as Array<{title: string; body: string}>;

  return (
    <section className="relative overflow-hidden bg-backgroundDeep py-16 sm:py-20">
      <div className="absolute inset-0 data-grid opacity-20" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(53,245,155,0.13),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(181,139,232,0.16),transparent_34%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.48, 0.82, 0.48], scale: [1, 1.02, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <div className="max-w-2xl">
              <h2 className="font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-white">
                {t("title")}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-white/68 sm:text-[1rem]">{t("body")}</p>
            </div>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {capabilities.map((capability, index) => {
                const Icon = icons[index] ?? FileText;

                return (
                  <motion.div
                    key={capability}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-3.5 py-2.5"
                    initial={shouldReduceMotion ? false : {opacity: 0, x: -12}}
                    whileInView={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.12 + index * 0.06}}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyanLogo/20 bg-cyanLogo/10 text-cyanLogo">
                      <Icon aria-hidden="true" size={16} />
                    </span>
                    <span className="text-[13.5px] font-normal text-white/74 sm:text-sm">{capability}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-lg border border-violetLogo/18 bg-[linear-gradient(145deg,rgba(7,10,18,0.96),rgba(17,24,42,0.94)_54%,rgba(11,16,32,0.98))] p-4 shadow-panel sm:p-5"
            initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <div className="absolute inset-0 data-grid opacity-15" />
            <motion.div
              aria-hidden="true"
              className="absolute left-0 right-0 top-20 h-px bg-gradient-to-r from-transparent via-cyanLogo/70 to-transparent"
              animate={shouldReduceMotion ? undefined : {y: [0, 280, 0], opacity: [0.1, 0.7, 0.1]}}
              transition={{duration: 5.6, repeat: Infinity, ease: "easeInOut"}}
            />
            <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-violetLogo/12 blur-3xl" />
            <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-mintCta/10 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-violetLogo">
                    {t("panelLabel")}
                  </p>
                  <h3 className="mt-2 font-display text-[1.12rem] font-semibold text-white sm:text-[1.2rem]">
                    {t("panelTitle")}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-mintCta/30 bg-mintCta/10 px-3 py-1 font-mono text-[11px] text-mintCta">
                  <motion.span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-mintCta"
                    animate={shouldReduceMotion ? undefined : {scale: [1, 1.7, 1], opacity: [0.75, 1, 0.75]}}
                    transition={{duration: 1.8, repeat: Infinity, ease: "easeInOut"}}
                  />
                  {t("panelStatus")}
                </span>
              </div>

              <div className="mb-3 rounded-lg border border-cyanLogo/14 bg-cyanLogo/[0.055] p-3.5">
                <div className="mb-2.5 flex items-center gap-2 text-cyanLogo">
                  <ScanLine aria-hidden="true" size={16} />
                  <span className="font-mono text-xs uppercase tracking-[0.18em]">
                    {t("scanLabel")}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(t.raw("chips") as string[]).map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/68"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-3">
                {panels.map((panel, index) => {
                  const Icon = [Bot, AlertTriangle, FileSearch][index] ?? Bot;

                  return (
                    <div
                      key={panel.title}
                      className="rounded-lg border border-white/10 bg-white/[0.045] p-3.5 transition duration-200 hover:border-cyanLogo/24 hover:bg-white/[0.065]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyanLogo/20 bg-cyanLogo/10 text-cyanLogo">
                          <Icon aria-hidden="true" size={15} />
                        </span>
                        <h4 className="text-[13.5px] font-semibold leading-5 text-white sm:text-sm">
                          {panel.title}
                        </h4>
                      </div>
                      <p className="mt-2 text-[0.83rem] leading-6 text-white/62">{panel.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
