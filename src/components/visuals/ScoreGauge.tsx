"use client";

import {motion, useReducedMotion} from "framer-motion";

type ScoreGaugeProps = {
  score?: number;
  label: string;
};

export function ScoreGauge({score = 78, label}: ScoreGaugeProps) {
  const shouldReduceMotion = useReducedMotion();
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex items-center gap-5">
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 132 132" className="h-full w-full rotate-[-90deg]" role="img" aria-label={label}>
          <circle
            cx="66"
            cy="66"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="10"
          />
          <motion.circle
            cx="66"
            cy="66"
            r={radius}
            fill="none"
            stroke="url(#scoreGradient)"
            strokeLinecap="round"
            strokeWidth="10"
            strokeDasharray={circumference}
            initial={{strokeDashoffset: circumference}}
            whileInView={{strokeDashoffset: offset}}
            viewport={{once: true}}
            transition={{duration: shouldReduceMotion ? 0 : 1.2, ease: "easeOut"}}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#63E0E8" />
              <stop offset="62%" stopColor="#35F59B" />
              <stop offset="100%" stopColor="#FF7A1A" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-3xl font-semibold text-white">{score}</span>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/48">score</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-2 max-w-48 text-sm leading-6 text-white/58">KYC, parcelle, historique coopérative et signaux terrain consolidés.</p>
      </div>
    </div>
  );
}
