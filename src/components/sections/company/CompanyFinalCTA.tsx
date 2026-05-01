"use client";

import {ArrowRight} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

export function CompanyFinalCTA() {
  const t = useTranslations("companyPage.finalCta");
  const locale = useLocale();

  return (
    <section className="bg-[#0B1020] py-14">
      <Container>
        <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(80,212,196,0.18),_transparent_40%),linear-gradient(135deg,#0B1020_0%,#121A31_100%)] px-6 py-8 shadow-[0_28px_80px_rgba(11,16,32,0.42)] sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.55rem,2.35vw,2.3rem)] font-normal leading-[1.12] text-white">
              {t("title")}
            </h2>
            <p className="mt-3 max-w-2xl text-[0.97rem] leading-7 text-white/70 sm:text-[1.01rem]">
              {t("subtitle")}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={`/${locale}/pilot`} size="md">
              {t("primaryCta")}
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button href={`/${locale}/pilot`} variant="secondary" size="md">
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
