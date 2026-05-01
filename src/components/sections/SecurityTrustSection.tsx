"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Building2, CheckCircle2, LockKeyhole, Radar, ShieldCheck} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

type CiaItem = {
  title: string;
  body: string;
};

const ciaIcons = [LockKeyhole, ShieldCheck, Radar];

export function SecurityTrustSection() {
  const t = useTranslations("securityTrust");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const cia = t.raw("cia") as CiaItem[];
  const scope = t.raw("scope") as string[];

  return (
    <section className="relative overflow-hidden bg-backgroundDeep py-20 sm:py-24">
      <div className="absolute inset-0 data-grid opacity-20" />
      <div className="absolute left-[-12%] top-16 h-80 w-80 rounded-full bg-cyanLogo/10 blur-3xl" />
      <div className="absolute bottom-[-18%] right-8 h-80 w-80 rounded-full bg-mintCta/10 blur-3xl" />

      <Container className="relative">
        <motion.div
          className="relative overflow-hidden rounded-lg border border-mintCta/16 bg-[linear-gradient(145deg,rgba(17,24,42,0.86),rgba(7,10,18,0.9)_54%,rgba(11,16,32,0.86))] p-6 shadow-panel sm:p-8 lg:p-10"
          initial={shouldReduceMotion ? false : {opacity: 0, y: 22}}
          whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(53,245,155,0.24),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(33,216,130,0.2),transparent_32%),linear-gradient(135deg,rgba(99,224,232,0.08),transparent_45%)]"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.72, 1, 0.72],
                    scale: [1, 1.035, 1],
                  }
            }
            transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-mintCta/14 blur-3xl"
            animate={shouldReduceMotion ? undefined : {x: [0, 48, 0], y: [0, -18, 0]}}
            transition={{duration: 9, repeat: Infinity, ease: "easeInOut"}}
          />
          <div className="absolute inset-0 bg-backgroundDeep/22" aria-hidden="true" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyanLogo">
                  {t("eyebrow")}
                </span>
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full border border-mintCta/30 bg-mintCta/10 px-3 py-1 font-mono text-xs font-semibold text-mintCta"
                  animate={shouldReduceMotion ? undefined : {boxShadow: ["0 0 0 rgba(53,245,155,0)", "0 0 24px rgba(53,245,155,0.18)", "0 0 0 rgba(53,245,155,0)"]}}
                  transition={{duration: 2.6, repeat: Infinity, ease: "easeInOut"}}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mintCta" aria-hidden="true" />
                  {t("status")}
                </motion.span>
              </div>

              <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/72">{t("subtitle")}</p>
              <p className="mt-5 text-base leading-8 text-white/58">{t("body")}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-violetLogo">
                    {t("partnerLabel")}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyanLogo/20 bg-cyanLogo/10 text-cyanLogo">
                      <Building2 aria-hidden="true" size={19} />
                    </span>
                    <p className="text-sm font-semibold text-white">{t("partnerName")}</p>
                  </div>
                </div>

                <div className="rounded-lg border border-mintCta/20 bg-mintCta/[0.07] p-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-mintCta">
                    ISO/IEC 27001
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/68">{t("statusBody")}</p>
                </div>
              </div>

              <Button href={`/${locale}/compliance`} variant="secondary" className="mt-8">
                {t("cta")}
              </Button>
            </div>

            <div>
              <div className="grid gap-3">
                {cia.map((item, index) => {
                  const Icon = ciaIcons[index] ?? ShieldCheck;

                  return (
                    <motion.div
                      key={item.title}
                      className="group rounded-lg border border-white/10 bg-white/[0.05] p-5 transition duration-200 hover:-translate-y-1 hover:border-cyanLogo/24 hover:bg-white/[0.07]"
                      initial={shouldReduceMotion ? false : {opacity: 0, x: 18}}
                      whileInView={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
                      viewport={{once: true, margin: "-80px"}}
                      transition={{delay: index * 0.08}}
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-mintCta/20 bg-mintCta/10 text-mintCta">
                          <Icon aria-hidden="true" size={20} />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/60">{item.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/46">
                  {t("scopeLabel")}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {scope.map((item, index) => (
                    <motion.span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-semibold text-white/68 transition duration-200 hover:border-mintCta/24 hover:text-white"
                      initial={shouldReduceMotion ? false : {opacity: 0, y: 8}}
                      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                      viewport={{once: true}}
                      transition={{delay: 0.15 + index * 0.04}}
                    >
                      <CheckCircle2 aria-hidden="true" size={14} className="text-mintCta" />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="relative z-10 mt-8 border-t border-white/10 pt-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white/46">
            {t("closing")}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
