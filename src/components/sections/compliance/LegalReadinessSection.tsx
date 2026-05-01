"use client";

import {motion, useReducedMotion} from "framer-motion";
import {CheckCircle2} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function LegalReadinessSection() {
  const t = useTranslations("compliancePage.legal");
  const shouldReduceMotion = useReducedMotion();
  const items = t.raw("items") as string[];

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
              {t("title")}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-muted sm:text-[1rem]">{t("body")}</p>
          </div>
          <motion.div
            className="grid gap-2.5 rounded-lg border border-ink/10 bg-softLight p-4 sm:grid-cols-2 sm:p-5"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{once: true, margin: "-80px"}}
            variants={{hidden: {}, visible: {transition: {staggerChildren: 0.05}}}}
          >
            {items.map((item) => (
              <motion.div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-ink/10 bg-white p-3.5"
                variants={{hidden: {opacity: 0, y: 12}, visible: {opacity: 1, y: 0}}}
              >
                <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-mintCta" />
                <span className="text-[0.9rem] font-medium leading-6 text-ink">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
