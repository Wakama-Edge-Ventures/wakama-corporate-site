"use client";

import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

import {Container} from "@/components/ui/Container";
import {getUmamiEventNameForHref, trackConversionLink, trackFarmerAccess} from "@/lib/analytics";

const columns = ["platform", "solutions", "company", "legal"] as const;
const hrefMap = {
  platform: ["/platform/integration", "/platform/score", "/platform/dashboards"],
  solutions: ["/solutions/imf", "/solutions/bank", "/solutions/insurance", "/solutions/programs"],
  company: ["/company#mission", "/company#team", "/company#partners"],
  legal: ["/compliance", "/privacy", "/terms"],
} as const;

function FooterLogoWordmark() {
  return (
    <span
      className="flex h-10 items-center text-[2.15rem] leading-none text-white"
      style={{fontFamily: "Chillax, var(--font-sora), Sora, sans-serif", letterSpacing: 0}}
      aria-hidden="true"
    >
      Wakama
    </span>
  );
}

function FooterLogo() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <FooterLogoWordmark />;
  }

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/brand/wakama-logo.png"
        alt="Wakama logo"
        width={146}
        height={40}
        className="h-10 w-auto"
        onError={() => setFailed(true)}
      />
      <FooterLogoWordmark />
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer id="company" className="border-t border-white/10 bg-backgroundDeep py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <FooterLogo />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/58">{t("positioning")}</p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex max-w-md items-center justify-between gap-4">
                <Link
                  href={`/${locale}/diagnostic-agricredit`}
                  onClick={() => trackConversionLink(`/${locale}/diagnostic-agricredit`, "footer")}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyanLogo transition hover:text-white"
                >
                  {t("diagnosticLabel")}
                </Link>
                <Link
                  href="https://www.linkedin.com/company/wakama-farm"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event={getUmamiEventNameForHref("https://www.linkedin.com/company/wakama-farm") ?? undefined}
                  aria-label={t("linkedinLabel")}
                  title={t("linkedinLabel")}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/58 transition hover:border-white/20 hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px] fill-current"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1h.02C3.87 1 4.98 2.12 4.98 3.5ZM5 8H0v16h5V8Zm7.98 0H8.01v16h4.97v-8.4c0-4.67 6.02-5.05 6.02 0V24H24v-10.13c0-7.88-8.92-7.59-11.02-3.71V8Z" />
                  </svg>
                </Link>
              </div>
              <div className="max-w-md rounded-[1.15rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm leading-6 text-white/68">{t("farmerGateway.body")}</p>
                <Link
                  href="https://farmer.wakama.farm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackFarmerAccess("footer")}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-mintCta transition hover:text-white"
                >
                  {t("farmerGateway.cta")}
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => {
              const items = t.raw(`${column}.items`) as string[];

              return (
                <div key={column}>
                  <h3 className="font-display text-sm font-semibold text-white">
                    {t(`${column}.title`)}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {items.map((item, index) => (
                      <li key={item}>
                        <Link
                          href={`/${locale}${hrefMap[column][index]}`}
                          data-umami-event={getUmamiEventNameForHref(`/${locale}${hrefMap[column][index]}`) ?? undefined}
                          className="text-sm text-white/52 transition hover:text-white"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Wakama Edge Ventures. All rights reserved.</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em]">{t("region")}</p>
        </div>
      </Container>
    </footer>
  );
}
