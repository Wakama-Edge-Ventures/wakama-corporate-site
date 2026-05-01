"use client";

import {ArrowRight, MessageCircle} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";

export function FinalCTASection() {
  const t = useTranslations("finalCta");
  const locale = useLocale();

  return (
    <section id="contact" className="bg-navy py-20">
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-backgroundDeep p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 data-grid opacity-20" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-mintCta/12 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">{t("subtitle")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/pilot`} size="lg">
                {t("primaryCta")}
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href={`/${locale}/#company`} variant="secondary" size="lg">
                <MessageCircle aria-hidden="true" size={18} />
                {t("secondaryCta")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
