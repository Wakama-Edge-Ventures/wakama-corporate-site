type UmamiValue = string | number | boolean | null;

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, UmamiValue>) => void;
    };
  }
}

function getUmami() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.umami ?? null;
}

export function getUmamiEventNameForHref(href: string) {
  const normalizedHref = href.trim();

  if (normalizedHref.includes("/solutions/imf")) {
    return "service_imf_click";
  }

  if (normalizedHref.includes("/solutions/bank")) {
    return "service_bank_click";
  }

  if (normalizedHref.includes("/solutions/insurance")) {
    return "service_insurance_click";
  }

  if (normalizedHref.includes("/solutions/programs")) {
    return "service_programs_click";
  }

  if (normalizedHref.includes("/platform")) {
    return "platform_click";
  }

  if (normalizedHref.includes("/compliance")) {
    return "compliance_click";
  }

  if (normalizedHref.includes("linkedin.com/company/wakama-farm")) {
    return "linkedin_click";
  }

  return null;
}

export function trackUmamiEvent(eventName: string, eventData?: Record<string, UmamiValue>) {
  const umami = getUmami();

  if (!umami) {
    return;
  }

  umami.track(eventName, eventData);
}

export function trackConversionLink(href: string, placement?: string) {
  const normalizedHref = href.trim();
  let eventName: string | null = null;

  if (normalizedHref.includes("/diagnostic-agricredit")) {
    eventName = "cta_diagnostic_click";
  } else if (normalizedHref.includes("/pilot")) {
    eventName = "cta_pilot_click";
  }

  if (!eventName) {
    return;
  }

  trackUmamiEvent(eventName, {
    href: normalizedHref,
    placement: placement ?? null,
    source_path: typeof window !== "undefined" ? window.location.pathname : null,
  });
}

export function trackFarmerAccess(placement: string) {
  trackUmamiEvent("cta_farmer_access_click", {
    href: "https://farmer.wakama.farm/",
    placement,
    source_path: typeof window !== "undefined" ? window.location.pathname : null,
  });
}
