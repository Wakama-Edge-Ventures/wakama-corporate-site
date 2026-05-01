"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, CheckCircle2, PlayCircle} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {DataFlowVisual} from "@/components/visuals/DataFlowVisual";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const proofs = t.raw("proofs") as string[];

  return (
    <section className="relative overflow-hidden bg-backgroundDeep pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-[7.5rem]">
      <div className="absolute inset-0 data-grid opacity-35" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-8 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,224,232,0.18),rgba(181,139,232,0.08)_42%,transparent_68%)] blur-2xl"
        animate={shouldReduceMotion ? undefined : {opacity: [0.52, 0.82, 0.52], scale: [1, 1.04, 1]}}
        transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(53,245,155,0.15),transparent_34%),radial-gradient(circle_at_78%_62%,rgba(33,216,130,0.12),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.56, 0.9, 0.56], scale: [1, 1.025, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-navy to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 xl:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 22}}
            animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: "easeOut"}}
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-3 py-2">
              <Image src="/brand/wakama-logo.png" alt="" width={104} height={28} className="h-7 w-auto" priority />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyanLogo">
                {t("identity")}
              </span>
            </div>

            <h1 className="max-w-2xl font-display text-[clamp(2.05rem,3.1vw,3.15rem)] font-semibold leading-[1.11] text-white">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
              {t("subtitle")}
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-cyanLogo/86">
              {t("positioning")}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/pilot`} size="lg">
                {t("primaryCta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href={`/${locale}/#platform`} variant="secondary" size="lg">
                <PlayCircle aria-hidden="true" size={18} />
                {t("secondaryCta")}
              </Button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {proofs.map((proof) => (
                <div key={proof} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3">
                  <CheckCircle2 aria-hidden="true" size={17} className="shrink-0 text-mintCta" />
                  <span className="text-sm text-white/72">{proof}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="min-w-0"
            initial={shouldReduceMotion ? false : {opacity: 0, x: 24}}
            animate={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.12, ease: "easeOut"}}
          >
            <DataFlowVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
