import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {IMFComplianceSection} from "@/components/sections/solutions/imf/IMFComplianceSection";
import {IMFDashboardPreviewSection} from "@/components/sections/solutions/imf/IMFDashboardPreviewSection";
import {IMFDataTrustSection} from "@/components/sections/solutions/imf/IMFDataTrustSection";
import {IMFFinalCTA} from "@/components/sections/solutions/imf/IMFFinalCTA";
import {IMFHero} from "@/components/sections/solutions/imf/IMFHero";
import {IMFPainSection} from "@/components/sections/solutions/imf/IMFPainSection";
import {IMFROICaseSection} from "@/components/sections/solutions/imf/IMFROICaseSection";
import {IMFSecuritySection} from "@/components/sections/solutions/imf/IMFSecuritySection";
import {IMFWorkflowSection} from "@/components/sections/solutions/imf/IMFWorkflowSection";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("solutionsImf", locale);
}

export default async function IMFSolutionPage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="solutionsImf" />
      <Header />
      <main>
        <IMFHero />
        <IMFPainSection />
        <IMFWorkflowSection />
        <IMFROICaseSection />
        <IMFDashboardPreviewSection />
        <IMFComplianceSection />
        <IMFDataTrustSection />
        <IMFSecuritySection />
        <IMFFinalCTA />
      </main>
      <Footer />
    </>
  );
}
