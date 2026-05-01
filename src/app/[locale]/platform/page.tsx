import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {DataSourcesSection} from "@/components/sections/platform/DataSourcesSection";
import {IdjorPlatformSection} from "@/components/sections/platform/IdjorPlatformSection";
import {OracleAPISection} from "@/components/sections/platform/OracleAPISection";
import {PlatformFinalCTA} from "@/components/sections/platform/PlatformFinalCTA";
import {PlatformHero} from "@/components/sections/platform/PlatformHero";
import {PlatformLayersSection} from "@/components/sections/platform/PlatformLayersSection";
import {ProductsInfrastructureSection} from "@/components/sections/platform/ProductsInfrastructureSection";
import {SecurityReliabilitySection} from "@/components/sections/platform/SecurityReliabilitySection";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("platform", locale);
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="platform" />
      <Header />
      <main>
        <PlatformHero />
        <PlatformLayersSection />
        <DataSourcesSection />
        <ProductsInfrastructureSection />
        <IdjorPlatformSection />
        <OracleAPISection />
        <SecurityReliabilitySection />
        <PlatformFinalCTA />
      </main>
      <Footer />
    </>
  );
}
