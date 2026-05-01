"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowUpRight, CheckCircle2} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function CommunityImpactSection() {
  const t = useTranslations("companyPage.impact");
  const shouldReduceMotion = useReducedMotion();
  const items = t.raw("items") as string[];

  return (
    <section className="bg-softLight py-16 sm:py-18">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.45rem)] font-normal leading-[1.12] text-ink">
              {t("title")}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-muted sm:text-[1.03rem]">{t("body")}</p>
          </div>

          <motion.div
            className="rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.05)]"
            initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-softLight px-3.5 py-3">
                  <CheckCircle2 aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-cyanLogo" />
                  <span className="text-sm leading-6 text-ink/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-[12px] text-muted">
              <ArrowUpRight aria-hidden="true" size={14} className="text-cyanLogo" />
              <span>{t("line")}</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
