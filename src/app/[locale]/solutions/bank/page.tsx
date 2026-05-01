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
  return buildPageMetadata("solutionsBank", locale);
}

export default async function SolutionBankPage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="solutionsBank" />
      <Header />
      <main>
        <SegmentSolutionPage
          namespace="solutionsBank"
          heroPrimaryHref="/diagnostic-agricredit"
          heroSecondaryHref="/compliance"
          finalPrimaryHref="/diagnostic-agricredit"
          finalSecondaryHref="/platform"
        />
      </main>
      <Footer />
    </>
  );
}
