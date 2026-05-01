"use client";

import {motion, useReducedMotion} from "framer-motion";

const cells = Array.from({length: 40}, (_, index) => index);

export function FieldGridVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-lg border border-ink/10 bg-white p-4 shadow-panel">
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.03] bg-cover bg-center opacity-48 saturate-[1.08] contrast-[1.08] blur-[0.35px]"
        style={{backgroundImage: "url('/brand/sat-farm-wakama.png')"}}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/82 via-white/60 to-white/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(53,245,155,0.14),transparent_36%),radial-gradient(circle_at_82%_70%,rgba(99,224,232,0.12),transparent_34%)]" />
      <div className="relative z-10 grid grid-cols-8 gap-2">
        {cells.map((cell) => {
          const active = cell % 7 === 0 || cell % 11 === 0;
          const warm = cell === 18 || cell === 29;

          return (
            <motion.div
              key={cell}
              className={[
                "aspect-square rounded-[4px] border shadow-[0_4px_14px_rgba(16,24,40,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(16,24,40,0.14)]",
                active
                  ? "border-wakamaGreen/45 bg-wakamaGreen/34"
                  : "border-ink/10 bg-white/84",
                warm ? "border-orangeAccent/55 bg-orangeAccent/28" : "",
              ].join(" ")}
              initial={shouldReduceMotion ? false : {opacity: 0.35}}
              whileInView={shouldReduceMotion ? undefined : {opacity: active || warm ? 1 : 0.74}}
              viewport={{once: true}}
              transition={{delay: cell * 0.012}}
            />
          );
        })}
      </div>
      <div className="relative z-10 mt-5 grid grid-cols-3 gap-3">
        {["KYC", "NDVI", "Weather"].map((item) => (
          <div
            key={item}
            className="rounded-md border border-ink/12 bg-white/90 px-3 py-2 shadow-[0_8px_24px_rgba(16,24,40,0.10)] backdrop-blur-md transition duration-200 hover:border-mintCta/35 hover:bg-white"
          >
            <p className="font-mono text-xs font-semibold text-ink">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
