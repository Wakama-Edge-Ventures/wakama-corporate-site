"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Activity, AlertTriangle, CheckCircle2, FileSearch, ScanLine, UserRound} from "lucide-react";
import {useTranslations} from "next-intl";

const icons = [UserRound, AlertTriangle, CheckCircle2, FileSearch];

export function IdjorInsightCard() {
  const t = useTranslations("idjor.card");
  const shouldReduceMotion = useReducedMotion();
  const sections = t.raw("sections") as Array<{title: string; body: string}>;
  const insightChips = ["KYC", "Plot evidence", "Risk", "Committee"];

  const containerVariants = {
    hidden: {opacity: 0, scale: 0.98},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.35,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 14},
    visible: {opacity: 1, y: 0},
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-violetLogo/18 bg-[linear-gradient(145deg,rgba(7,10,18,0.96),rgba(17,24,42,0.94)_54%,rgba(11,16,32,0.98))] p-5 shadow-panel"
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{once: true, margin: "-80px"}}
      variants={containerVariants}
      whileHover={shouldReduceMotion ? undefined : {y: -4}}
      transition={{duration: 0.25}}
    >
      <div className="absolute inset-0 data-grid opacity-15" />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-cyanLogo/70 to-transparent"
        animate={shouldReduceMotion ? undefined : {y: [0, 250, 0], opacity: [0.1, 0.7, 0.1]}}
        transition={{duration: 5.5, repeat: Infinity, ease: "easeInOut"}}
      />
      <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-violetLogo/12 blur-3xl" />
      <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-mintCta/10 blur-3xl" />

      <motion.div variants={itemVariants} className="relative mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-violetLogo">{t("eyebrow")}</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">{t("title")}</h3>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-mintCta/30 bg-mintCta/10 px-3 py-1 font-mono text-xs text-mintCta">
          <motion.span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-mintCta"
            animate={shouldReduceMotion ? undefined : {scale: [1, 1.7, 1], opacity: [0.75, 1, 0.75]}}
            transition={{duration: 1.8, repeat: Infinity, ease: "easeInOut"}}
          />
          {t("status")}
        </span>
      </motion.div>

      <motion.div variants={itemVariants} className="relative mb-4 rounded-lg border border-cyanLogo/14 bg-cyanLogo/[0.055] p-4">
        <div className="mb-3 flex items-center gap-2 text-cyanLogo">
          <ScanLine aria-hidden="true" size={17} />
          <span className="font-mono text-xs uppercase tracking-[0.18em]">Operational analysis</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {insightChips.map((chip, index) => (
            <motion.span
              key={chip}
              className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white/68"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 8}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.18 + index * 0.06}}
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="relative space-y-3">
        {sections.map((section, index) => {
          const Icon = icons[index] ?? FileSearch;
          const isRisk = index === 1;

          return (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-4 transition duration-200 hover:border-cyanLogo/24 hover:bg-white/[0.065]"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-cyanLogo/20 bg-cyanLogo/10">
                  {isRisk ? (
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-1 rounded-md border border-orangeAccent/35"
                      animate={shouldReduceMotion ? undefined : {opacity: [0.2, 0.65, 0.2]}}
                      transition={{duration: 2.2, repeat: Infinity, ease: "easeInOut"}}
                    />
                  ) : null}
                  <Icon aria-hidden="true" size={17} className={isRisk ? "text-orangeAccent" : "text-cyanLogo"} />
                </span>
                <h4 className="text-sm font-semibold text-white">{section.title}</h4>
                {isRisk ? <Activity aria-hidden="true" size={15} className="ml-auto text-orangeAccent" /> : null}
              </div>
              <p className="mt-2 text-sm leading-6 text-white/62">{section.body}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
