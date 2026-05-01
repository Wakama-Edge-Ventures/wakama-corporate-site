"use client";

import {ArrowRight} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

export function ComplianceFinalCTA() {
  const t = useTranslations("compliancePage.finalCta");
  const locale = useLocale();

  return (
    <section className="bg-[#0B1020] py-16">
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,#070A12_0%,#0B1020_70%,#101828_100%)] p-7 shadow-[0_24px_72px_rgba(7,10,18,0.22)] sm:p-9 lg:p-10">
          <div className="absolute inset-0 data-grid opacity-18" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-mintCta/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-[clamp(1.82rem,3vw,2.85rem)] font-light leading-[1.12] text-white">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-[1rem] leading-7 text-white/68 sm:text-[1.04rem]">
              {t("subtitle")}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/pilot`} size="md" className="font-medium">
                {t("primaryCta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href={`/${locale}/pilot`} variant="secondary" size="md" className="font-medium">
                {t("secondaryCta")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
