import { ReactNode } from "react";
import { getStaticParams } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";
import type { Metadata, Viewport } from "next";

export function generateStaticParams() {
  return getStaticParams();
}

// Fonction viewport pour les layouts de langue
export const viewport: Viewport = {
  themeColor: "#000000",
};

// Génération des métadonnées dynamiques selon la langue
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const locale = params.locale;

  const translations = {
    en: {
      title: "Daniel MWAMBA | Full Stack Developer",
      description:
        "Portfolio of Daniel Mwamba, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.",
      siteName: "Daniel MWAMBA Portfolio",
      locale: "en_US",
    },
    fr: {
      title: "Daniel MWAMBA | Développeur Full Stack",
      description:
        "Portfolio de Daniel Mwamba, un Développeur Full Stack passionné spécialisé en React, Node.js et technologies web modernes.",
      siteName: "Portfolio Daniel MWAMBA",
      locale: "fr_FR",
    },
  };

  const t =
    translations[locale as keyof typeof translations] || translations.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://danielmwamba.com/${locale}`,
      siteName: t.siteName,
      images: [
        {
          url: "https://danielmwamba.com/profile.png",
          width: 1200,
          height: 630,
          alt: `${t.title}`,
        },
      ],
      locale: t.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      creator: "@danielmwamba",
      images: ["https://danielmwamba.com/profile.png"],
    },
    alternates: {
      canonical: `https://danielmwamba.com/${locale}`,
      languages: {
        en: "https://danielmwamba.com/en",
        fr: "https://danielmwamba.com/fr",
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  return (
    <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>
  );
}
