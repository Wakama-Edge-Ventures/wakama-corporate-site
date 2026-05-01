"use client";

import {motion, useReducedMotion} from "framer-motion";
import {DatabaseZap, LayoutDashboard, ScrollText, ShieldCheck, type LucideIcon} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const flowIcons: LucideIcon[] = [DatabaseZap, DatabaseZap, ShieldCheck, DatabaseZap, LayoutDashboard];
const outputIcons: LucideIcon[] = [LayoutDashboard, LayoutDashboard, LayoutDashboard, DatabaseZap, ScrollText];

export function OracleAPISection() {
  const t = useTranslations("platformPage.oracle");
  const shouldReduceMotion = useReducedMotion();
  const flow = t.raw("flow") as string[];
  const outputs = t.raw("outputs") as string[];

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <div className="max-w-3xl">
              <h2 className="font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1rem]">
                {t("body")}
              </p>
            </div>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {outputs.map((output, index) => {
                const Icon = outputIcons[index] ?? LayoutDashboard;

                return (
                  <div key={output} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-softLight p-3.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-backgroundDeep text-cyanLogo">
                      <Icon aria-hidden="true" size={17} />
                    </span>
                    <span className="text-[13.5px] font-medium text-ink sm:text-sm">{output}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-muted">{t("note")}</p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-ink/10 bg-[linear-gradient(180deg,#F8FBFA_0%,#F4F7F6_100%)] p-4 shadow-[0_14px_34px_rgba(16,24,40,0.05)] sm:p-5"
            initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
            whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
          >
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyanLogo">
                {t("schemaLabel")}
              </p>
              <div className="relative mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2.5">
                <div className="absolute bottom-5 left-5 top-5 w-px bg-ink/10 sm:hidden" />
                <motion.div
                  aria-hidden="true"
                  className="absolute left-5 top-5 w-px bg-gradient-to-b from-cyanLogo via-mintCta to-violetLogo sm:hidden"
                  initial={{height: "8%"}}
                  whileInView={shouldReduceMotion ? undefined : {height: "calc(100% - 2.5rem)"}}
                  viewport={{once: true}}
                  transition={{duration: 1.1, ease: "easeOut"}}
                />
                <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-ink/10 lg:block" />
                <motion.div
                  aria-hidden="true"
                  className="absolute left-[10%] top-10 hidden h-px bg-gradient-to-r from-cyanLogo via-mintCta to-violetLogo lg:block"
                  initial={{width: "5%"}}
                  whileInView={shouldReduceMotion ? undefined : {width: "80%"}}
                  viewport={{once: true}}
                  transition={{duration: 1.1, ease: "easeOut"}}
                />
                {flow.map((item, index) => {
                  const Icon = flowIcons[index] ?? DatabaseZap;
                  const emphasized = item.toLowerCase().includes("oracle") || item.toLowerCase().includes("solana");

                  return (
                    <motion.article
                      key={item}
                      className={[
                        "relative rounded-lg border p-3.5 pl-14 shadow-[0_12px_28px_rgba(16,24,40,0.05)] transition duration-200 hover:-translate-y-0.5 sm:pl-3.5 lg:pt-5",
                        emphasized
                          ? "border-cyanLogo/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,250,251,0.96)_100%)] shadow-[0_16px_40px_rgba(99,224,232,0.14)]"
                          : "border-ink/10 bg-white",
                      ].join(" ")}
                      initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                      whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                      viewport={{once: true, margin: "-80px"}}
                      transition={{delay: index * 0.06}}
                    >
                      <div className="flex items-start gap-3 sm:flex-col sm:gap-3 lg:items-center">
                        <span className="absolute left-3.5 top-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-backgroundDeep text-cyanLogo shadow-[0_0_0_4px_rgba(255,255,255,0.92)] sm:static lg:mx-auto">
                          <Icon aria-hidden="true" size={16} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyanLogo lg:text-center">
                            {t("stepLabel", {number: index + 1})}
                          </p>
                          <h3 className="mt-2.5 font-sans text-[0.96rem] font-medium leading-6 text-ink lg:text-center">
                            {item}
                          </h3>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
