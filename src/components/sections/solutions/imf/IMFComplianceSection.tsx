"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ShieldCheck} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

import {IMFSectionIntro} from "./IMFSectionIntro";

export function IMFComplianceSection() {
  const t = useTranslations("solutionsImf.compliance");
  const shouldReduceMotion = useReducedMotion();
  const matrix = t.raw("matrix") as Array<{activity: string; owner: string}>;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <IMFSectionIntro eyebrow={t("eyebrow")} title={t("title")} description={t("body")} />
          <motion.div
            className="rounded-lg border border-ink/10 bg-[linear-gradient(180deg,#F8FBFA_0%,#F4F7F6_100%)] p-4 shadow-[0_16px_42px_rgba(16,24,40,0.05)] sm:p-5"
            initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <div className="mb-4 flex items-center gap-3 rounded-lg bg-ink px-4 py-3.5 text-white">
              <ShieldCheck aria-hidden="true" className="text-mintCta" size={20} />
              <p className="text-sm font-medium">{t("rule")}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {matrix.map((item) => (
                <div key={item.activity} className="flex min-h-16 items-center justify-between gap-4 rounded-lg border border-ink/10 bg-white px-4 py-3.5">
                  <span className="text-sm font-medium text-ink">{item.activity}</span>
                  <span className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted sm:text-xs">
                    {item.owner}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
