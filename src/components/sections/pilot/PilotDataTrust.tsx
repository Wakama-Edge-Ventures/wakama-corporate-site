"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, DatabaseZap, ShieldCheck} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function PilotDataTrust() {
  const t = useTranslations("pilotPage.dataTrust");
  const shouldReduceMotion = useReducedMotion();
  const steps = t.raw("steps") as Array<{title: string; body: string; label?: string}>;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-ink">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
              {t("body")}
            </p>
            <div className="mt-5 inline-flex max-w-2xl items-start gap-2 rounded-lg border border-mintCta/20 bg-mintCta/[0.08] px-3.5 py-3 text-sm leading-6 text-ink/[0.82]">
              <ShieldCheck aria-hidden="true" size={16} className="mt-1 shrink-0 text-mintCta" />
              <span>{t("note")}</span>
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-softLight p-4 sm:p-5">
            <div className="relative grid gap-3 lg:grid-cols-4">
              <div className="absolute left-[1.15rem] top-5 bottom-5 w-px bg-ink/10 lg:bottom-auto lg:left-8 lg:right-8 lg:top-[2.25rem] lg:h-px lg:w-auto" />
              <div className="absolute left-[1.15rem] top-5 bottom-5 w-px bg-gradient-to-b from-cyanLogo via-mintCta to-orangeAccent lg:bottom-auto lg:left-8 lg:right-8 lg:top-[2.25rem] lg:h-px lg:bg-gradient-to-r" />

              {steps.map((step, index) => (
                <motion.article
                  key={step.title}
                  className={`relative rounded-lg border bg-white p-4 pl-14 shadow-[0_14px_42px_rgba(16,24,40,0.06)] lg:pl-4 lg:pt-14 ${
                    index === 2 ? "border-mintCta/35 bg-mintCta/[0.06]" : "border-ink/10"
                  }`}
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.07}}
                >
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
                    {index === 2 ? (
                      <ShieldCheck aria-hidden="true" size={17} className="text-mintCta" />
                    ) : index === steps.length - 1 ? (
                      <ArrowRight aria-hidden="true" size={17} />
                    ) : (
                      <DatabaseZap aria-hidden="true" size={17} />
                    )}
                  </span>
                  <p className="font-display text-[1.05rem] font-medium leading-6 text-ink">{step.title}</p>
                  {step.label ? (
                    <span className="mt-2 inline-flex rounded-full border border-mintCta/22 bg-mintCta/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-mintCta">
                      {step.label}
                    </span>
                  ) : null}
                  <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
