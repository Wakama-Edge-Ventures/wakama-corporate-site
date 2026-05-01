"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ShieldCheck} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function PilotSecurity() {
  const t = useTranslations("pilotPage.security");
  const shouldReduceMotion = useReducedMotion();
  const cia = t.raw("cia") as Array<{title: string; body: string}>;

  return (
    <section id="pilot-compliance" className="relative overflow-hidden bg-panelDark py-16 sm:py-20">
      <div className="absolute inset-0 data-grid opacity-16" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(53,245,155,0.12),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(99,224,232,0.12),transparent_32%)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.54, 0.82, 0.54], scale: [1, 1.02, 1]}}
        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
      />

      <Container className="relative">
        <div className="grid gap-7 rounded-lg border border-white/10 bg-white/[0.05] p-5 shadow-[0_24px_76px_rgba(7,10,18,0.24)] backdrop-blur-xl lg:grid-cols-[0.92fr_1.08fr] lg:p-7">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-mintCta/24 bg-mintCta/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-mintCta">
              <ShieldCheck aria-hidden="true" size={15} />
              {t("badge")}
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.72rem,2.6vw,2.7rem)] font-normal leading-[1.14] text-white">
              {t("title")}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-white/72 sm:text-[1.04rem]">{t("body")}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:self-center">
            {cia.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-lg border border-white/10 bg-backgroundDeep/56 p-4"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.08}}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyanLogo">
                  {t("ciaLabel", {number: index + 1})}
                </p>
                <p className="mt-3 font-display text-[1.02rem] font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/66">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
