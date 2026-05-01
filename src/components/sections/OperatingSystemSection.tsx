"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ClipboardList, DatabaseZap, LayoutDashboard, MapPinned} from "lucide-react";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {DashboardMockup} from "@/components/visuals/DashboardMockup";
import {FieldGridVisual} from "@/components/visuals/FieldGridVisual";

const icons = [ClipboardList, MapPinned, DatabaseZap, LayoutDashboard];

export function OperatingSystemSection() {
  const t = useTranslations("operating");
  const shouldReduceMotion = useReducedMotion();
  const layers = t.raw("layers") as Array<{title: string; body: string}>;

  return (
    <section id="platform" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
            <div className="mt-10 space-y-4">
              {layers.map((layer, index) => {
                const Icon = icons[index] ?? DatabaseZap;

                return (
                  <motion.div
                    key={layer.title}
                    className="flex gap-4 rounded-lg border border-ink/10 bg-softLight p-4"
                    initial={shouldReduceMotion ? false : {opacity: 0, x: -16}}
                    whileInView={shouldReduceMotion ? undefined : {opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.07}}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-mintCta text-ink">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">{layer.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{layer.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="grid content-start gap-5">
            <FieldGridVisual />
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
