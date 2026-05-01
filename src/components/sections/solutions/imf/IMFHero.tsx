"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, CheckCircle2, FileCheck2, Gauge, MapPinned} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

export function IMFHero() {
  const t = useTranslations("solutionsImf.hero");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const proofs = t.raw("proofs") as string[];
  const preview = t.raw("preview") as Array<{label: string; value: string}>;

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-backgroundDeep pb-14 pt-24 sm:pt-28 lg:pb-16 lg:pt-[6.8rem]">
      <div className="absolute inset-0 data-grid opacity-30" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(53,245,155,0.16),transparent_34%),radial-gradient(circle_at_78%_28%,rgba(99,224,232,0.15),transparent_30%),radial-gradient(circle_at_80%_78%,rgba(181,139,232,0.12),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.58, 0.9, 0.58], scale: [1, 1.025, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(330px,26rem)] lg:items-center lg:gap-14 xl:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 22}}
            animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: "easeOut"}}
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
              {t("eyebrow")}
            </p>
            <h1 className="mt-5 max-w-[15ch] font-display text-[clamp(2rem,3.8vw,3.85rem)] font-light leading-[1.06] text-white">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-white/72 sm:text-[1.08rem] sm:leading-8">
              {t("subtitle")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/pilot`} size="md" className="font-medium">
                {t("primaryCta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button
                href={`/${locale}/solutions/imf#imf-workflow`}
                variant="secondary"
                size="md"
                className="font-medium"
              >
                {t("secondaryCta")}
              </Button>
            </div>
            <p className="mt-4 max-w-xl text-sm font-medium text-white/78">{t("promise")}</p>
            <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {proofs.map((proof) => (
                <div
                  key={proof}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-3.5 py-2.5"
                >
                  <CheckCircle2 aria-hidden="true" size={17} className="shrink-0 text-mintCta" />
                  <span className="text-[13.5px] font-normal text-white/74 sm:text-sm">{proof}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, x: 24}}
            animate={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
            transition={{duration: 0.75, delay: 0.12, ease: "easeOut"}}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_70px_rgba(7,10,18,0.28)] backdrop-blur-xl sm:p-5 lg:max-w-[26rem]"
          >
            <div className="absolute inset-0 data-grid opacity-20" />
            <div className="absolute right-[-24%] top-[-18%] h-64 w-64 rounded-full bg-mintCta/16 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/48">
                    {t("mockupLabel")}
                  </p>
                  <p className="mt-2 font-sans text-[1.05rem] font-medium text-white sm:text-[1.12rem]">
                    {t("mockupTitle")}
                  </p>
                </div>
                <span className="rounded-full border border-mintCta/25 bg-mintCta/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-mintCta">
                  {t("mockupStatus")}
                </span>
              </div>

              <div className="mt-5 grid gap-2.5">
                {preview.map((item, index) => {
                  const Icon = [FileCheck2, MapPinned, Gauge][index] ?? FileCheck2;
                  const tone = ["text-cyanLogo", "text-mintCta", "text-orangeAccent"][index] ?? "text-cyanLogo";

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-backgroundDeep/60 px-3.5 py-3"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
                        <Icon aria-hidden="true" size={18} className={tone} />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/46 sm:text-xs">
                          {item.label}
                        </p>
                        <p className="mt-1 text-[0.95rem] font-medium text-white sm:text-[1rem]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-1.5 rounded-full bg-gradient-to-r from-cyanLogo via-mintCta to-orangeAccent"
                  initial={{width: "18%"}}
                  animate={shouldReduceMotion ? undefined : {width: ["18%", "100%", "18%"]}}
                  transition={{duration: 5.6, repeat: Infinity, ease: "easeInOut"}}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
