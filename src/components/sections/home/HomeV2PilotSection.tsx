"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, CheckCircle2} from "lucide-react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {trackConversionLink} from "@/lib/analytics";

export function HomeV2PilotSection() {
  const t = useTranslations("homeV2.pilot");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const metrics = t.raw("metrics") as Array<{value: string; label: string}>;
  const deliverables = t.raw("deliverables") as string[];

  return (
    <section className="relative overflow-hidden bg-[#0B1020] py-16 sm:py-20">
      <div className="absolute inset-0 data-grid opacity-16" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(53,245,155,0.12),transparent_32%),radial-gradient(circle_at_82%_76%,rgba(99,224,232,0.1),transparent_30%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.52, 0.82, 0.52], scale: [1, 1.02, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />

      <Container className="relative">
        <div className="max-w-4xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-orangeAccent">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.85rem)] font-normal leading-[1.12] text-white">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-3xl text-[1rem] leading-7 text-white/72 sm:text-[1.04rem]">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-9 rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-[0_22px_60px_rgba(7,10,18,0.18)] sm:p-5 lg:p-6">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-white/[0.05] p-4"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.06}}
              >
                <p className="font-mono text-[1.45rem] font-medium text-mintCta sm:text-[1.55rem]">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-6 text-white/62 sm:text-sm">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-3.5 py-3.5"
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.2 + index * 0.05}}
                >
                  <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-cyanLogo" />
                  <span className="text-[13.5px] leading-6 text-white/72 sm:text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-lg border border-mintCta/18 bg-mintCta/[0.06] p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-mintCta">
                {t("ctaLabel")}
              </p>
              <p className="mt-3 text-[0.98rem] leading-7 text-white/74">{t("ctaBody")}</p>
              <Button href={`/${locale}/pilot`} size="md" className="mt-5 font-medium">
                {t("cta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Link
                href={`/${locale}/diagnostic-agricredit`}
                onClick={() => trackConversionLink(`/${locale}/diagnostic-agricredit`, "home_pilot_section")}
                className="mt-4 inline-flex text-sm font-medium text-cyanLogo transition hover:text-white"
              >
                {t("diagnosticLink")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
