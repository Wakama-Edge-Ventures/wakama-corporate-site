"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Archive, Bell, Bot, FileText, Gauge, MapPinned, Signal, UserRound} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const icons = [UserRound, FileText, MapPinned, Signal, Gauge, Bot, Bell, Archive];

export function AuditTrailSection() {
  const t = useTranslations("compliancePage.auditTrail");
  const shouldReduceMotion = useReducedMotion();
  const items = t.raw("items") as string[];

  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <div className="absolute inset-0 data-grid opacity-18" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(53,245,155,0.14),transparent_34%),radial-gradient(circle_at_86%_72%,rgba(99,224,232,0.13),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.52, 0.86, 0.52], scale: [1, 1.02, 1]}}
        transition={{duration: 7.5, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-white">
              {t("title")}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-white/68 sm:text-[1rem]">{t("body")}</p>
          </div>
          <motion.div
            className="rounded-lg border border-white/10 bg-white/[0.05] p-4 shadow-[0_20px_56px_rgba(7,10,18,0.2)] backdrop-blur-xl sm:p-5"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{once: true, margin: "-80px"}}
            variants={{hidden: {}, visible: {transition: {staggerChildren: 0.05}}}}
          >
            <div className="grid gap-2.5 sm:grid-cols-2">
              {items.map((item, index) => {
                const Icon = icons[index] ?? Archive;

                return (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-backgroundDeep/58 p-3.5"
                    variants={{hidden: {opacity: 0, y: 12}, visible: {opacity: 1, y: 0}}}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-mintCta/20 bg-mintCta/10 text-mintCta">
                      <Icon aria-hidden="true" size={17} />
                    </span>
                    <span className="text-[13.5px] font-medium leading-6 text-white/76 sm:text-sm">{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
