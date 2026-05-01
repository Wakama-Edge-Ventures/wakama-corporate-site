import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {SegmentSolutionPage} from "@/components/sections/solutions/segment/SegmentSolutionPage";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("solutionsInsurance", locale);
}

export default async function SolutionInsurancePage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="solutionsInsurance" />
      <Header />
      <main>
        <SegmentSolutionPage
          namespace="solutionsInsurance"
          heroPrimaryHref="/pilot"
          heroSecondaryHref="/platform"
          finalPrimaryHref="/pilot"
          finalSecondaryHref="/platform"
        />
      </main>
      <Footer />
    </>
  );
}
