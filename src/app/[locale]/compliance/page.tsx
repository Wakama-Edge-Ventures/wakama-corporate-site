import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {AuditTrailSection} from "@/components/sections/compliance/AuditTrailSection";
import {BCEAOWorkflowSection} from "@/components/sections/compliance/BCEAOWorkflowSection";
import {ComplianceFinalCTA} from "@/components/sections/compliance/ComplianceFinalCTA";
import {ComplianceHero} from "@/components/sections/compliance/ComplianceHero";
import {DataIntegritySection} from "@/components/sections/compliance/DataIntegritySection";
import {GoldenRuleSection} from "@/components/sections/compliance/GoldenRuleSection";
import {ISOAQCSection} from "@/components/sections/compliance/ISOAQCSection";
import {LegalReadinessSection} from "@/components/sections/compliance/LegalReadinessSection";
import {ResponsibilityMatrixSection} from "@/components/sections/compliance/ResponsibilityMatrixSection";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("compliance", locale);
}

export default async function CompliancePage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="compliance" />
      <Header />
      <main>
        <ComplianceHero />
        <GoldenRuleSection />
        <ResponsibilityMatrixSection />
        <BCEAOWorkflowSection />
        <AuditTrailSection />
        <DataIntegritySection />
        <ISOAQCSection />
        <LegalReadinessSection />
        <ComplianceFinalCTA />
      </main>
      <Footer />
    </>
  );
}
