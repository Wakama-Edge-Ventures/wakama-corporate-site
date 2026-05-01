"use client";

import {AnimatePresence, motion, useReducedMotion} from "framer-motion";
import {ArrowRight} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import {useState} from "react";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {cn} from "@/lib/utils";

type Persona = {
  tab: string;
  pain: string;
  value: string;
  cta: string;
};

export function PersonaTabsSection() {
  const t = useTranslations("personas");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const personas = t.raw("items") as Persona[];
  const [active, setActive] = useState(0);
  const current = personas[active];
  const ctaHref = current.tab === "IMF" ? `/${locale}/solutions/imf` : `/${locale}/#contact`;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} align="center" />

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2 rounded-full border border-ink/10 bg-softLight p-2">
          {personas.map((persona, index) => (
            <button
              key={persona.tab}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "min-h-11 rounded-full px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                active === index ? "bg-ink text-white" : "text-muted hover:bg-white hover:text-ink",
              )}
            >
              {persona.tab}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-lg border border-ink/10 bg-softLight">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.tab}
              initial={shouldReduceMotion ? false : {opacity: 0, y: 12}}
              animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              exit={shouldReduceMotion ? undefined : {opacity: 0, y: -12}}
              transition={{duration: 0.22}}
              className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2"
            >
              <div className="rounded-lg bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-orangeAccent">
                  {t("painLabel")}
                </p>
                <p className="mt-4 text-lg font-semibold leading-8 text-ink">{current.pain}</p>
              </div>
              <div className="rounded-lg bg-ink p-5 text-white">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-mintCta">
                  {t("valueLabel")}
                </p>
                <p className="mt-4 text-lg font-semibold leading-8">{current.value}</p>
                <Button href={ctaHref} className="mt-6" size="sm">
                  {current.cta}
                  <ArrowRight aria-hidden="true" size={16} />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
