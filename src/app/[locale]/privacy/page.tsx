import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {SimplePageTemplate} from "@/components/sections/simple/SimplePageTemplate";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("privacy", locale);
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="privacy" />
      <Header />
      <main>
        <SimplePageTemplate
          namespace="simplePages.privacy"
          heroPrimaryHref="/compliance"
          finalPrimaryHref="/compliance"
          finalSecondaryHref="/pilot"
        />
      </main>
      <Footer />
    </>
  );
}
