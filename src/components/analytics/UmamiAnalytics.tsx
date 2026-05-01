import Script from "next/script";

export function UmamiAnalytics() {
  return (
    <Script
      id="umami-analytics"
      src="https://cloud.umami.is/script.js"
      data-website-id="1ced44fd-4e08-41bd-b10b-0ca8a1efe610"
      data-domains="wakama.farm"
      strategy="afterInteractive"
    />
  );
}
