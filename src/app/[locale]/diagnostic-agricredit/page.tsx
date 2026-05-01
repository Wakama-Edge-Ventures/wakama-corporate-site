import type {Metadata} from "next";
import {setRequestLocale} from "next-intl/server";

import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {PageStructuredData} from "@/components/seo/PageStructuredData";
import {DiagnosticPage} from "@/components/sections/diagnostic/DiagnosticPage";
import type {Locale} from "@/i18n/routing";
import {buildPageMetadata} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  return buildPageMetadata("diagnosticAgricredit", locale);
}

export default async function DiagnosticAgriCreditPage({
  params,
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageStructuredData locale={locale} routeKey="diagnosticAgricredit" />
      <Header />
      <main>
        <DiagnosticPage />
      </main>
      <Footer />
    </>
  );
}
