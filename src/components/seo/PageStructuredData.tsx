import type {Locale} from "@/i18n/routing";
import {buildStructuredData, type SeoRouteKey} from "@/lib/seo";

export function PageStructuredData({
  locale,
  routeKey,
}: {
  locale: Locale;
  routeKey: SeoRouteKey;
}) {
  const items = buildStructuredData(routeKey, locale);

  return (
    <>
      {items.map((item, index) => (
        <script
          key={`${routeKey}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(item)}}
        />
      ))}
    </>
  );
}
