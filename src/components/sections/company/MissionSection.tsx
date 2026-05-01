"use client";

import {motion, useReducedMotion} from "framer-motion";
import {CheckCircle2, Sparkles, Target} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function MissionSection() {
  const t = useTranslations("companyPage.mission");
  const shouldReduceMotion = useReducedMotion();
  const brings = t.raw("brings") as string[];

  return (
    <section id="mission" className="bg-softLight py-16 sm:py-18">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.55rem)] font-normal leading-[1.12] text-ink">
              {t("title")}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-muted sm:text-[1.03rem]">
              {t("intro")}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <motion.article
              className="rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.06)]"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                <Target aria-hidden="true" size={18} />
              </span>
              <h3 className="mt-4 font-display text-[1.08rem] font-medium text-ink">{t("missionTitle")}</h3>
              <p className="mt-2.5 text-sm leading-6 text-muted">{t("missionBody")}</p>
            </motion.article>

            <motion.article
              className="rounded-[1.25rem] border border-mintCta/24 bg-panelDark p-5 shadow-[0_22px_60px_rgba(11,16,32,0.16)]"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
              transition={{delay: 0.08}}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mintCta text-ink">
                <Sparkles aria-hidden="true" size={18} />
              </span>
              <h3 className="mt-4 font-display text-[1.08rem] font-medium text-white">{t("visionTitle")}</h3>
              <p className="mt-2.5 text-sm leading-6 text-white/72">{t("visionBody")}</p>
            </motion.article>
          </div>
        </div>

        <motion.div
          className="mt-8 rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.05)]"
          initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
          whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{delay: 0.1}}
        >
          <h3 className="font-display text-[1.08rem] font-medium text-ink">{t("bringsTitle")}</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {brings.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-softLight px-3.5 py-3">
                <CheckCircle2 aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-cyanLogo" />
                <span className="text-sm leading-6 text-ink/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
