import type {Metadata} from "next";

import {UmamiAnalytics} from "@/components/analytics/UmamiAnalytics";
import {SITE_URL} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
        <UmamiAnalytics />
      </body>
    </html>
  );
}
