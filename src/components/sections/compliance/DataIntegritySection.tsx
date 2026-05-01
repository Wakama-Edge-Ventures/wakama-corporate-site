"use client";

import {motion, useReducedMotion} from "framer-motion";
import {DatabaseZap} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function DataIntegritySection() {
  const t = useTranslations("compliancePage.dataIntegrity");
  const shouldReduceMotion = useReducedMotion();
  const steps = t.raw("steps") as string[];

  return (
    <section className="bg-softLight py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
              {t("title")}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-muted sm:text-[1rem]">{t("body")}</p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-[0_14px_34px_rgba(16,24,40,0.05)] sm:p-5">
            <div className="relative mt-1 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2.5">
              <div className="absolute bottom-5 left-5 top-5 w-px bg-ink/10 sm:hidden" />
              <motion.div
                aria-hidden="true"
                className="absolute left-5 top-5 w-px bg-gradient-to-b from-cyanLogo via-mintCta to-violetLogo sm:hidden"
                initial={{height: "8%"}}
                whileInView={shouldReduceMotion ? undefined : {height: "calc(100% - 2.5rem)"}}
                viewport={{once: true}}
                transition={{duration: 1.05, ease: "easeOut"}}
              />
              <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-ink/10 lg:block" />
              <motion.div
                aria-hidden="true"
                className="absolute left-[10%] top-10 hidden h-px bg-gradient-to-r from-cyanLogo via-mintCta to-violetLogo lg:block"
                initial={{width: "5%"}}
                whileInView={shouldReduceMotion ? undefined : {width: "80%"}}
                viewport={{once: true}}
                transition={{duration: 1.05, ease: "easeOut"}}
              />
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  className="relative rounded-lg border border-ink/10 bg-softLight p-3.5 pl-14 shadow-[0_10px_24px_rgba(16,24,40,0.04)] sm:pl-3.5 lg:pt-5"
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.07}}
                >
                  <div className="flex items-start gap-3 sm:flex-col sm:gap-3 lg:items-center">
                    <span className="absolute left-3.5 top-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white shadow-[0_0_0_4px_rgba(255,255,255,0.92)] sm:static lg:mx-auto">
                      <DatabaseZap aria-hidden="true" size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyanLogo lg:text-center">
                        {t("stepLabel", {number: index + 1})}
                      </p>
                      <p className="mt-2.5 text-[0.92rem] font-medium leading-6 text-ink lg:text-center">
                        {step}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-[0.88rem] leading-6 text-muted">{t("note")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
