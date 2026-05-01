"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, CheckCircle2} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {MetricCounter} from "@/components/ui/MetricCounter";

import {IMFSectionIntro} from "./IMFSectionIntro";

export function IMFROICaseSection() {
  const t = useTranslations("solutionsImf.roi");
  const shouldReduceMotion = useReducedMotion();
  const before = t.raw("before.items") as string[];
  const after = t.raw("after.items") as string[];
  const metrics = t.raw("metrics") as Array<{value: number; suffix: string; label: string}>;

  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 data-grid opacity-18" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(53,245,155,0.14),transparent_34%),radial-gradient(circle_at_86%_72%,rgba(99,224,232,0.13),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.52, 0.86, 0.52], scale: [1, 1.02, 1]}}
        transition={{duration: 7.5, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <IMFSectionIntro eyebrow={t("eyebrow")} title={t("title")} description={t("description")} dark />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {[
            {
              title: t("before.title"),
              items: before,
              tone: "border-orangeAccent/18 bg-[linear-gradient(180deg,rgba(255,122,26,0.09),rgba(255,255,255,0.03))]",
              iconTone: "text-orangeAccent",
            },
            {
              title: t("after.title"),
              items: after,
              tone: "border-mintCta/22 bg-[linear-gradient(180deg,rgba(53,245,155,0.11),rgba(255,255,255,0.04))]",
              iconTone: "text-mintCta",
            },
          ].map((column, index) => (
            <motion.div
              key={column.title}
              className={`rounded-lg border ${column.tone} p-6 shadow-[0_24px_80px_rgba(7,10,18,0.22)] backdrop-blur-xl`}
              initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
              transition={{delay: index * 0.08}}
            >
              <h3 className="font-display text-[1.6rem] font-light text-white">{column.title}</h3>
              <div className="mt-5 grid gap-3">
                {column.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4">
                    <CheckCircle2
                      aria-hidden="true"
                      size={17}
                      className={`mt-0.5 shrink-0 ${column.iconTone}`}
                    />
                    <span className="text-sm leading-6 text-white/76">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_54px_rgba(7,10,18,0.18)]"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.06}}
            >
              <p className="font-mono text-[2.1rem] font-semibold text-mintCta">
                <MetricCounter value={metric.value} />
                {metric.suffix}
              </p>
              <p className="mt-2 flex items-center gap-2 text-[13.5px] font-medium text-white/72 sm:text-sm">
                {metric.label}
                <ArrowRight aria-hidden="true" size={15} className="text-cyanLogo" />
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
