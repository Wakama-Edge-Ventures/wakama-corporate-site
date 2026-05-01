"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Compass, LineChart, Sprout} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const icons = [Compass, LineChart, Sprout];

export function PilotWhySection() {
  const t = useTranslations("pilotPage.why");
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as Array<{title: string; body: string}>;

  return (
    <section className="bg-softLight py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
            {t("description")}
          </p>
        </div>

        <motion.div
          className="mt-8 grid gap-3 md:grid-cols-3"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{once: true, margin: "-80px"}}
          variants={{hidden: {}, visible: {transition: {staggerChildren: 0.08}}}}
        >
          {cards.map((card, index) => {
            const Icon = icons[index] ?? Compass;

            return (
              <motion.article
                key={card.title}
                className="h-full rounded-lg border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)] transition duration-200 hover:-translate-y-1 hover:border-mintCta/25 hover:shadow-panel"
                variants={{
                  hidden: {opacity: 0, y: 18},
                  visible: {opacity: 1, y: 0},
                }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-white">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <h2 className="mt-4 font-display text-[1.12rem] font-medium leading-6 text-ink">{card.title}</h2>
                <p className="mt-2.5 text-sm leading-6 text-muted">{card.body}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
