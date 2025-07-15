import { NextResponse } from "next/server";

export async function GET() {
  // Définir la date actuelle pour lastmod
  const date = new Date().toISOString().split("T")[0];

  // Base URL du site
  const baseUrl = "https://danielmwamba.com";

  // Langues supportées
  const locales = ["en", "fr"];

  // Pages et sections du site
  const pages = [
    { url: "", priority: "1.0" }, // Page d'accueil
    { url: "#about", priority: "0.8" },
    { url: "#skills", priority: "0.8" },
    { url: "#projects", priority: "0.9" },
    { url: "#contact", priority: "0.7" },
  ];

  // Générer les URLs pour chaque langue
  const urls = [];

  for (const locale of locales) {
    for (const page of pages) {
      urls.push({
        url: `/${locale}${page.url}`,
        priority: page.priority,
        lastmod: date,
      });
    }
  }

  // Créer le contenu XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls
    .map((item) => {
      const pagePath = item.url.substring(3); // Enlever /en ou /fr

      return `
  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${item.priority}</priority>
    ${locales
      .map(
        (locale) =>
          `<xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}${pagePath}" />`
      )
      .join("\n    ")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en${pagePath}" />
  </url>`;
    })
    .join("")}
</urlset>`;

  // Retourner la réponse avec les en-têtes appropriés
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
