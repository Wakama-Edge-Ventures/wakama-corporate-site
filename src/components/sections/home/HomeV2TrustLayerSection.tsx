"use client";

import {motion, useReducedMotion} from "framer-motion";
import {ArrowRight, CheckCircle2} from "lucide-react";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

import {HomeV2SectionIntro} from "./HomeV2SectionIntro";

export function HomeV2TrustLayerSection() {
  const t = useTranslations("homeV2.trustLayer");
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const columns = t.raw("columns") as Array<{title: string; body: string; items: string[]}>;
  const partners = [
    {name: "UP42", alt: "UP42 logo", src: "/brand/UP42_Logo.png", width: 132, height: 42},
    {
      name: "Solana Foundation",
      alt: "Solana Foundation logo",
      src: "/brand/solana_foundation_cover.jpg",
      width: 168,
      height: 48,
    },
    {name: "Airbus", alt: "Airbus logo", src: "/brand/airbus.webp", width: 138, height: 42},
    {name: "AQC", alt: "AQC partner reference", src: "/brand/aqc-logo-source-file.svg", width: 128, height: 42},
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#F4F7F6_0%,#F8FBFA_100%)] py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <HomeV2SectionIntro title={t("title")} description={t("body")} />
          <div className="lg:text-right">
            <Button href={`/${locale}/compliance`} variant="dark" size="sm" className="font-medium">
              {t("cta")}
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {columns.map((column, index) => (
            <motion.div
              key={column.title}
              className="relative overflow-hidden rounded-lg border border-ink/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,252,251,0.94))] p-5 shadow-[0_16px_42px_rgba(16,24,40,0.055)] sm:p-6"
              initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
              whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
              viewport={{once: true, margin: "-80px"}}
              transition={{delay: index * 0.08}}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanLogo/35 to-transparent" />
              <h3 className="font-sans text-[1.2rem] font-medium text-ink sm:text-[1.26rem]">
                {column.title}
              </h3>
              <p className="mt-3 text-[0.96rem] leading-7 text-muted">{column.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {column.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/8 bg-white px-3 py-1.5 text-[13.5px] text-ink sm:text-sm"
                  >
                    <CheckCircle2 aria-hidden="true" size={14} className="text-cyanLogo" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-lg border border-ink/8 bg-white p-4 shadow-[0_16px_42px_rgba(16,24,40,0.055)] sm:p-5"
          initial={shouldReduceMotion ? false : {opacity: 0, y: 18}}
          whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
        >
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/62">
              {t("partnersLabel")}
            </p>
            <span className="text-[13px] text-muted">{t("partnersBody")}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-ink/8 bg-[#F8FBFA] px-4 py-4"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 12}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.08 + index * 0.06}}
              >
                <div className="flex min-h-10 items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="max-h-10 w-auto object-contain grayscale contrast-125 opacity-80"
                  />
                </div>
                {partner.name === "Solana Foundation" ? (
                  <span className="mt-3 rounded-full border border-ink/8 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {t("solanaLabel")}
                  </span>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
