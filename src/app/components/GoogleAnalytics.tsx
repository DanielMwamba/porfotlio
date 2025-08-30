"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// Déclaration des types pour gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: {
        page_path?: string;
        page_title?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

const GA_MEASUREMENT_ID = "G-QVD39DD5BP";

function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Suivre les changements de page
  useEffect(() => {
    if (pathname && window.gtag) {
      const url =
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : "");

      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsInner />
      </Suspense>
    </>
  );
}

// Fonctions utilitaires pour suivre les événements personnalisés
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Suivre les clics sur les liens externes
export const trackOutboundLink = (url: string, label?: string) => {
  trackEvent("click", "outbound", label || url);
};

// Suivre les téléchargements
export const trackDownload = (fileName: string) => {
  trackEvent("download", "file", fileName);
};

// Suivre les interactions avec les projets
export const trackProjectView = (projectName: string) => {
  trackEvent("view_project", "projects", projectName);
};

// Suivre les formulaires de contact
export const trackContactForm = (action: "start" | "submit" | "error") => {
  trackEvent(`form_${action}`, "contact");
};
