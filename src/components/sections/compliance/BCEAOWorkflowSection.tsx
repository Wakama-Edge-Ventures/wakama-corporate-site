"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ClipboardCheck, FileKey2, Landmark, Scale} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const icons = [ClipboardCheck, Landmark, FileKey2, Scale];

export function BCEAOWorkflowSection() {
  const t = useTranslations("compliancePage.bceao");
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as Array<{title: string; body: string}>;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1rem]">
            {t("body")}
          </p>
        </div>
        <motion.div
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{once: true, margin: "-80px"}}
          variants={{hidden: {}, visible: {transition: {staggerChildren: 0.06}}}}
        >
          {cards.map((card, index) => {
            const Icon = icons[index] ?? ClipboardCheck;

            return (
              <motion.div
                key={card.title}
                variants={{hidden: {opacity: 0, y: 18}, visible: {opacity: 1, y: 0}}}
              >
                <div className="h-full rounded-lg border border-ink/10 bg-softLight p-4 shadow-[0_10px_24px_rgba(16,24,40,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-mintCta/20">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="mt-4 font-sans text-[1rem] font-medium leading-6 text-ink">{card.title}</h3>
                  <p className="mt-2 text-[0.87rem] leading-6 text-muted">{card.body}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
