"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ChartSpline, ShieldCheck, UsersRound} from "lucide-react";
import {useTranslations} from "next-intl";

import {Card} from "@/components/ui/Card";
import {Container} from "@/components/ui/Container";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {cn} from "@/lib/utils";

const icons = [UsersRound, ChartSpline, ShieldCheck];

export function ProductsSection() {
  const t = useTranslations("products");
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as Array<{title: string; body: string; label: string}>;

  return (
    <section className="bg-softLight py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = icons[index] ?? ChartSpline;
            const featured = index === 0;

            return (
              <motion.div
                key={card.title}
                initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.08}}
              >
                <Card
                  tone={featured ? "dark" : "light"}
                  className={cn(
                    "h-full min-h-[300px]",
                    featured && "relative overflow-hidden border-mintCta/30 bg-panelDark p-7 shadow-glow lg:-mt-5",
                  )}
                >
                  {featured ? (
                    <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-mintCta/14 blur-3xl" />
                  ) : null}
                  <div className={cn("relative mb-8 flex h-12 w-12 items-center justify-center rounded-lg", featured ? "bg-mintCta text-ink" : "bg-ink text-white")}>
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <p className={cn("relative font-mono text-xs uppercase tracking-[0.16em]", featured ? "text-mintCta" : "text-orangeAccent")}>
                    {card.label}
                  </p>
                  <h3 className={cn("relative mt-3 font-display text-2xl font-semibold", featured ? "text-white" : "text-ink")}>
                    {card.title}
                  </h3>
                  <p className={cn("relative mt-5 text-sm leading-7", featured ? "text-white/68" : "text-muted")}>
                    {card.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
