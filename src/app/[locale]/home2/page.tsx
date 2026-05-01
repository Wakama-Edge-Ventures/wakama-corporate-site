import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {ComplianceSection} from "@/components/sections/ComplianceSection";
import {FinalCTASection} from "@/components/sections/FinalCTASection";
import {HeroSection} from "@/components/sections/HeroSection";
import {IdjorSection} from "@/components/sections/IdjorSection";
import {OperatingSystemSection} from "@/components/sections/OperatingSystemSection";
import {PartnersSection} from "@/components/sections/PartnersSection";
import {PersonaTabsSection} from "@/components/sections/PersonaTabsSection";
import {PilotSection} from "@/components/sections/PilotSection";
import {ProblemSection} from "@/components/sections/ProblemSection";
import {ProductsSection} from "@/components/sections/ProductsSection";
import {SecurityTrustSection} from "@/components/sections/SecurityTrustSection";
import {TechnologyProofSection} from "@/components/sections/TechnologyProofSection";
import {TrustStrip} from "@/components/sections/TrustStrip";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("home2", locale);
}

export default async function Home2Page({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <PartnersSection />
        <SecurityTrustSection />
        <ProblemSection />
        <OperatingSystemSection />
        <PilotSection />
        <ProductsSection />
        <PersonaTabsSection />
        <ComplianceSection />
        <TechnologyProofSection />
        <IdjorSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
