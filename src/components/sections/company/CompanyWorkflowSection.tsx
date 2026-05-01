"use client";

import {motion, useReducedMotion} from "framer-motion";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

type Step = {
  title: string;
  body: string;
};

export function CompanyWorkflowSection() {
  const t = useTranslations("companyPage.workflow");
  const shouldReduceMotion = useReducedMotion();
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-white py-16 sm:py-18">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.45rem)] font-normal leading-[1.12] text-ink">
            {t("title")}
          </h2>
        </div>

        <div className="relative mt-8">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(90deg,rgba(16,24,40,0.08),rgba(53,245,155,0.55),rgba(16,24,40,0.08))] lg:block" />
          <div className="grid gap-3 lg:grid-cols-6">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                className={index === steps.length - 1 ? "relative rounded-[1.15rem] border border-orangeAccent/18 bg-[rgba(255,122,26,0.05)] p-4 shadow-[0_16px_42px_rgba(16,24,40,0.05)]" : "relative rounded-[1.15rem] border border-ink/10 bg-softLight p-4 shadow-[0_16px_42px_rgba(16,24,40,0.05)]"}
                initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.05}}
              >
                <span className={index === steps.length - 1 ? "inline-flex rounded-full border border-orangeAccent/18 bg-white px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-orangeAccent" : "inline-flex rounded-full border border-cyanLogo/18 bg-white px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cyanLogo"}>
                  {t("stepLabel")} {index + 1}
                </span>
                <h3 className="mt-3 font-display text-[1rem] font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-6 inline-flex rounded-full border border-ink/10 bg-softLight px-4 py-2 text-sm text-muted">
          {t("doctrine")}
        </div>
      </Container>
    </section>
  );
}
