"use client";

import {motion, useReducedMotion} from "framer-motion";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

import {HomeV2SectionIntro} from "./HomeV2SectionIntro";

export function HomeV2ProblemSection() {
  const t = useTranslations("homeV2.problem");
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as Array<{title: string; body: string}>;

  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20">
      <Container>
        <HomeV2SectionIntro title={t("title")} description={t("subtitle")} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="rounded-lg border border-ink/8 bg-white p-6 shadow-[0_16px_42px_rgba(16,24,40,0.055)]"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
              transition={{delay: index * 0.08}}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyanLogo">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-sans text-[1.28rem] font-medium leading-6 text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-muted">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
