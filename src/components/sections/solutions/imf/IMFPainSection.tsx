"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ClipboardX, Map, Radar, Route} from "lucide-react";
import {useTranslations} from "next-intl";

import {Card} from "@/components/ui/Card";
import {Container} from "@/components/ui/Container";

import {IMFSectionIntro} from "./IMFSectionIntro";

const icons = [Route, Map, ClipboardX, Radar];

export function IMFPainSection() {
  const t = useTranslations("solutionsImf.pain");
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as Array<{title: string; body: string}>;

  return (
    <section className="bg-softLight py-20 sm:py-24">
      <Container>
        <IMFSectionIntro eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{once: true, margin: "-80px"}}
          variants={{hidden: {}, visible: {transition: {staggerChildren: 0.06}}}}
        >
          {cards.map((card, index) => {
            const Icon = icons[index] ?? Route;

            return (
              <motion.div
                key={card.title}
                variants={{hidden: {opacity: 0, y: 18}, visible: {opacity: 1, y: 0}}}
              >
                <Card
                  tone="light"
                  className="h-full border border-ink/10 bg-white p-5 shadow-[0_16px_42px_rgba(16,24,40,0.06)] transition duration-200 hover:-translate-y-1 hover:border-orangeAccent/25 hover:shadow-[0_22px_56px_rgba(16,24,40,0.09)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-white">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h2 className="mt-4 font-sans text-[1.08rem] font-medium text-ink">{card.title}</h2>
                  <p className="mt-3 text-[0.95rem] leading-7 text-muted">{card.body}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        <p className="mt-8 max-w-4xl rounded-lg border border-ink/10 bg-white/76 px-5 py-4 text-[1.02rem] font-medium leading-7 text-ink shadow-[0_14px_34px_rgba(16,24,40,0.04)]">
          {t("statement")}
        </p>
      </Container>
    </section>
  );
}
