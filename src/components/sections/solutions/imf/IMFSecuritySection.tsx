"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ShieldCheck} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

import {IMFSectionIntro} from "./IMFSectionIntro";

export function IMFSecuritySection() {
  const t = useTranslations("solutionsImf.security");
  const shouldReduceMotion = useReducedMotion();
  const cia = t.raw("cia") as Array<{title: string; body: string}>;

  return (
    <section className="relative overflow-hidden bg-panelDark py-20 sm:py-24">
      <div className="absolute inset-0 data-grid opacity-18" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(53,245,155,0.16),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(99,224,232,0.14),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.54, 0.9, 0.54], scale: [1, 1.02, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[0_28px_90px_rgba(7,10,18,0.26)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-mintCta/24 bg-mintCta/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-mintCta">
              <ShieldCheck aria-hidden="true" size={15} />
              {t("badge")}
            </span>
            <div className="mt-5">
              <IMFSectionIntro title={t("title")} description={t("body")} dark />
            </div>
            <p className="mt-4 text-sm font-medium text-white/84">{t("program")}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:self-center">
            {cia.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-lg border border-white/10 bg-backgroundDeep/58 p-4 shadow-[0_12px_28px_rgba(7,10,18,0.16)]"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.08}}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyanLogo">
                  {t("ciaLabel", {number: index + 1})}
                </p>
                <p className="mt-3 font-sans text-[1rem] font-medium text-white sm:text-[1.05rem]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/72">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
