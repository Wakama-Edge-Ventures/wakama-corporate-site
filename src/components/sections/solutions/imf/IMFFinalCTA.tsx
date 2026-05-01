"use client";

import {ArrowRight, FileText} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

export function IMFFinalCTA() {
  const t = useTranslations("solutionsImf.finalCta");
  const locale = useLocale();

  return (
    <section className="bg-navy py-16 sm:py-18">
      <Container>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[linear-gradient(135deg,#07111C_0%,#0C1825_58%,#122638_100%)] px-6 py-7 shadow-[0_24px_80px_rgba(7,10,18,0.24)] sm:px-8 sm:py-8 lg:px-10 lg:py-9">
          <div className="absolute inset-0 data-grid opacity-[0.08]" />
          <div className="absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-mintCta/10 blur-3xl" />
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyanLogo/[0.08] blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-[clamp(1.7rem,2.6vw,2.35rem)] font-light leading-[1.12] text-white">
                {t("title")}
              </h2>
              <p className="mt-3 max-w-xl text-[0.98rem] leading-7 text-white/70 sm:text-[1rem]">
                {t("subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:justify-end">
              <Button href={`/${locale}/pilot`} size="md" className="font-medium">
                {t("primaryCta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href={`/${locale}/pilot`} variant="secondary" size="md" className="font-medium">
                <FileText aria-hidden="true" size={18} />
                {t("secondaryCta")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
