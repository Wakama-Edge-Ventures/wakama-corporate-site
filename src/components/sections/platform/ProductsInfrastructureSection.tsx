"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, ChartSpline, ShieldCheck, UsersRound, type LucideIcon} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Card} from "@/components/ui/Card";
import {Container} from "@/components/ui/Container";
import {cn} from "@/lib/utils";

const icons: LucideIcon[] = [UsersRound, ChartSpline, ShieldCheck];

export function ProductsInfrastructureSection() {
  const t = useTranslations("platformPage.products");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const items = t.raw("items") as Array<{title: string; label: string; body: string; audience: string}>;

  return (
    <section className="bg-softLight py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1rem]">
              {t("description")}
            </p>
            <p className="mt-3 text-[0.9rem] leading-6 text-muted">{t("positioning")}</p>
          </div>
          <Button href={`/${locale}/pilot`} variant="secondary" size="sm" className="w-full sm:w-auto">
            {t("discreetCta")}
            <ArrowRight aria-hidden="true" size={16} />
          </Button>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.06fr_0.97fr_0.97fr]">
          {items.map((item, index) => {
            const Icon = icons[index] ?? UsersRound;
            const featured = index === 0;

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.08}}
              >
                <Card
                  tone={featured ? "dark" : "light"}
                  className={cn(
                    "h-full min-h-[282px] p-5",
                    featured &&
                      "relative overflow-hidden border-mintCta/30 bg-panelDark shadow-glow lg:-translate-y-0.5",
                  )}
                >
                  {featured ? (
                    <div className="absolute right-[-10%] top-[-8%] h-40 w-40 rounded-full bg-mintCta/14 blur-3xl" />
                  ) : null}
                  <span
                    className={cn(
                      "relative flex h-11 w-11 items-center justify-center rounded-lg",
                      featured ? "bg-mintCta text-ink" : "bg-backgroundDeep text-cyanLogo",
                    )}
                  >
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  {featured ? (
                    <span className="relative mt-4 inline-flex rounded-full border border-mintCta/24 bg-mintCta/12 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-mintCta">
                      {t("coreBadge")}
                    </span>
                  ) : null}
                  <p
                    className={cn(
                    "relative mt-4 font-mono text-[11px] uppercase tracking-[0.16em]",
                    featured ? "text-mintCta" : "text-orangeAccent",
                  )}
                >
                  {item.label}
                </p>
                  <h3
                    className={cn(
                      "relative mt-2.5 font-display text-[1.45rem] font-semibold leading-8",
                      featured ? "text-white" : "text-ink",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "relative mt-3 text-[0.9rem] leading-6",
                      featured ? "text-white/72" : "text-muted",
                    )}
                  >
                    {item.body}
                  </p>
                  <div
                    className={cn(
                      "relative mt-5 rounded-lg border p-3.5",
                      featured
                        ? "border-white/10 bg-white/[0.055] text-white/74"
                        : "border-ink/10 bg-white text-muted",
                    )}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
                      {t("audienceLabel")}
                    </p>
                    <p className="mt-2 text-[0.87rem] leading-6">{item.audience}</p>
                  </div>
                  {featured ? (
                    <div className="relative mt-5">
                      <Button href={`/${locale}/pilot`} size="sm" className="w-full sm:w-auto">
                        {t("coreCta")}
                        <ArrowRight aria-hidden="true" size={16} />
                      </Button>
                    </div>
                  ) : null}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
