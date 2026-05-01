"use client";

import {motion, useReducedMotion} from "framer-motion";
import {
  ArrowRight,
  CloudCog,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

const icons: LucideIcon[] = [LockKeyhole, ShieldCheck, ServerCog, FileCheck2, KeyRound, CloudCog, ShieldCheck];

export function SecurityReliabilitySection() {
  const t = useTranslations("platformPage.security");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const pillars = t.raw("pillars") as Array<{title: string; body: string}>;

  return (
    <section className="relative overflow-hidden bg-panelDark py-16 sm:py-20">
      <div className="absolute inset-0 data-grid opacity-18" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(53,245,155,0.16),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(99,224,232,0.14),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.54, 0.9, 0.54], scale: [1, 1.02, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_72px_rgba(7,10,18,0.22)] backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr] lg:p-6">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-mintCta/24 bg-mintCta/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-mintCta">
              <ShieldCheck aria-hidden="true" size={15} />
              {t("badge")}
            </span>
            <div className="mt-4 max-w-2xl">
              <h2 className="font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-white">
                {t("title")}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-white/68 sm:text-[1rem]">{t("body")}</p>
            </div>
            <div className="mt-5 rounded-lg border border-white/10 bg-backgroundDeep/58 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyanLogo">
                {t("programLabel")}
              </p>
              <p className="mt-3 text-[0.96rem] leading-7 text-white/72">{t("programBody")}</p>
              <div className="mt-4">
                <Button href={`/${locale}/compliance`} variant="secondary" size="sm">
                  {t("cta")}
                  <ArrowRight aria-hidden="true" size={16} />
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-2.5 sm:grid-cols-3 lg:self-center">
            {pillars.map((pillar, index) => {
              const Icon = icons[index] ?? ShieldCheck;

              return (
                <motion.div
                  key={pillar.title}
                  className="rounded-lg border border-white/10 bg-backgroundDeep/58 p-3.5 shadow-[0_10px_24px_rgba(7,10,18,0.14)]"
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.05}}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-cyanLogo">
                    <Icon aria-hidden="true" size={17} />
                  </span>
                  <p className="mt-3 text-[0.98rem] font-semibold leading-6 text-white">{pillar.title}</p>
                  <p className="mt-1.5 text-[0.87rem] leading-6 text-white/72">{pillar.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
