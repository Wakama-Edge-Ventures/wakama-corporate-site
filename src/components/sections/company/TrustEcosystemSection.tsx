"use client";

import {motion, useReducedMotion} from "framer-motion";
import Image from "next/image";
import {useTranslations} from "next-intl";

import {Container} from "@/components/ui/Container";

const logoMap: Record<string, {src: string; alt: string; width: number; height: number; dark?: boolean}> = {
  solana: {
    src: "/brand/solana-fondation-blanc.png",
    alt: "Solana Foundation logo",
    width: 180,
    height: 36,
    dark: true,
  },
  aqc: {src: "/brand/aqc-logo-source-file.svg", alt: "AQC partner reference", width: 120, height: 36},
  up42: {src: "/brand/UP42_Logo.png", alt: "UP42 logo", width: 112, height: 28},
  airbus: {src: "/brand/airbus.webp", alt: "Airbus logo", width: 112, height: 32},
};

export function TrustEcosystemSection() {
  const t = useTranslations("companyPage.ecosystem");
  const shouldReduceMotion = useReducedMotion();
  const items = t.raw("items") as Array<{key: string; title: string; body: string; label?: string}>;

  return (
    <section id="partners" className="bg-softLight py-16 sm:py-18">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.68rem,2.55vw,2.45rem)] font-normal leading-[1.12] text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-[1.03rem]">
            {t("body")}
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const logo = logoMap[item.key] ?? logoMap.solana;
            const dark = item.key === "solana";

            return (
              <motion.article
                key={item.title}
                className={
                  dark
                    ? "rounded-[1.15rem] border border-ink/10 bg-panelDark p-4 shadow-[0_20px_58px_rgba(11,16,32,0.16)]"
                    : "rounded-[1.15rem] border border-ink/10 bg-white p-4 shadow-[0_16px_42px_rgba(16,24,40,0.05)]"
                }
                initial={shouldReduceMotion ? false : {opacity: 0, y: 16}}
                whileInView={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
                viewport={{once: true, margin: "-80px"}}
                transition={{delay: index * 0.07}}
              >
                <div className={dark ? "flex h-12 items-center rounded-xl border border-white/10 bg-white/[0.05] px-3" : "flex h-12 items-center rounded-xl border border-ink/10 bg-softLight px-3"}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={`h-7 w-auto object-contain ${logo.dark ? "" : "grayscale"}`}
                  />
                </div>
                {item.label ? (
                  <span className={dark ? "mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white/62" : "mt-3 inline-flex rounded-full border border-cyanLogo/20 bg-cyanLogo/8 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cyanLogo"}>
                    {item.label}
                  </span>
                ) : null}
                <h3 className={dark ? "mt-3 font-display text-[1.02rem] font-medium text-white" : "mt-3 font-display text-[1.02rem] font-medium text-ink"}>
                  {item.title}
                </h3>
                <p className={dark ? "mt-2 text-sm leading-6 text-white/72" : "mt-2 text-sm leading-6 text-muted"}>
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
