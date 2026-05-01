"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

export function CompanyHero() {
  const t = useTranslations("companyPage.hero");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-ink/8 bg-white pb-10 pt-28 sm:pb-12 sm:pt-32">
      <Container>
        <motion.div
          className="max-w-4xl"
          initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
          animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
          transition={{duration: 0.65, ease: "easeOut"}}
        >
          <span className="inline-flex rounded-full border border-ink/10 bg-softLight px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyanLogo">
            {t("eyebrow")}
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(1.86rem,3.65vw,3.35rem)] font-light leading-[1.08] tracking-[-0.03em] text-ink">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-3xl text-[0.99rem] leading-7 text-muted sm:text-[1.05rem]">
            {t("subtitle")}
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-ink/10 bg-softLight px-4 py-3 text-sm leading-6 text-muted">
            {t("doctrine")}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={`/${locale}/pilot`} size="md">
              {t("primaryCta")}
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button href={`/${locale}/compliance`} size="md" variant="dark">
              {t("secondaryCta")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
