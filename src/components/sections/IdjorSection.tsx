"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Cpu, ScanLine} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {IdjorInsightCard} from "@/components/visuals/IdjorInsightCard";

export function IdjorSection() {
  const t = useTranslations("idjor");
  const shouldReduceMotion = useReducedMotion();
  const chips = (t.raw("card.sections") as Array<{title: string}>).map((section) => section.title);

  return (
    <section className="relative overflow-hidden bg-backgroundDeep py-20 sm:py-24">
      <div className="absolute inset-0 data-grid opacity-20" />
      <div className="absolute left-1/2 top-1/3 h-80 w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(181,139,232,0.16),rgba(99,224,232,0.08)_38%,transparent_70%)] blur-3xl" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(53,245,155,0.14),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(33,216,130,0.12),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.48, 0.82, 0.48], scale: [1, 1.02, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <SectionHeader dark eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {chips.map((chip, index) => (
                <motion.div
                  key={chip}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3"
                  initial={shouldReduceMotion ? false : {opacity: 0, x: -12}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.12 + index * 0.06}}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyanLogo/20 bg-cyanLogo/10 text-cyanLogo">
                    {index % 2 === 0 ? <Cpu aria-hidden="true" size={16} /> : <ScanLine aria-hidden="true" size={16} />}
                  </span>
                  <span className="text-sm font-medium text-white/72">{chip}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <IdjorInsightCard />
        </div>
      </Container>
    </section>
  );
}
