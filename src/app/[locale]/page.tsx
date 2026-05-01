import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {HomeV2FinalCTASection} from "@/components/sections/home/HomeV2FinalCTASection";
import {HomeV2Hero} from "@/components/sections/home/HomeV2Hero";
import {HomeV2OperatingSystemSection} from "@/components/sections/home/HomeV2OperatingSystemSection";
import {HomeV2PilotSection} from "@/components/sections/home/HomeV2PilotSection";
import {HomeV2PlatformTeaserSection} from "@/components/sections/home/HomeV2PlatformTeaserSection";
import {HomeV2ProblemSection} from "@/components/sections/home/HomeV2ProblemSection";
import {HomeV2TrustLayerSection} from "@/components/sections/home/HomeV2TrustLayerSection";
import {HomeV2ValueLinesSection} from "@/components/sections/home/HomeV2ValueLinesSection";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("home", locale);
}

export default async function Home({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="home" />
      <Header />
      <main>
        <HomeV2Hero />
        <HomeV2ProblemSection />
        <HomeV2OperatingSystemSection />
        <HomeV2PilotSection />
        <HomeV2ValueLinesSection />
        <HomeV2TrustLayerSection />
        <HomeV2PlatformTeaserSection />
        <HomeV2FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
