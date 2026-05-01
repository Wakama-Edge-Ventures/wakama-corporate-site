"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ShieldCheck} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {SectionHeader} from "@/components/ui/SectionHeader";

export function ComplianceSection() {
  const t = useTranslations("compliance");
  const shouldReduceMotion = useReducedMotion();
  const rows = t.raw("matrix") as Array<{activity: string; owner: string}>;

  return (
    <section id="compliance" className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 data-grid opacity-15" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(53,245,155,0.16),transparent_34%),radial-gradient(circle_at_78%_74%,rgba(33,216,130,0.12),transparent_30%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.5, 0.88, 0.5], scale: [1, 1.025, 1]}}
        transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader dark eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
            <div className="mt-8 rounded-lg border border-mintCta/24 bg-mintCta/10 p-5">
              <div className="flex gap-3">
                <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-mintCta" size={22} />
                <p className="text-lg font-semibold leading-8 text-white">{t("rule")}</p>
              </div>
            </div>
          </div>

          <motion.div
            className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045]"
            initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true}}
          >
            {rows.map((row) => (
              <div key={row.activity} className="grid grid-cols-[1fr_1fr] border-b border-white/10 last:border-b-0">
                <div className="px-5 py-4 text-sm font-medium text-white/66">{row.activity}</div>
                <div className="border-l border-white/10 px-5 py-4 text-sm font-semibold text-white">
                  {row.owner}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
