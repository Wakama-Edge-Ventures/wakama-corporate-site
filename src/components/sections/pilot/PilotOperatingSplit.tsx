"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Check, Scale, Settings2} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function PilotOperatingSplit() {
  const t = useTranslations("pilotPage.operatingSplit");
  const shouldReduceMotion = useReducedMotion();
  const wakamaItems = t.raw("wakamaItems") as string[];
  const institutionItems = t.raw("institutionItems") as string[];

  const columns = [
    {
      title: t("wakamaTitle"),
      items: wakamaItems,
      Icon: Settings2,
      tone: "border-mintCta/26 bg-mintCta/10 text-mintCta",
    },
    {
      title: t("institutionTitle"),
      items: institutionItems,
      Icon: Scale,
      tone: "border-cyanLogo/26 bg-cyanLogo/10 text-cyanLogo",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <div className="absolute inset-0 data-grid opacity-18" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(53,245,155,0.14),transparent_34%),radial-gradient(circle_at_86%_72%,rgba(99,224,232,0.13),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.52, 0.86, 0.52], scale: [1, 1.02, 1]}}
        transition={{duration: 7.5, repeat: Infinity, ease: "easeInOut"}}
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-white">
            {t("title")}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-7 text-white/70 sm:text-[1.04rem]">{t("rule")}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {columns.map(({title, items, Icon, tone}, index) => (
            <motion.div
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_60px_rgba(7,10,18,0.2)] backdrop-blur-xl"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
              transition={{delay: index * 0.08}}
            >
              <div className="flex items-center gap-4">
                <span className={`flex h-10 w-10 items-center justify-center rounded-lg border ${tone}`}>
                  <Icon aria-hidden="true" size={19} />
                </span>
                <h3 className="font-display text-[1.12rem] font-medium text-white">{title}</h3>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-3.5 py-3">
                    <Check aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-mintCta" />
                    <span className="text-sm leading-6 text-white/74">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
