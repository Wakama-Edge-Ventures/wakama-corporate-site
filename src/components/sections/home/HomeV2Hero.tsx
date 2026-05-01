"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, CheckCircle2, Sparkles} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

export function HomeV2Hero() {
  const t = useTranslations("homeV2.hero");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const proofs = t.raw("proofs") as string[];
  const steps = t.raw("visual.steps") as string[];
  const highlights = t.raw("visual.highlights") as Array<{label: string; value: string}>;

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-backgroundDeep pb-14 pt-24 sm:pt-28 lg:pb-16 lg:pt-[6.75rem]">
      <div className="absolute inset-0 data-grid opacity-20" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(53,245,155,0.12),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(99,224,232,0.12),transparent_28%),radial-gradient(circle_at_76%_78%,rgba(181,139,232,0.1),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.58, 0.88, 0.58], scale: [1, 1.02, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(320px,26.5rem)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 20}}
            animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: "easeOut"}}
          >
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyanLogo">
              {t("eyebrow")}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(1.78rem,3.5vw,3.25rem)] font-light leading-[1.08] text-white">
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
                href={`/${locale}/#how-it-works`}
                variant="secondary"
                size="md"
                className="font-medium"
              >
                {t("secondaryCta")}
              </Button>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[12px] text-white/72 sm:text-[13px]">
              <Sparkles aria-hidden="true" size={14} className="text-cyanLogo" />
              <span>{t("proofLine")}</span>
            </div>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-2 xl:max-w-[34rem]">
              {proofs.map((proof) => (
                <div
                  key={proof}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-3.5 py-2.5"
                >
                  <CheckCircle2 aria-hidden="true" size={17} className="shrink-0 text-mintCta" />
                  <span className="text-[13.5px] font-normal text-white/74 sm:text-sm">{proof}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-[0_22px_58px_rgba(7,10,18,0.22)] backdrop-blur-xl sm:p-4 lg:ml-auto lg:w-full lg:max-w-[26.5rem]"
            initial={shouldReduceMotion ? false : {opacity: 0, x: 20}}
            animate={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
            transition={{duration: 0.78, delay: 0.12, ease: "easeOut"}}
          >
            <div className="absolute inset-0 data-grid opacity-15" />
            <div className="absolute right-[-18%] top-[-10%] h-56 w-56 rounded-full bg-cyanLogo/12 blur-3xl" />
            <div className="absolute bottom-[-16%] left-[-10%] h-52 w-52 rounded-full bg-mintCta/10 blur-3xl" />

            <div className="relative">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyanLogo sm:text-xs">
                {t("visual.label")}
              </p>
              <h2 className="mt-2 font-sans text-[1.05rem] font-medium leading-6 text-white sm:text-[1.12rem]">
                {t("visual.title")}
              </h2>

              <div className="mt-4 space-y-2">
                {steps.map((step, index) => (
                  <div key={step} className="relative">
                    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-backgroundDeep/62 px-3 py-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyanLogo/22 bg-cyanLogo/10 font-mono text-[11px] font-semibold text-cyanLogo">
                        {index + 1}
                      </span>
                      <p className="text-[13.5px] font-normal text-white/82 sm:text-sm">{step}</p>
                    </div>

                    {index < steps.length - 1 ? (
                      <div className="flex h-5 items-center justify-center" aria-hidden="true">
                        <div className="relative h-full w-px bg-white/12">
                          {!shouldReduceMotion ? (
                            <motion.span
                              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-mintCta shadow-[0_0_14px_rgba(53,245,155,0.6)]"
                              animate={{top: ["0%", "100%"], opacity: [0, 1, 0]}}
                              transition={{duration: 1.7, repeat: Infinity, ease: "easeInOut", delay: index * 0.16}}
                            />
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-2"
                    initial={shouldReduceMotion ? false : {opacity: 0, y: 10}}
                    animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                    transition={{delay: 0.42 + index * 0.06}}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[12.5px] font-normal leading-5 text-white sm:text-[13px]">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
