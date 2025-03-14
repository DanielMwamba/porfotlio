import type React from "react"
import "./globals.css"
import { Reenie_Beanie, Source_Code_Pro } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"

const reenieBeanie = Reenie_Beanie({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-reenie-beanie",
})

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-code-pro",
})

export const metadata: Metadata = {
  title: "Daniel MWAMBA | Full Stack Developer",
  description:
    "Portfolio of Daniel Mwamba, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Node.js", "JavaScript", "TypeScript", "Web Development"],
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
    description: "Portfolio of Daniel Mwamba, a passionate Full Stack Developer",
    url: "https://danielmwamba.vercel.app/profile.png",
    siteName: "Daniel MWAMBA Portfolio",
    images: [
      {
        url: "https://danielmwamba.vercel.app/profile.png",
        width: 1200,
        height: 630,
        alt: "Daniel MWAMBA - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel MWAMBA | Full Stack Developer",
    description: "Portfolio of Daniel Mwamba, a passionate Full Stack Developer",
    creator: "@danielmwamba",
    images: ["https://danielmwamba.vercel.app/profile.png"],
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
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://danielmwamba.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${reenieBeanie.variable} ${sourceCodePro.variable}`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel MWAMBA",
              url: "https://danielmwamba.vercel.app",
              image: "https://danielmwamba.vercel.app/profile.png",
              sameAs: [
                "https://www.linkedin.com/in/danielmwamba",
                "https://github.com/danielmwamba",
                "https://x.com/danielmwamba",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Kadea Academy",
              },
              knowsAbout: ["React", "Node.js", "JavaScript", "TypeScript", "Web Development"],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}

