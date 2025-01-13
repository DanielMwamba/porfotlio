import type { Metadata } from "next"
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Daniel Mwamba | Développeur Full Stack",
  description: "Portfolio de Daniel Mwamba, développeur Full Stack passionné par la création d'applications web modernes et performantes.",
  keywords: ["développeur full stack", "React", "Next.js", "Node.js", "TypeScript"],
  authors: [{ name: "Daniel Mwamba" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.danmwamba.vercel.app",
    title: "Daniel Mwamba | Développeur Full Stack",
    description: "Portfolio de Daniel Mwamba, développeur Full Stack passionné par la création d'applications web modernes et performantes.",
    siteName: "Portfolio | Daniel Mwamba",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Mwamba | Développeur Full Stack",
    description: "Portfolio de Daniel Mwamba, développeur Full Stack passionné par la création d'applications web modernes et performantes.",
    creator: "@danielmwamba",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

