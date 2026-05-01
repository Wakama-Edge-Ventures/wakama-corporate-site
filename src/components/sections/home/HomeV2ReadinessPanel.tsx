"use client";

import {motion, useReducedMotion} from "framer-motion";
import {CheckCircle2, FileText, MapPinned} from "lucide-react";
import Image from "next/image";
import {useTranslations} from "next-intl";

const rowIcons = [CheckCircle2, MapPinned, FileText];

export function HomeV2ReadinessPanel() {
  const t = useTranslations("homeV2.operatingSystem.readiness");
  const shouldReduceMotion = useReducedMotion();
  const signals = t.raw("signals") as string[];
  const rows = t.raw("rows") as string[];
  const score = 78;
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      className="relative rounded-lg border border-ink/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,250,252,0.96))] p-4 shadow-[0_20px_56px_rgba(16,24,40,0.08)] sm:p-5 lg:flex lg:h-full lg:max-w-[34rem] lg:flex-col lg:justify-self-end"
      initial={shouldReduceMotion ? false : {opacity: 0, x: 16}}
      whileInView={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
      viewport={{once: true, margin: "-80px"}}
    >
      <div className="relative overflow-hidden rounded-lg border border-ink/10">
        <Image
          src="/brand/sat-farm-wakama.png"
          alt={t("imageAlt")}
          width={1200}
          height={720}
          className="h-52 w-full object-cover opacity-88"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(7,10,18,0.04))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,245,155,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(99,224,232,0.18),transparent_28%)]" />
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
          {signals.map((signal) => (
            <span
              key={signal}
              className="inline-flex min-h-7 items-center justify-center rounded-full border border-white/55 bg-white/88 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur-sm sm:min-h-8 sm:px-3 sm:py-1.5 sm:text-[10px]"
            >
              {signal}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="relative -mt-5 overflow-hidden rounded-lg border border-cyanLogo/12 bg-[linear-gradient(145deg,rgba(7,10,18,0.98),rgba(17,24,42,0.96)_52%,rgba(11,16,32,0.98))] p-4 shadow-[0_22px_60px_rgba(7,10,18,0.24)] sm:p-5 lg:flex-1"
        initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
        whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
        viewport={{once: true, margin: "-80px"}}
        transition={{delay: 0.12}}
      >
        <div className="absolute inset-0 data-grid opacity-15" />
        <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-cyanLogo/10 blur-3xl" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyanLogo">
                {t("dashboardLabel")}
              </p>
              <h3 className="mt-2 font-sans text-[1.08rem] font-medium text-white sm:text-[1.15rem]">
                {t("title")}
              </h3>
            </div>
            <span className="rounded-full border border-mintCta/28 bg-mintCta/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mintCta">
              {t("status")}
            </span>
          </div>

          <p className="mt-3 max-w-md text-[0.95rem] leading-6 text-white/68">{t("body")}</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
            <div className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/44">
                {t("scoreLabel")}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="relative h-[5.4rem] w-[5.4rem] shrink-0">
                  <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90" role="img" aria-label={t("scoreLabel")}>
                    <circle cx="48" cy="48" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r={radius}
                      fill="none"
                      stroke="url(#homeReadinessScoreGradient)"
                      strokeLinecap="round"
                      strokeWidth="7"
                      strokeDasharray={circumference}
                      initial={{strokeDashoffset: circumference}}
                      whileInView={{strokeDashoffset: offset}}
                      viewport={{once: true}}
                      transition={{duration: shouldReduceMotion ? 0 : 1.1, ease: "easeOut"}}
                    />
                    <defs>
                      <linearGradient id="homeReadinessScoreGradient" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#63E0E8" />
                        <stop offset="62%" stopColor="#35F59B" />
                        <stop offset="100%" stopColor="#FF7A1A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-mono text-[1.7rem] font-semibold leading-none text-white">
                      {score}
                    </span>
                    <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/48">
                      score
                    </span>
                  </div>
                </div>
                <p className="max-w-[10rem] text-sm leading-6 text-white/62">{t("scoreBody")}</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {rows.map((row, index) => {
                const Icon = rowIcons[index] ?? CheckCircle2;

                return (
                  <div
                    key={row}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] px-3.5 py-3"
                  >
                    <Icon aria-hidden="true" size={16} className="shrink-0 text-mintCta" />
                    <span className="text-[13.5px] text-white/76 sm:text-sm">{row}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-3">
            <p className="text-[13.5px] leading-6 text-white/62 sm:text-sm">{t("footer")}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
