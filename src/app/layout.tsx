import type React from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import SocialMetaTags from "./components/SocialMetaTags";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel MWAMBA | Full Stack Developer",
  description:
    "Portfolio of Daniel Mwamba, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  authors: [{ name: "Daniel MWAMBA" }],
  creator: "Daniel MWAMBA",
  publisher: "Daniel MWAMBA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Daniel MWAMBA | Full Stack Developer",
    description:
      "Portfolio of Daniel Mwamba, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    url: "https://danielmwamba.com",
    siteName: "Daniel MWAMBA Portfolio",
    images: [
      {
        url: "https://danielmwamba.com/profile.png",
        width: 1200,
        height: 630,
        alt: "Daniel MWAMBA - Full Stack Developer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@danielmwamba",
    title: "Daniel MWAMBA | Full Stack Developer",
    description:
      "Portfolio of Daniel Mwamba, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    creator: "@danielmwamba",
    images: {
      url: "https://danielmwamba.com/profile.png",
      alt: "Daniel MWAMBA - Full Stack Developer",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://danielmwamba.com",
    languages: {
      en: "https://danielmwamba.com/en",
      fr: "https://danielmwamba.com/fr",
    },
  },
  appleWebApp: {
    title: "Daniel MWAMBA",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <Analytics />
      <head>
        <SocialMetaTags />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel MWAMBA",
              url: "https://danielmwamba.com",
              image: "https://danielmwamba.com/profile.png",
              sameAs: [
                "https://www.linkedin.com/in/danielmwamba",
                "https://github.com/danielmwamba",
                "https://x.com/danielmwamba",
              ],
              jobTitle: "Full Stack Developer",
              description:
                "Passionate Full Stack Developer specializing in React, Node.js, and modern web technologies",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Kadea Academy",
              },
              knowsAbout: [
                "React",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "Full Stack Development",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full Stack Developer",
                occupationLocation: {
                  "@type": "Country",
                  name: "République Démocratique du Congo",
                },
              },
              knowsLanguage: [
                {
                  "@type": "Language",
                  name: "French",
                  alternateName: "fr",
                },
                {
                  "@type": "Language",
                  name: "English",
                  alternateName: "en",
                },
              ],
            }),
          }}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://danielmwamba.com/en"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://danielmwamba.com/fr"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://danielmwamba.com/en"
        />
        <link rel="apple-touch-icon" href="/profile.png" />
      </head>
      <body className="font-sans bg-white text-black antialiased selection:bg-black selection:text-white">
        {children}
        <GoogleAnalytics />
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
