"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, Check, Clock3, FileCheck2, Gauge} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {MetricCounter} from "@/components/ui/MetricCounter";

export function PilotSection() {
  const t = useTranslations("pilot");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const deliverables = t.raw("deliverables") as string[];
  const timeline = t.raw("timeline") as string[];
  const metrics = [
    {value: 90, label: t("days"), tone: "text-mintCta", Icon: Clock3},
    {value: 300, label: t("files"), tone: "text-cyanLogo", Icon: FileCheck2},
    {value: 6, label: t("outputs"), tone: "text-orangeAccent", Icon: Gauge},
  ];

  return (
    <section id="pilot" className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 data-grid opacity-20" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(53,245,155,0.16),transparent_34%),radial-gradient(circle_at_82%_74%,rgba(33,216,130,0.14),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.52, 0.9, 0.52], scale: [1, 1.025, 1]}}
        transition={{duration: 7.5, repeat: Infinity, ease: "easeInOut"}}
      />
      <div className="absolute right-[-12%] top-16 h-80 w-80 rounded-full bg-mintCta/10 blur-3xl" />
      <div className="absolute bottom-[-18%] left-8 h-72 w-72 rounded-full bg-cyanLogo/10 blur-3xl" />
      <Container className="relative">
        <motion.div
          initial={shouldReduceMotion ? false : {opacity: 0, y: 20}}
          whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true}}
          className="max-w-4xl"
        >
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-orangeAccent">{t("eyebrow")}</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-white/72">{t("promise")}</p>
        </motion.div>

        <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.035] p-4 shadow-[0_20px_70px_rgba(7,10,18,0.22)] sm:p-5 lg:p-6">
          <div className="grid gap-3 md:grid-cols-3">
            {metrics.map(({value, label, tone, Icon}, index) => (
              <motion.div
                key={label}
                className="flex min-h-32 items-center gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-[0_16px_48px_rgba(7,10,18,0.18)] transition duration-200 hover:-translate-y-1 hover:border-mintCta/24 hover:bg-white/[0.08]"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.08}}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
                  <Icon aria-hidden="true" size={20} className={tone} />
                </span>
                <div>
                  <p className={`font-mono text-4xl font-semibold ${tone}`}>
                    <MetricCounter value={value} />
                  </p>
                  <p className="mt-1 text-sm text-white/58">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{once: true, margin: "-80px"}}
            variants={{
              hidden: {},
              visible: {transition: {staggerChildren: 0.06}},
            }}
          >
            {deliverables.map((item) => (
              <motion.div
                key={item}
                className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[0_14px_42px_rgba(7,10,18,0.14)] transition duration-200 hover:-translate-y-1 hover:border-cyanLogo/24 hover:bg-white/[0.075]"
                variants={{
                  hidden: {opacity: 0, y: 16},
                  visible: {opacity: 1, y: 0},
                }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mintCta text-ink transition duration-200 group-hover:scale-105">
                  <Check aria-hidden="true" size={17} />
                </span>
                <span className="text-sm font-medium leading-6 text-white/78">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <div className="relative h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyanLogo via-mintCta to-orangeAccent"
                  initial={{width: "18%"}}
                  whileInView={shouldReduceMotion ? undefined : {width: "100%"}}
                  viewport={{once: true}}
                  transition={{duration: 1.3, ease: "easeOut"}}
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {timeline.map((step) => (
                  <span
                    key={step}
                    className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white/62 first:text-left last:text-right"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
            <Button href={`/${locale}/pilot`} className="w-full shadow-[0_0_34px_rgba(53,245,155,0.18)] lg:w-auto">
              {t("cta")}
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
