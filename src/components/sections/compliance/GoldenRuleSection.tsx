"use client";

import {motion, useReducedMotion} from "framer-motion";
import {FileCheck2, Scale} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function GoldenRuleSection() {
  const t = useTranslations("compliancePage.goldenRule");
  const shouldReduceMotion = useReducedMotion();
  const split = t.raw("split") as Array<{title: string; body: string}>;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
              {t("title")}
            </h2>
            <p className="mt-4 font-display text-[clamp(1.72rem,2.7vw,2.45rem)] font-light leading-[1.14] text-ink">
              {t("strong")}
            </p>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1rem]">{t("body")}</p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {split.map((item, index) => {
              const Icon = index === 0 ? FileCheck2 : Scale;

              return (
                <motion.div
                  key={item.title}
                  className="rounded-lg border border-ink/10 bg-softLight p-4 shadow-[0_12px_28px_rgba(16,24,40,0.06)]"
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.08}}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="mt-4 font-sans text-[1rem] font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-[0.87rem] leading-6 text-muted">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
