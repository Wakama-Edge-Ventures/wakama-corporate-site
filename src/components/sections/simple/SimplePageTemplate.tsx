"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Blocks, FileCheck2, LayoutDashboard, ShieldCheck} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {cn} from "@/lib/utils";

const icons = [Blocks, ShieldCheck, FileCheck2, LayoutDashboard];

type SimplePageTemplateProps = {
  namespace: string;
  heroPrimaryHref: string;
  heroSecondaryHref?: string;
  finalPrimaryHref: string;
  finalSecondaryHref?: string;
};

type CardItem = {
  title: string;
  body: string;
};

function withLocale(locale: string, href: string) {
  if (/^https?:\/\//.test(href)) {
    return href;
  }

  return `/${locale}${href}`;
}

export function SimplePageTemplate({
  namespace,
  heroPrimaryHref,
  heroSecondaryHref,
  finalPrimaryHref,
  finalSecondaryHref,
}: SimplePageTemplateProps) {
  const t = useTranslations(namespace);
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const cards = t.raw("cards") as CardItem[];

  return (
    <>
      <section className="border-b border-white/[0.06] bg-backgroundDeep pb-12 pt-24 sm:pt-28 lg:pb-14 lg:pt-[6.35rem]">
        <Container>
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-cyanLogo">
              {t("hero.eyebrow")}
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(1.8rem,3.55vw,3.3rem)] font-light leading-[1.08] tracking-[-0.03em] text-white">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-[0.99rem] leading-7 text-white/70 sm:text-[1.04rem]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={withLocale(locale, heroPrimaryHref)} size="md">
                {t("hero.primaryCta")}
              </Button>
              {heroSecondaryHref ? (
                <Button href={withLocale(locale, heroSecondaryHref)} size="md" variant="secondary">
                  {t("hero.secondaryCta")}
                </Button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-18 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.55rem)] font-normal leading-[1.12] text-ink">
              {t("intro.title")}
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.03rem]">
              {t("intro.body")}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card, index) => {
              const Icon = icons[index % icons.length] ?? Blocks;

              return (
                <motion.article
                  key={card.title}
                  className={cn(
                    "rounded-[1.1rem] border border-ink/10 bg-softLight p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]",
                    cards.length > 4 ? "xl:min-h-[13rem]" : "xl:min-h-[12rem]",
                  )}
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.06}}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-[1.08rem] font-medium leading-6 text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted">{card.body}</p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#0B1020] py-16">
        <Container>
          <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(80,212,196,0.18),_transparent_38%),linear-gradient(135deg,#0B1020_0%,#121A31_100%)] px-6 py-8 shadow-[0_28px_80px_rgba(11,16,32,0.42)] sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <h2 className="font-display text-[clamp(1.55rem,2.4vw,2.35rem)] font-normal leading-[1.12] text-white">
                {t("finalCta.title")}
              </h2>
              <p className="mt-3 max-w-2xl text-[0.97rem] leading-7 text-white/70 sm:text-[1.01rem]">
                {t("finalCta.subtitle")}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={withLocale(locale, finalPrimaryHref)} size="md">
                {t("finalCta.primaryCta")}
              </Button>
              {finalSecondaryHref ? (
                <Button href={withLocale(locale, finalSecondaryHref)} size="md" variant="secondary">
                  {t("finalCta.secondaryCta")}
                </Button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
