import type {Metadata, MetadataRoute} from "next";

import type {Locale} from "@/i18n/routing";

export const SITE_URL = "https://wakama.farm";
export const SITE_NAME = "Wakama";
export const COMPANY_NAME = "Wakama Edge Ventures";
const OG_IMAGE_PATH = "/opengraph-image";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type LocaleCopy = {
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

type BreadcrumbItem = {
  path: string;
  label: Record<Locale, string>;
};

type SeoRoute = {
  path: string;
  indexable?: boolean;
  includeInSitemap?: boolean;
  changeFrequency?: ChangeFrequency;
  priority?: number;
  copy: Record<Locale, LocaleCopy>;
  breadcrumbs: BreadcrumbItem[];
};

const defaultChangeFrequency: ChangeFrequency = "monthly";

export const seoRoutes = {
  home: {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
    copy: {
      fr: {
        title: "Wakama — Infrastructure de crédit agricole en Côte d’Ivoire et UEMOA",
        description:
          "Wakama aide les IMF, banques et assureurs à financer l’agriculture avec données terrain vérifiées, scoring agricole, dossiers auditables et monitoring portefeuille.",
        openGraphTitle: "Wakama — Infrastructure de crédit agricole",
        openGraphDescription:
          "Données terrain, scoring agricole, dossiers auditables et monitoring pour institutions financières.",
      },
      en: {
        title: "Wakama — Agricultural Credit Infrastructure for Côte d’Ivoire and UEMOA",
        description:
          "Wakama helps MFIs, banks and insurers finance agriculture with verified field data, agricultural scoring, auditable files and portfolio monitoring.",
        openGraphTitle: "Wakama — Agricultural Credit Infrastructure",
        openGraphDescription:
          "Field data, agricultural scoring, auditable files and portfolio monitoring for financial institutions.",
      },
    },
    breadcrumbs: [{path: "", label: {fr: "Accueil", en: "Home"}}],
  },
  pilot: {
    path: "/pilot",
    changeFrequency: "weekly",
    priority: 0.9,
    copy: {
      fr: {
        title: "Pilote Wakama — Tester le crédit agricole en 90 jours",
        description:
          "Lancez un pilote Wakama sur 100 à 300 dossiers agricoles : KYC, parcelles, Score Wakama, dossier comité, dashboard et rapport final.",
      },
      en: {
        title: "Wakama Pilot — Test Agricultural Credit in 90 Days",
        description:
          "Launch a Wakama pilot on 100 to 300 agricultural files: KYC, plots, Wakama Score, committee file, dashboard and final report.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/pilot", label: {fr: "Pilote", en: "Pilot"}},
    ],
  },
  platform: {
    path: "/platform",
    changeFrequency: "monthly",
    priority: 0.85,
    copy: {
      fr: {
        title: "Plateforme Wakama — Scoring, Oracle et dashboards agricoles",
        description:
          "Découvrez la plateforme Wakama : données terrain, Score Wakama, Idjor, Oracle, dashboards institutionnels et traçabilité Solana.",
      },
      en: {
        title: "Wakama Platform — Scoring, Oracle and Agricultural Dashboards",
        description:
          "Explore the Wakama platform: field data, Wakama Score, Idjor, Oracle, institutional dashboards and Solana-based traceability.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/platform", label: {fr: "Plateforme", en: "Platform"}},
    ],
  },
  compliance: {
    path: "/compliance",
    changeFrequency: "monthly",
    priority: 0.8,
    copy: {
      fr: {
        title: "Conformité Wakama — Gouvernance, audit trail et ISO 27001",
        description:
          "Wakama structure scoring, documentation et monitoring sans déplacer la décision crédit. Programme ISO/IEC 27001 engagé avec AQC.",
      },
      en: {
        title: "Wakama Compliance — Governance, Audit Trail and ISO 27001",
        description:
          "Wakama structures scoring, documentation and monitoring without moving the credit decision. ISO/IEC 27001 program engaged with AQC.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/compliance", label: {fr: "Conformité", en: "Compliance"}},
    ],
  },
  company: {
    path: "/company",
    changeFrequency: "monthly",
    priority: 0.75,
    copy: {
      fr: {
        title: "Wakama Edge Ventures — Équipe, terrain et partenaires",
        description:
          "Découvrez Wakama Edge Ventures, fondée par Marouane Jebbar : mission, équipe, actions terrain, partenaires Solana, AQC, UP42 et Airbus.",
      },
      en: {
        title: "Wakama Edge Ventures — Team, Field Work and Partners",
        description:
          "Discover Wakama Edge Ventures, founded by Marouane Jebbar: mission, team, field actions, Solana, AQC, UP42 and Airbus partners.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/company", label: {fr: "Entreprise", en: "Company"}},
    ],
  },
  solutionsImf: {
    path: "/solutions/imf",
    changeFrequency: "monthly",
    priority: 0.9,
    copy: {
      fr: {
        title: "Wakama IMF/SFD — Scoring et dossiers crédit agricole",
        description:
          "Wakama aide les IMF et SFD à réduire le coût d’instruction agricole avec données terrain, scoring, dossiers comité, monitoring et audit trail.",
      },
      en: {
        title: "Wakama for MFIs — Agricultural Scoring and Credit Files",
        description:
          "Wakama helps MFIs reduce agricultural credit processing costs with field data, scoring, committee-ready files, monitoring and audit trails.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/solutions/imf", label: {fr: "IMF / SFD", en: "MFIs"}},
    ],
  },
  solutionsBank: {
    path: "/solutions/bank",
    changeFrequency: "monthly",
    priority: 0.9,
    copy: {
      fr: {
        title: "Wakama Banques — Infrastructure data pour crédit agricole",
        description:
          "Wakama aide les banques à qualifier coopératives, PME agricoles et portefeuilles agri avec données vérifiées, scoring, dashboards et audit trail.",
      },
      en: {
        title: "Wakama for Banks — Data Infrastructure for Agricultural Credit",
        description:
          "Wakama helps banks qualify cooperatives, agribusiness SMEs and agricultural portfolios with verified data, scoring, dashboards and audit trail.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/solutions/bank", label: {fr: "Banques", en: "Banks"}},
    ],
  },
  solutionsInsurance: {
    path: "/solutions/insurance",
    changeFrequency: "monthly",
    priority: 0.9,
    copy: {
      fr: {
        title: "Wakama Assurance — Données et monitoring pour assurance agricole",
        description:
          "Wakama aide assureurs et programmes agricoles à exploiter parcelles, météo, NDVI et terrain pour mieux comprendre et suivre le risque agricole.",
      },
      en: {
        title: "Wakama Insurance — Data and Monitoring for Agricultural Insurance",
        description:
          "Wakama helps insurers and agricultural programs use plot, weather, NDVI and field data to understand and monitor agricultural risk.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/solutions/insurance", label: {fr: "Assurance", en: "Insurance"}},
    ],
  },
  solutionsPrograms: {
    path: "/solutions/programs",
    changeFrequency: "monthly",
    priority: 0.85,
    copy: {
      fr: {
        title: "Wakama Programmes — Inclusion financière agricole mesurable",
        description:
          "Wakama aide bailleurs, ministères, agro-industriels et programmes agricoles à structurer des portefeuilles producteurs avec données terrain, scoring, monitoring et reporting impact.",
      },
      en: {
        title: "Wakama Programs — Measurable Agricultural Financial Inclusion",
        description:
          "Wakama helps donors, ministries, agribusinesses and agricultural programs structure farmer portfolios with field data, scoring, monitoring and impact reporting.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/solutions/programs", label: {fr: "Programmes & partenaires", en: "Programs & partners"}},
    ],
  },
  diagnosticAgricredit: {
    path: "/diagnostic-agricredit",
    changeFrequency: "monthly",
    priority: 0.85,
    copy: {
      fr: {
        title: "Diagnostic AgriCredit — Cadrer un portefeuille agricole finançable",
        description:
          "Analysez une filière, une zone ou un portefeuille agricole avant pilote : données disponibles, coûts terrain, scoring readiness, KPIs et plan de déploiement Wakama.",
      },
      en: {
        title: "AgriCredit Diagnostic — Frame a Financeable Agricultural Portfolio",
        description:
          "Analyze a value chain, zone or agricultural portfolio before piloting: available data, field costs, scoring readiness, KPIs and Wakama deployment plan.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/diagnostic-agricredit", label: {fr: "Diagnostic AgriCredit", en: "AgriCredit Diagnostic"}},
    ],
  },
  platformIntegration: {
    path: "/platform/integration",
    changeFrequency: "monthly",
    priority: 0.65,
    copy: {
      fr: {
        title: "Wakama Integration — APIs et intégration aux workflows institutionnels",
        description:
          "Découvrez comment Wakama connecte APIs, reporting et données agricoles vérifiées aux workflows d’IMF, banques et assureurs.",
      },
      en: {
        title: "Wakama Integration — APIs for Institutional Agricultural Workflows",
        description:
          "Discover how Wakama connects APIs, reporting and verified agricultural data to MFI, bank and insurer workflows.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/platform", label: {fr: "Plateforme", en: "Platform"}},
      {path: "/platform/integration", label: {fr: "Intégration", en: "Integration"}},
    ],
  },
  platformScore: {
    path: "/platform/score",
    changeFrequency: "monthly",
    priority: 0.65,
    copy: {
      fr: {
        title: "Wakama Score — Scoring agricole pour IMF, banques et assureurs",
        description:
          "Explorez Wakama Score pour structurer le risque crédit agricole avec données terrain, signaux NDVI, météo et dossier explicable.",
      },
      en: {
        title: "Wakama Score — Agricultural Scoring for MFIs, Banks and Insurers",
        description:
          "Explore Wakama Score to structure agricultural credit risk with field data, NDVI signals, weather and an explainable file.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/platform", label: {fr: "Plateforme", en: "Platform"}},
      {path: "/platform/score", label: {fr: "Score", en: "Score"}},
    ],
  },
  platformDashboards: {
    path: "/platform/dashboards",
    changeFrequency: "monthly",
    priority: 0.7,
    copy: {
      fr: {
        title: "Dashboards Wakama — Monitoring des portefeuilles agricoles",
        description:
          "Suivez dossiers, alertes, campagnes, parcelles et portefeuilles agricoles institutionnels avec les dashboards Wakama.",
      },
      en: {
        title: "Wakama Dashboards — Monitoring for Agricultural Portfolios",
        description:
          "Track files, alerts, campaigns, plots and institutional agricultural portfolios with Wakama dashboards.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/platform", label: {fr: "Plateforme", en: "Platform"}},
      {path: "/platform/dashboards", label: {fr: "Dashboards", en: "Dashboards"}},
    ],
  },
  privacy: {
    path: "/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
    copy: {
      fr: {
        title: "Politique de confidentialité — Wakama",
        description:
          "Consultez la politique de confidentialité de Wakama relative aux données, à la sécurité et aux droits des utilisateurs.",
      },
      en: {
        title: "Privacy Policy — Wakama",
        description:
          "Review Wakama’s privacy policy covering data handling, security and user rights.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/privacy", label: {fr: "Confidentialité", en: "Privacy"}},
    ],
  },
  terms: {
    path: "/terms",
    changeFrequency: "yearly",
    priority: 0.3,
    copy: {
      fr: {
        title: "Conditions d’utilisation — Wakama",
        description:
          "Consultez les conditions d’utilisation du site Wakama et le cadre de responsabilité de l’entreprise.",
      },
      en: {
        title: "Terms of Use — Wakama",
        description:
          "Review Wakama’s website terms of use and the company’s responsibility framework.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/terms", label: {fr: "Conditions", en: "Terms"}},
    ],
  },
  solutionsServices: {
    path: "/solutions/services",
    changeFrequency: "monthly",
    priority: 0.6,
    copy: {
      fr: {
        title: "Wakama Services — Exécution terrain et dossiers agricoles vérifiés",
        description:
          "Découvrez l’offre Wakama Services pour l’onboarding producteurs, le KYC agricole, la géolocalisation parcellaire et le monitoring portefeuille.",
      },
      en: {
        title: "Wakama Services — Field Execution and Verified Agricultural Files",
        description:
          "Discover Wakama Services for farmer onboarding, agricultural KYC, plot geolocation and portfolio monitoring.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/solutions/services", label: {fr: "Services", en: "Services"}},
    ],
  },
  solutionsScore: {
    path: "/solutions/score",
    changeFrequency: "monthly",
    priority: 0.6,
    copy: {
      fr: {
        title: "Wakama Score — Lecture du risque crédit agricole",
        description:
          "Découvrez comment Wakama Score aide les institutions à documenter le risque agricole avec données terrain vérifiées et audit trail.",
      },
      en: {
        title: "Wakama Score — Agricultural Credit Risk Readability",
        description:
          "Discover how Wakama Score helps institutions document agricultural risk with verified field data and audit trails.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/solutions/score", label: {fr: "Score", en: "Score"}},
    ],
  },
  home2: {
    path: "/home2",
    includeInSitemap: false,
    indexable: false,
    copy: {
      fr: {
        title: "Archive Wakama — Version interne",
        description: "Archive interne non destinée à l’indexation publique.",
      },
      en: {
        title: "Wakama Archive — Internal Version",
        description: "Internal archive not intended for public indexing.",
      },
    },
    breadcrumbs: [
      {path: "", label: {fr: "Accueil", en: "Home"}},
      {path: "/home2", label: {fr: "Archive", en: "Archive"}},
    ],
  },
} satisfies Record<string, SeoRoute>;

export type SeoRouteKey = keyof typeof seoRoutes;

const localeRegionMap: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function getLocalizedPath(locale: Locale, routePath: string) {
  return routePath ? `/${locale}${routePath}` : `/${locale}`;
}

function getRoute(routeKey: SeoRouteKey): SeoRoute {
  return seoRoutes[routeKey] as SeoRoute;
}

function getRouteCopy(routeKey: SeoRouteKey, locale: Locale): LocaleCopy {
  return getRoute(routeKey).copy[locale] as LocaleCopy;
}

function buildRobots(indexable = true): NonNullable<Metadata["robots"]> {
  if (!indexable) {
    return {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    };
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export function buildLocaleMetadata(locale: Locale): Metadata {
  const homeCopy = getRouteCopy("home", locale);

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    alternates: {
      languages: {
        fr: absoluteUrl("/fr"),
        en: absoluteUrl("/en"),
        "x-default": absoluteUrl("/fr"),
      },
    },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      locale: localeRegionMap[locale],
      alternateLocale: locale === "fr" ? [localeRegionMap.en] : [localeRegionMap.fr],
      images: [absoluteUrl(OG_IMAGE_PATH)],
      title: homeCopy.openGraphTitle ?? homeCopy.title,
      description: homeCopy.openGraphDescription ?? homeCopy.description,
    },
    twitter: {
      card: "summary_large_image",
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
  };
}

export function buildPageMetadata(routeKey: SeoRouteKey, locale: Locale): Metadata {
  const route = getRoute(routeKey);
  const copy = route.copy[locale] as LocaleCopy;
  const currentUrl = absoluteUrl(getLocalizedPath(locale, route.path));

  return {
    metadataBase: new URL(SITE_URL),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: currentUrl,
      languages: {
        fr: absoluteUrl(getLocalizedPath("fr", route.path)),
        en: absoluteUrl(getLocalizedPath("en", route.path)),
        "x-default": absoluteUrl(getLocalizedPath("fr", route.path)),
      },
    },
    openGraph: {
      title: copy.openGraphTitle ?? copy.title,
      description: copy.openGraphDescription ?? copy.description,
      url: currentUrl,
      siteName: SITE_NAME,
      type: "website",
      locale: localeRegionMap[locale],
      alternateLocale: locale === "fr" ? [localeRegionMap.en] : [localeRegionMap.fr],
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.openGraphTitle ?? copy.title,
      description: copy.openGraphDescription ?? copy.description,
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
    robots: buildRobots(route.indexable !== false),
  };
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return (Object.entries(seoRoutes) as Array<[SeoRouteKey, SeoRoute]>)
    .filter(([, route]) => route.includeInSitemap !== false && route.indexable !== false)
    .flatMap(([, route]) =>
      (["fr", "en"] as const).map((locale) => ({
        url: absoluteUrl(getLocalizedPath(locale, route.path)),
        lastModified,
        changeFrequency: route.changeFrequency ?? defaultChangeFrequency,
        priority: route.priority ?? 0.6,
        alternates: {
          languages: {
            fr: absoluteUrl(getLocalizedPath("fr", route.path)),
            en: absoluteUrl(getLocalizedPath("en", route.path)),
          },
        },
      })),
    );
}

function getOrganizationDescription(locale: Locale) {
  return locale === "fr"
    ? "Wakama Edge Ventures développe une infrastructure de crédit agricole pour IMF, banques, assureurs, coopératives et programmes agricoles en Côte d’Ivoire, UEMOA et Afrique."
    : "Wakama Edge Ventures builds agricultural credit infrastructure for MFIs, banks, insurers, cooperatives and agricultural programs in Côte d’Ivoire, UEMOA and Africa.";
}

function buildOrganizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("#organization"),
    name: COMPANY_NAME,
    url: SITE_URL,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    founder: {
      "@type": "Person",
      name: "Marouane Jebbar",
    },
    areaServed: ["Côte d’Ivoire", "UEMOA", "Africa"],
    description: getOrganizationDescription(locale),
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "business inquiries",
      email: "pilot@wakama.farm",
      availableLanguage: locale === "fr" ? ["French", "English"] : ["English", "French"],
      url: absoluteUrl(getLocalizedPath(locale, "/pilot")),
    },
  };
}

function buildWebsiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("#website"),
    name: SITE_NAME,
    alternateName: COMPANY_NAME,
    url: SITE_URL,
    inLanguage: locale,
    publisher: {
      "@id": absoluteUrl("#organization"),
    },
  };
}

function buildBreadcrumbSchema(routeKey: SeoRouteKey, locale: Locale) {
  const route = getRoute(routeKey);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: route.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label[locale],
      item: absoluteUrl(getLocalizedPath(locale, item.path)),
    })),
  };
}

export function buildStructuredData(routeKey: SeoRouteKey, locale: Locale) {
  return [buildOrganizationSchema(locale), buildWebsiteSchema(locale), buildBreadcrumbSchema(routeKey, locale)];
}
