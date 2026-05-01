"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

import {HomeV2SectionIntro} from "./HomeV2SectionIntro";

export function HomeV2ValueLinesSection() {
  const t = useTranslations("homeV2.valueLines");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as Array<{label: string; title: string; body: string}>;

  return (
    <section id="solutions" className="bg-white py-16 sm:py-20">
      <Container>
        <HomeV2SectionIntro title={t("title")} description={t("subtitle")} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {cards.map((card, index) => {
            const featured = index === 0;

            return (
              <motion.div
                key={card.title}
                className={[
                  "rounded-lg border p-6 shadow-[0_16px_42px_rgba(16,24,40,0.055)]",
                  featured
                    ? "border-mintCta/24 bg-[#EEF4F2] lg:-mt-3"
                    : "border-ink/8 bg-[#F7FAFC]",
                ].join(" ")}
                initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.08}}
              >
                <p className={featured ? "font-mono text-xs font-semibold uppercase tracking-[0.18em] text-mintCta" : "font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyanLogo"}>
                  {card.label}
                </p>
                <h3 className="mt-4 font-sans text-[1.28rem] font-medium leading-6 text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-muted">{card.body}</p>

                {featured ? (
                  <Button href={`/${locale}/pilot`} size="sm" className="mt-5 font-medium">
                    {t("featuredCta")}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Button>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
