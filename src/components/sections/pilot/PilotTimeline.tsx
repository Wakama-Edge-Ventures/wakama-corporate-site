"use client";

import {motion, useReducedMotion} from "framer-motion";
import {CalendarDays} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function PilotTimeline() {
  const t = useTranslations("pilotPage.timeline");
  const shouldReduceMotion = useReducedMotion();
  const steps = t.raw("steps") as Array<{title: string; body: string}>;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
            {t("description")}
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-ink/10 bg-softLight p-4 sm:p-5">
          <div className="relative grid gap-4 lg:grid-cols-4">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-ink/10 lg:bottom-auto lg:left-8 lg:right-8 lg:top-8 lg:h-px lg:w-auto" />
            <div
              aria-hidden="true"
              className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-cyanLogo via-mintCta to-orangeAccent lg:bottom-auto lg:left-8 lg:right-8 lg:top-8 lg:h-px lg:w-auto lg:bg-gradient-to-r"
            />

            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                className="relative rounded-lg border border-ink/10 bg-white p-4 pl-14 shadow-[0_16px_44px_rgba(16,24,40,0.06)] transition duration-200 hover:-translate-y-1 hover:border-mintCta/25 lg:pl-4 lg:pt-14"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.08}}
              >
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-ink text-white lg:left-4 lg:top-4">
                  <CalendarDays aria-hidden="true" size={17} />
                </span>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyanLogo">
                  {t("stepLabel", {number: index + 1})}
                </p>
                <h2 className="mt-2 font-display text-[1.05rem] font-medium leading-6 text-ink">{step.title}</h2>
                <p className="mt-2.5 text-sm leading-6 text-muted">{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
