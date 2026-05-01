"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ChartNoAxesColumnIncreasing, CircleDollarSign, ShieldQuestion} from "lucide-react";
import {useTranslations} from "next-intl";

import {Card} from "@/components/ui/Card";
import {Container} from "@/components/ui/Container";
import {SectionHeader} from "@/components/ui/SectionHeader";

const icons = [CircleDollarSign, ShieldQuestion, ChartNoAxesColumnIncreasing];

export function ProblemSection() {
  const t = useTranslations("problem");
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as Array<{title: string; body: string}>;

  return (
    <section id="solutions" className="bg-softLight py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = icons[index] ?? ShieldQuestion;

            return (
              <motion.div
                key={card.title}
                initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.08}}
              >
                <Card tone="light" className="h-full">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-white">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{card.body}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
