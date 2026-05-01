"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRightLeft, FileCheck2, Gauge, MapPinned, ShieldCheck} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

import {IMFSectionIntro} from "./IMFSectionIntro";

const icons = [MapPinned, FileCheck2, ShieldCheck, ArrowRightLeft, Gauge];

export function IMFDataTrustSection() {
  const t = useTranslations("solutionsImf.dataTrust");
  const shouldReduceMotion = useReducedMotion();
  const steps = t.raw("steps") as Array<{title: string; body: string}>;

  return (
    <section className="bg-softLight py-20 sm:py-24">
      <Container>
        <IMFSectionIntro eyebrow={t("eyebrow")} title={t("title")} description={t("body")} />
        <div className="mt-10 rounded-lg border border-ink/10 bg-[linear-gradient(180deg,#F8FBFA_0%,#F4F7F6_100%)] p-4 shadow-[0_16px_42px_rgba(16,24,40,0.05)] sm:p-5 lg:p-6">
          <p className="px-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/48">
            {t("summary")}
          </p>
          <div className="relative mt-4 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            <div className="absolute bottom-5 left-5 top-5 w-px bg-ink/10 sm:hidden" />
            <motion.div
              aria-hidden="true"
              className="absolute left-5 top-5 w-px bg-gradient-to-b from-cyanLogo via-mintCta to-violetLogo sm:hidden"
              initial={{height: "8%"}}
              whileInView={shouldReduceMotion ? undefined : {height: "calc(100% - 2.5rem)"}}
              viewport={{once: true}}
              transition={{duration: 1.1, ease: "easeOut"}}
            />
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-ink/10 lg:block" />
            <motion.div
              aria-hidden="true"
              className="absolute left-[10%] top-10 hidden h-px bg-gradient-to-r from-cyanLogo via-mintCta to-violetLogo lg:block"
              initial={{width: "5%"}}
              whileInView={shouldReduceMotion ? undefined : {width: "80%"}}
              viewport={{once: true}}
              transition={{duration: 1.1, ease: "easeOut"}}
            />
            {steps.map((step, index) => {
              const Icon = icons[index] ?? MapPinned;
              const isTrustLayer = index === 2;
              const cardClass = isTrustLayer
                ? "border-mintCta/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,255,249,0.96)_100%)] shadow-[0_16px_40px_rgba(53,245,155,0.14)]"
                : "border-ink/10 bg-white shadow-[0_14px_34px_rgba(16,24,40,0.055)]";
              const iconClass = isTrustLayer
                ? "bg-mintCta text-panelDark shadow-[0_0_0_5px_rgba(255,255,255,0.9)]"
                : "bg-ink text-white shadow-[0_0_0_5px_rgba(255,255,255,0.9)]";

              return (
                <motion.article
                  key={step.title}
                  className={`relative rounded-lg p-4 pl-16 transition duration-200 hover:-translate-y-0.5 sm:pl-4 lg:pt-6 ${cardClass}`}
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.06}}
                >
                  <div className="flex items-start gap-3 sm:flex-col sm:gap-4 lg:items-center">
                    <span
                      className={`absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full sm:static lg:mx-auto ${iconClass}`}
                    >
                      <Icon aria-hidden="true" size={17} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 lg:justify-center">
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyanLogo">
                          {t("stepLabel", {number: index + 1})}
                        </p>
                        {isTrustLayer ? (
                          <span className="rounded-full border border-mintCta/24 bg-mintCta/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-mintCta">
                            {t("trustBadge")}
                          </span>
                        ) : null}
                      </div>
                      <h2 className="mt-3 font-sans text-[1.02rem] font-medium text-ink lg:text-center">
                        {step.title}
                      </h2>
                      <p className="mt-2 text-[0.92rem] leading-6 text-muted lg:text-center">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-muted">{t("note")}</p>
        </div>
      </Container>
    </section>
  );
}
