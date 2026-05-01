"use client";

import {motion, useReducedMotion} from "framer-motion";
import {useTranslations} from "next-intl";
import Image from "next/image";

import {Container} from "@/components/ui/Container";

const partners = [
  {
    key: "up42",
    name: "UP42",
    alt: "UP42 logo",
    src: "/brand/UP42_Logo.png",
    href: "https://up42.com/",
    width: 148,
    height: 54,
  },
  {
    key: "solana",
    name: "Solana Foundation",
    alt: "Solana Foundation logo",
    src: "/brand/solana_foundation_cover.jpg",
    href: "https://solana.org/",
    width: 220,
    height: 64,
  },
  {
    key: "airbus",
    name: "Airbus",
    alt: "Airbus logo",
    src: "/brand/airbus.webp",
    href: "https://space-solutions.airbus.com/imagery/how-to-order-imagery-and-data/",
    width: 178,
    height: 64,
  },
  {
    key: "aqc",
    name: "AQC",
    alt: "AQC partner reference",
    src: "/brand/aqc-logo-source-file.svg",
    href: "https://aqc.ma/",
    width: 150,
    height: 64,
  },
];

export function PartnersSection() {
  const t = useTranslations("partners");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-y border-ink/10 bg-white py-8">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              {t("eyebrow")}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
              {t("title")}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{t("description")}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.key}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} website`}
                className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-ink/10 bg-softLight px-5 py-4 shadow-[0_12px_36px_rgba(16,24,40,0.06)] transition duration-200 hover:border-ink/18 hover:bg-white"
                initial={shouldReduceMotion ? false : {opacity: 0, y: 12}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.07}}
              >
                <div className="flex min-h-14 items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="max-h-12 w-auto object-contain opacity-74 grayscale contrast-125 transition duration-200 group-hover:opacity-100"
                  />
                </div>
                {partner.key === "solana" ? (
                  <span className="rounded-full border border-ink/10 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink">
                    {t("solanaLabel")}
                  </span>
                ) : (
                  <span className="h-[22px]" aria-hidden="true" />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
