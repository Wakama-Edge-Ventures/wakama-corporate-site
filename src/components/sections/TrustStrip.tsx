"use client";

import {motion, useReducedMotion} from "framer-motion";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

export function TrustStrip() {
  const t = useTranslations("trust");
  const shouldReduceMotion = useReducedMotion();
  const items = t.raw("items") as string[];

  return (
    <section className="relative overflow-hidden bg-navy py-6">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(53,245,155,0.12),transparent_34%,rgba(33,216,130,0.1)_68%,transparent)]"
        animate={shouldReduceMotion ? undefined : {opacity: [0.45, 0.85, 0.45], x: ["-3%", "3%", "-3%"]}}
        transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
      />
      <Container className="relative">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item, index) => (
            <motion.div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-4 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/64"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 12}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.04}}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
