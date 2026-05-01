"use client";

import {motion, useReducedMotion} from "framer-motion";
import {Cpu, RadioTower, ServerCog, ShieldCheck} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {SectionHeader} from "@/components/ui/SectionHeader";

const icons = [ServerCog, Cpu, RadioTower, ShieldCheck, ServerCog, Cpu];

export function TechnologyProofSection() {
  const t = useTranslations("technology");
  const shouldReduceMotion = useReducedMotion();
  const proofs = t.raw("proofs") as Array<{title: string; body: string}>;

  return (
    <section className="bg-softLight py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {proofs.map((proof, index) => {
            const Icon = icons[index] ?? ServerCog;

            return (
              <motion.div
                key={proof.title}
                className="rounded-lg border border-ink/10 bg-white p-5 shadow-panel"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 14}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.05}}
              >
                <Icon aria-hidden="true" size={22} className="text-ink" />
                <h3 className="mt-5 font-mono text-sm font-semibold text-ink">{proof.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{proof.body}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
