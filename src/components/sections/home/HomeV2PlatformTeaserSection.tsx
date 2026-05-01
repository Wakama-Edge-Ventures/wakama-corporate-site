"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, BrainCircuit, ShieldCheck, Sparkles} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

import {HomeV2IdjorInsightCard} from "./HomeV2IdjorInsightCard";

export function HomeV2PlatformTeaserSection() {
  const t = useTranslations("homeV2.platformTeaser");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const points = t.raw("points") as string[];
  const chips = t.raw("chips") as string[];

  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(145deg,rgba(7,10,18,0.98),rgba(17,24,42,0.96)_56%,rgba(11,16,32,0.98))] px-5 py-6 shadow-[0_26px_72px_rgba(7,10,18,0.18)] sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="absolute inset-0 data-grid opacity-14" />
          <div className="absolute left-[12%] top-[18%] h-44 w-44 rounded-full bg-violetLogo/10 blur-3xl" />
          <div className="absolute right-[10%] bottom-[10%] h-48 w-48 rounded-full bg-cyanLogo/10 blur-3xl" />

          <div className="relative grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <motion.div
              initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
            >
              <p className="font-mono text-sm uppercase tracking-[0.22em] text-cyanLogo">
                {t("eyebrow")}
              </p>
              <h2 className="mt-4 max-w-xl font-display text-[clamp(1.76rem,2.9vw,2.65rem)] font-light leading-[1.14] text-white">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-xl text-[1rem] leading-7 text-white/70">{t("body")}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {chips.map((chip, index) => (
                  <motion.span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[13px] text-white/74"
                    initial={shouldReduceMotion ? false : {opacity: 0, y: 8}}
                    whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.08 + index * 0.05}}
                  >
                    {index === 0 ? <BrainCircuit aria-hidden="true" size={14} className="text-cyanLogo" /> : null}
                    {index === 1 ? <Sparkles aria-hidden="true" size={14} className="text-cyanLogo" /> : null}
                    {index === 2 ? <ShieldCheck aria-hidden="true" size={14} className="text-cyanLogo" /> : null}
                    <span>{chip}</span>
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.045] p-4 sm:p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyanLogo">
                  {t("platformLabel")}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-white/10 bg-backgroundDeep/45 px-3 py-1.5 text-[13px] text-white/72"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <Button href={`/${locale}/platform`} variant="secondary" size="md" className="mt-6 font-medium">
                {t("cta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
            </motion.div>

            <HomeV2IdjorInsightCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
