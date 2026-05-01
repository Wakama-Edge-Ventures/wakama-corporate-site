"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Building2, CheckCircle2, LockKeyhole, Radar, ShieldCheck} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const ciaIcons = [LockKeyhole, ShieldCheck, Radar];

export function ISOAQCSection() {
  const t = useTranslations("compliancePage.iso");
  const shouldReduceMotion = useReducedMotion();
  const cia = t.raw("cia") as Array<{title: string; body: string}>;
  const scope = t.raw("scope") as string[];

  return (
    <section className="relative overflow-hidden bg-backgroundDeep py-16 sm:py-20">
      <div className="absolute inset-0 data-grid opacity-20" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(53,245,155,0.16),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(99,224,232,0.12),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.56, 0.86, 0.56], scale: [1, 1.02, 1]}}
        transition={{duration: 7.5, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,42,0.92),rgba(7,10,18,0.94)_54%,rgba(11,16,32,0.94))] p-5 shadow-panel sm:p-6 lg:p-7">
          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyanLogo">
                  {t("eyebrow")}
                </span>
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full border border-mintCta/30 bg-mintCta/10 px-3 py-1 font-mono text-[11px] font-semibold text-mintCta"
                  animate={shouldReduceMotion ? undefined : {boxShadow: ["0 0 0 rgba(53,245,155,0)", "0 0 24px rgba(53,245,155,0.18)", "0 0 0 rgba(53,245,155,0)"]}}
                  transition={{duration: 2.6, repeat: Infinity, ease: "easeInOut"}}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mintCta" aria-hidden="true" />
                  {t("badge")}
                </motion.span>
              </div>
              <h2 className="font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-white">
                {t("title")}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-white/70 sm:text-[1rem]">{t("body")}</p>
              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-violetLogo">
                  {t("partnerLabel")}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyanLogo/20 bg-cyanLogo/10 text-cyanLogo">
                    <Building2 aria-hidden="true" size={17} />
                  </span>
                  <p className="text-[0.92rem] font-medium text-white">{t("partnerName")}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-2.5">
                {cia.map((item, index) => {
                  const Icon = ciaIcons[index] ?? ShieldCheck;

                  return (
                    <motion.div
                      key={item.title}
                      className="rounded-lg border border-white/10 bg-white/[0.05] p-4"
                      initial={shouldReduceMotion ? false : {opacity: 0, x: 18}}
                      whileInView={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
                      viewport={{once: true, margin: "-80px"}}
                      transition={{delay: index * 0.08}}
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-mintCta/20 bg-mintCta/10 text-mintCta">
                          <Icon aria-hidden="true" size={18} />
                        </span>
                        <div>
                          <h3 className="font-sans text-[0.98rem] font-medium text-white">{item.title}</h3>
                          <p className="mt-1.5 text-[0.87rem] leading-6 text-white/62">{item.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white/46">
                  {t("scopeLabel")}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {scope.map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[11px] font-semibold text-white/68">
                      <CheckCircle2 aria-hidden="true" size={14} className="text-mintCta" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
