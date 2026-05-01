"use client";

import {motion, useReducedMotion} from "framer-motion";
import {
  BrainCircuit,
  DatabaseZap,
  LayoutDashboard,
  RadioTower,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const icons: LucideIcon[] = [RadioTower, DatabaseZap, ShieldCheck, BrainCircuit, LayoutDashboard];

export function PlatformLayersSection() {
  const t = useTranslations("platformPage.layers");
  const shouldReduceMotion = useReducedMotion();
  const layers = t.raw("items") as Array<{title: string; body: string}>;

  return (
    <section className="bg-softLight py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.9rem,3vw,2.75rem)] font-light leading-[1.12] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1rem]">
            {t("description")}
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-ink/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FAF9_100%)] p-4 shadow-[0_14px_34px_rgba(16,24,40,0.05)] sm:p-5 lg:p-6">
          <p className="px-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/48">
            {t("stackLabel")}
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
            {layers.map((layer, index) => {
              const Icon = icons[index] ?? DatabaseZap;

              return (
                <motion.article
                  key={layer.title}
                  className="relative rounded-lg border border-ink/10 bg-white p-3.5 pl-14 shadow-[0_12px_28px_rgba(16,24,40,0.05)] transition duration-200 hover:-translate-y-0.5 sm:pl-3.5 lg:pt-5"
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
                        {t("layerLabel", {number: index + 1})}
                      </p>
                      <h3 className="mt-2.5 font-sans text-[0.98rem] font-medium leading-6 text-ink lg:text-center">
                        {layer.title}
                      </h3>
                      <p className="mt-1.5 text-[0.87rem] leading-6 text-muted lg:text-center">
                        {layer.body}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
