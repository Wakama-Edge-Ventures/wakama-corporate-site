"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Building2, Landmark} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const icons = [Landmark, Building2];

export function CompanyStructureSection() {
  const t = useTranslations("companyPage.structure");
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as Array<{title: string; body: string}>;

  return (
    <section className="bg-softLight py-16 sm:py-18">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.45rem)] font-normal leading-[1.12] text-ink">
            {t("title")}
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = icons[index] ?? Building2;

            return (
              <motion.article
                key={card.title}
                className="rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.05)]"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.07}}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                  <Icon aria-hidden="true" size={18} />
                </span>
                <h3 className="mt-4 font-display text-[1.08rem] font-medium text-ink">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-muted">{card.body}</p>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-6 text-muted">{t("line")}</p>
      </Container>
    </section>
  );
}
