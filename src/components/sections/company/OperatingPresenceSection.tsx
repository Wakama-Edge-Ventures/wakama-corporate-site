"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Building2, MapPinned, ShieldCheck, Waves} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const icons = [MapPinned, Waves, Building2, ShieldCheck];

export function OperatingPresenceSection() {
  const t = useTranslations("companyPage.presence");
  const shouldReduceMotion = useReducedMotion();
  const items = t.raw("items") as Array<{title: string; body: string}>;

  return (
    <section className="bg-softLight py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
            {t("body")}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-[12px] text-muted sm:text-[13px]">
            <span>{t("footprint")}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = icons[index] ?? MapPinned;

            return (
              <motion.article
                key={item.title}
                className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_16px_42px_rgba(16,24,40,0.05)]"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.08}}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-white">
                  <Icon aria-hidden="true" size={19} />
                </span>
                <h3 className="mt-4 font-display text-[1.12rem] font-medium text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-muted">{item.body}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
