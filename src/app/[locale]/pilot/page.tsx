import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {PilotDataTrust} from "@/components/sections/pilot/PilotDataTrust";
import {PilotDeliverables} from "@/components/sections/pilot/PilotDeliverables";
import {PilotFinalCTA} from "@/components/sections/pilot/PilotFinalCTA";
import {PilotHero} from "@/components/sections/pilot/PilotHero";
import {PilotOperatingSplit} from "@/components/sections/pilot/PilotOperatingSplit";
import {PilotQualificationForm} from "@/components/sections/pilot/PilotQualificationForm";
import {PilotSecurity} from "@/components/sections/pilot/PilotSecurity";
import {PilotTimeline} from "@/components/sections/pilot/PilotTimeline";
import {PilotWhySection} from "@/components/sections/pilot/PilotWhySection";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("pilot", locale);
}

export default async function PilotPage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="pilot" />
      <Header />
      <main>
        <PilotHero />
        <PilotWhySection />
        <PilotTimeline />
        <PilotDeliverables />
        <PilotOperatingSplit />
        <PilotDataTrust />
        <PilotSecurity />
        <PilotQualificationForm />
        <PilotFinalCTA />
      </main>
      <Footer />
    </>
  );
}
