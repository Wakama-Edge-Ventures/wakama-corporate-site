"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Check, FileCheck2, Scale} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function GovernanceDoctrineSection() {
  const t = useTranslations("companyPage.governance");
  const shouldReduceMotion = useReducedMotion();
  const wakama = t.raw("wakama") as string[];
  const institution = t.raw("institution") as string[];

  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(1.62rem,2.45vw,2.35rem)] font-normal leading-[1.12] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-7 text-muted sm:text-[1.02rem]">{t("body")}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <DoctrineCard
            title={t("wakamaTitle")}
            items={wakama}
            Icon={FileCheck2}
            dark={false}
            delay={0}
            shouldReduceMotion={shouldReduceMotion}
          />
          <DoctrineCard
            title={t("institutionTitle")}
            items={institution}
            Icon={Scale}
            dark
            delay={0.08}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>
      </Container>
    </section>
  );
}

function DoctrineCard({
  title,
  items,
  Icon,
  dark,
  delay,
  shouldReduceMotion,
}: {
  title: string;
  items: string[];
  Icon: typeof FileCheck2;
  dark?: boolean;
  delay: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.article
      className={
        dark
          ? "rounded-[1.25rem] border border-white/10 bg-panelDark p-5 shadow-[0_22px_60px_rgba(11,16,32,0.18)]"
          : "rounded-[1.25rem] border border-ink/10 bg-softLight p-5 shadow-[0_18px_50px_rgba(16,24,40,0.05)]"
      }
      initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
      viewport={{once: true, margin: "-80px"}}
      transition={{delay}}
    >
      <div className="flex items-center gap-3">
        <span
          className={
            dark
              ? "flex h-10 w-10 items-center justify-center rounded-full border border-mintCta/20 bg-mintCta/10 text-mintCta"
              : "flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white"
          }
        >
          <Icon aria-hidden="true" size={18} />
        </span>
        <h3 className={dark ? "font-display text-[1.08rem] font-medium text-white" : "font-display text-[1.08rem] font-medium text-ink"}>
          {title}
        </h3>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className={
              dark
                ? "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3"
                : "flex items-start gap-3 rounded-2xl border border-ink/10 bg-white px-3.5 py-3"
            }
          >
            <Check aria-hidden="true" size={17} className={dark ? "mt-0.5 shrink-0 text-mintCta" : "mt-0.5 shrink-0 text-cyanLogo"} />
            <span className={dark ? "text-sm leading-6 text-white/74" : "text-sm leading-6 text-muted"}>{item}</span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
