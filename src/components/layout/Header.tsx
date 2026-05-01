"use client";

import {AnimatePresence, motion, useReducedMotion} from "framer-motion";
import {ChevronDown, Menu, X} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useMemo, useState} from "react";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {cn} from "@/lib/utils";

const navKeys = ["solutions", "platform", "pilot", "compliance", "company"] as const;

function LogoWordmark({light = false}: {light?: boolean}) {
  return (
    <span
      className={cn(
        "flex h-9 items-center text-[2rem] leading-none",
        light ? "text-ink" : "text-white",
      )}
      style={{fontFamily: "Chillax, var(--font-sora), Sora, sans-serif", letterSpacing: 0}}
      aria-hidden="true"
    >
      Wakama
    </span>
  );
}

function Logo({light = false}: {light?: boolean}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {!failed ? (
        <Image
          src="/brand/wakama-logo.png"
          alt="Wakama logo"
          width={132}
          height={36}
          className="h-9 w-auto"
          onError={() => setFailed(true)}
          priority
        />
      ) : (
        <LogoWordmark light={light} />
      )}
      {!failed ? <LogoWordmark light={light} /> : null}
    </div>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isCompanyPage = pathname === `/${locale}/company`;

  const switchHref = useMemo(() => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }, [locale, pathname]);

  const links = navKeys.map((key) => ({
    key,
    label: t(key),
    href:
      key === "solutions"
        ? `/${locale}/solutions/imf`
        : key === "platform"
        ? `/${locale}/platform`
        : key === "pilot"
        ? `/${locale}/pilot`
        : key === "compliance"
          ? `/${locale}/compliance`
          : key === "company"
            ? `/${locale}/company`
            : `/${locale}/#${key}`,
  }));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-xl",
        isCompanyPage
          ? "border-b border-ink/8 bg-white/88"
          : "border-b border-white/10 bg-backgroundDeep/78",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href={`/${locale}`} aria-label={locale === "fr" ? "Accueil Wakama" : "Wakama home"}>
            <Logo light={isCompanyPage} />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label={t("primaryLabel")}>
            {links.map((link) =>
              link.key === "solutions" ? (
                <div key={link.key} className="group relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyanLogo",
                      isCompanyPage ? "text-ink/70 hover:text-ink" : "text-white/68 hover:text-white",
                    )}
                  >
                    {t("solutions")}
                    <ChevronDown aria-hidden="true" size={16} className="transition group-hover:translate-y-px" />
                  </button>
                  <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div
                      className={cn(
                        "min-w-[14rem] rounded-xl border p-2 shadow-[0_22px_60px_rgba(7,10,18,0.18)] backdrop-blur-xl",
                        isCompanyPage
                          ? "border-ink/10 bg-white/96"
                          : "border-white/10 bg-backgroundDeep/96",
                      )}
                    >
                      {[
                        {label: t("solutionItems.imf"), href: `/${locale}/solutions/imf`},
                        {label: t("solutionItems.bank"), href: `/${locale}/solutions/bank`},
                        {label: t("solutionItems.insurance"), href: `/${locale}/solutions/insurance`},
                        {label: t("solutionItems.programs"), href: `/${locale}/solutions/programs`},
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm font-medium transition",
                            isCompanyPage
                              ? "text-ink/78 hover:bg-ink/5 hover:text-ink"
                              : "text-white/78 hover:bg-white/8 hover:text-white",
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyanLogo",
                    isCompanyPage ? "text-ink/70 hover:text-ink" : "text-white/68 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="https://farmer.wakama.farm/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyanLogo",
                isCompanyPage ? "text-ink/52 hover:text-ink" : "text-white/52 hover:text-white",
              )}
            >
              {t("farmerAccess")}
            </Link>
            <Link
              href={switchHref}
              aria-label={t("languageSwitch")}
              className={cn(
                "rounded-full px-3 py-2 font-mono text-xs font-semibold uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyanLogo",
                isCompanyPage
                  ? "border border-ink/12 text-ink/70 hover:border-cyanLogo/40 hover:text-ink"
                  : "border border-white/12 text-white/74 hover:border-cyanLogo/40 hover:text-white",
              )}
            >
              {locale === "fr" ? "EN" : "FR"}
            </Link>
            <Button href={`/${locale}/pilot`} size="sm">
              {t("cta")}
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
              isCompanyPage ? "border border-ink/12 text-ink" : "border border-white/12 text-white",
            )}
          >
            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={shouldReduceMotion ? false : {opacity: 0, y: -8}}
            animate={shouldReduceMotion ? undefined : {opacity: 1, y: 0}}
            exit={shouldReduceMotion ? undefined : {opacity: 0, y: -8}}
            className={cn(
              "lg:hidden",
              isCompanyPage
                ? "border-t border-ink/8 bg-white/96"
                : "border-t border-white/10 bg-backgroundDeep/96",
            )}
          >
            <Container className="py-5">
              <nav className="grid gap-2" aria-label={t("mobileLabel")}>
                {links.map((link) =>
                  link.key === "solutions" ? (
                    <div key={link.key} className="rounded-lg border border-white/8 bg-white/[0.03] p-2">
                      <div
                        className={cn(
                          "px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em]",
                          isCompanyPage ? "text-ink/52" : "text-white/52",
                        )}
                      >
                        {t("solutions")}
                      </div>
                      <div className="grid gap-1">
                        {[
                          {label: t("solutionItems.imf"), href: `/${locale}/solutions/imf`},
                          {label: t("solutionItems.bank"), href: `/${locale}/solutions/bank`},
                          {label: t("solutionItems.insurance"), href: `/${locale}/solutions/insurance`},
                          {label: t("solutionItems.programs"), href: `/${locale}/solutions/programs`},
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "rounded-lg px-3 py-3 text-base font-medium transition",
                              isCompanyPage
                                ? "text-ink/78 hover:bg-ink/5 hover:text-ink"
                                : "text-white/78 hover:bg-white/8 hover:text-white",
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.key}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base font-medium transition",
                        isCompanyPage
                          ? "text-ink/78 hover:bg-ink/5 hover:text-ink"
                          : "text-white/78 hover:bg-white/8 hover:text-white",
                      )}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </nav>
              <Link
                href="https://farmer.wakama.farm/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={cn(
                  "mt-4 block rounded-lg px-3 py-3 text-base font-medium transition",
                  isCompanyPage
                    ? "text-ink/78 hover:bg-ink/5 hover:text-ink"
                    : "text-white/78 hover:bg-white/8 hover:text-white",
                )}
              >
                {t("farmerAccess")}
              </Link>
              <div className="mt-5 flex items-center gap-3">
                <Link
                  href={switchHref}
                  aria-label={t("languageSwitch")}
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-full px-4 font-mono text-xs font-semibold uppercase",
                    isCompanyPage ? "border border-ink/12 text-ink" : "border border-white/12 text-white",
                  )}
                >
                  {locale === "fr" ? "EN" : "FR"}
                </Link>
                <Button href={`/${locale}/pilot`} className="flex-1" onClick={() => setOpen(false)}>
                  {t("cta")}
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
