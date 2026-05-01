"use client";

import {motion, useReducedMotion} from "framer-motion";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

import {HomeV2ReadinessPanel} from "./HomeV2ReadinessPanel";
import {HomeV2SectionIntro} from "./HomeV2SectionIntro";

export function HomeV2OperatingSystemSection() {
  const t = useTranslations("homeV2.operatingSystem");
  const shouldReduceMotion = useReducedMotion();
  const steps = t.raw("steps") as Array<{title: string; body: string}>;

  return (
    <section id="how-it-works" className="bg-[#EEF4F2] py-16 sm:py-20">
      <Container>
        <HomeV2SectionIntro title={t("title")} description={t("body")} />

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(380px,1fr)] lg:items-stretch lg:gap-8">
          <div className="grid gap-4">
            <div className="rounded-lg border border-ink/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.88))] p-4 shadow-[0_16px_42px_rgba(16,24,40,0.055)] sm:p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyanLogo">
                {t("governanceLabel")}
              </p>
              <p className="mt-2.5 text-[0.96rem] leading-7 text-muted">{t("governanceBody")}</p>
            </div>

            <div className="grid auto-rows-fr gap-3.5 sm:grid-cols-2">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
                  whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-80px"}}
                  transition={{delay: index * 0.08}}
                >
                  <div className="flex h-full flex-col rounded-lg border border-ink/8 bg-white p-5 shadow-[0_16px_42px_rgba(16,24,40,0.05)]">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-backgroundDeep font-mono text-xs font-semibold text-cyanLogo">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 font-sans text-[1.15rem] font-medium text-ink">{step.title}</h3>
                    <p className="mt-2.5 text-[0.95rem] leading-7 text-muted">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <HomeV2ReadinessPanel />
        </div>
      </Container>
    </section>
  );
}
