import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {CommunityImpactSection} from "@/components/sections/company/CommunityImpactSection";
import {CompanyFinalCTA} from "@/components/sections/company/CompanyFinalCTA";
import {CompanyFieldActionsSection} from "@/components/sections/company/CompanyFieldActionsSection";
import {CompanyHero} from "@/components/sections/company/CompanyHero";
import {CompanyStructureSection} from "@/components/sections/company/CompanyStructureSection";
import {CompanyWorkflowSection} from "@/components/sections/company/CompanyWorkflowSection";
import {GovernanceDoctrineSection} from "@/components/sections/company/GovernanceDoctrineSection";
import {MissionSection} from "@/components/sections/company/MissionSection";
import {TeamSection} from "@/components/sections/company/TeamSection";
import {TrustEcosystemSection} from "@/components/sections/company/TrustEcosystemSection";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("company", locale);
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="company" />
      <Header />
      <main>
        <CompanyHero />
        <MissionSection />
        <GovernanceDoctrineSection />
        <TeamSection />
        <CommunityImpactSection />
        <CompanyFieldActionsSection />
        <CompanyStructureSection />
        <CompanyWorkflowSection />
        <TrustEcosystemSection />
        <CompanyFinalCTA />
      </main>
      <Footer />
    </>
  );
}
