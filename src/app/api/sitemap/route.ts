import { NextResponse } from "next/server";

export async function GET() {
  // Définir la date actuelle pour lastmod
  const date = new Date().toISOString().split("T")[0];

  // Base URL du site
  const baseUrl = "https://danielmwamba.com";

  // Pages et sections du site
  const pages = [
    { url: "/", priority: "1.0" },
    { url: "/#about", priority: "0.8" },
    { url: "/#skills", priority: "0.8" },
    { url: "/#projects", priority: "0.9" },
    { url: "/#contact", priority: "0.7" },
  ];

  // Créer le contenu XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
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
