"use client";

import {motion, useReducedMotion} from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  LayoutDashboard,
  RadioTower,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

const visualIcons: LucideIcon[] = [RadioTower, BrainCircuit, ShieldCheck, LayoutDashboard];

export function PlatformHero() {
  const t = useTranslations("platformPage.hero");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const proofs = t.raw("proofs") as string[];
  const pipeline = t.raw("pipeline") as Array<{title: string; body: string}>;
  const signals = t.raw("signals") as Array<{label: string; value: string}>;

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-backgroundDeep pb-12 pt-24 sm:pt-28 lg:pb-14 lg:pt-[6.75rem]">
      <div className="absolute inset-0 data-grid opacity-30" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(53,245,155,0.13),transparent_34%),radial-gradient(circle_at_76%_28%,rgba(99,224,232,0.16),transparent_30%),radial-gradient(circle_at_78%_74%,rgba(181,139,232,0.12),transparent_34%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.58, 0.92, 0.58], scale: [1, 1.025, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,26rem)] lg:items-center lg:gap-14 xl:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 22}}
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
            <p className="mt-4 max-w-xl text-[0.96rem] font-medium leading-6 text-cyanLogo/86 sm:text-[0.98rem]">
              {t("positioning")}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/pilot`} size="md" className="font-medium">
                {t("primaryCta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href={`/${locale}/compliance`} variant="secondary" size="md" className="font-medium">
                {t("secondaryCta")}
              </Button>
            </div>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2 xl:max-w-[33rem]">
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
            initial={shouldReduceMotion ? false : {opacity: 0, x: 24}}
            animate={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
            transition={{duration: 0.78, delay: 0.12, ease: "easeOut"}}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-[0_22px_58px_rgba(7,10,18,0.22)] backdrop-blur-xl sm:p-4 lg:ml-auto lg:w-full lg:max-w-[26rem]"
          >
            <div className="absolute inset-0 data-grid opacity-20" />
            <div className="absolute right-[-18%] top-[-10%] h-52 w-52 rounded-full bg-cyanLogo/12 blur-3xl" />
            <div className="absolute bottom-[-16%] left-[-10%] h-48 w-48 rounded-full bg-mintCta/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyanLogo sm:text-xs">
                    {t("visualLabel")}
                  </p>
                  <h2 className="mt-2 font-sans text-[1.05rem] font-medium leading-6 text-white sm:text-[1.12rem]">
                    {t("visualTitle")}
                  </h2>
                </div>
                <span className="rounded-full border border-mintCta/24 bg-mintCta/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-mintCta">
                  {t("visualStatus")}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {pipeline.map((item, index) => {
                  const Icon = visualIcons[index] ?? ShieldCheck;

                  return (
                    <div key={item.title} className="relative">
                      <motion.div
                        className="relative rounded-lg border border-white/10 bg-backgroundDeep/62 px-3 py-2.5"
                        initial={shouldReduceMotion ? false : {opacity: 0, y: 12}}
                        animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                        transition={{delay: 0.12 + index * 0.08}}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyanLogo/22 bg-cyanLogo/10 text-cyanLogo">
                            <Icon aria-hidden="true" size={15} />
                          </span>
                          <div className="min-w-0">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">
                              {t("stepLabel", {number: index + 1})}
                            </p>
                            <p className="mt-1 text-[13.5px] font-medium leading-5 text-white sm:text-sm">
                              {item.title}
                            </p>
                            <p className="mt-1 text-[12px] leading-5 text-white/58 sm:text-[12.5px]">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                      {index < pipeline.length - 1 ? (
                        <div className="flex h-4 items-center justify-center" aria-hidden="true">
                          <div className="relative h-full w-px bg-white/12">
                            {!shouldReduceMotion ? (
                              <motion.span
                                className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-mintCta shadow-[0_0_12px_rgba(53,245,155,0.55)]"
                                animate={{top: ["0%", "100%"], opacity: [0, 1, 0]}}
                                transition={{
                                  duration: 1.7,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: index * 0.16,
                                }}
                              />
                            ) : null}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-1 rounded-full bg-gradient-to-r from-cyanLogo via-mintCta to-violetLogo"
                  initial={{width: "18%"}}
                  animate={shouldReduceMotion ? undefined : {width: ["18%", "100%", "18%"]}}
                  transition={{duration: 5.2, repeat: Infinity, ease: "easeInOut"}}
                />
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {signals.map((signal, index) => (
                  <motion.div
                    key={signal.label}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5"
                    initial={shouldReduceMotion ? false : {opacity: 0, y: 10}}
                    animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                    transition={{delay: 0.45 + index * 0.06}}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">
                      {signal.label}
                    </p>
                    <p className="mt-1 text-[12.5px] font-normal leading-5 text-white sm:text-[13px]">
                      {signal.value}
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
