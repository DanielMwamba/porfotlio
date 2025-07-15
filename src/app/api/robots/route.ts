import { NextResponse } from "next/server";

export async function GET() {
  // Base URL du site
  const baseUrl = "https://danielmwamba.com";

  // Contenu du fichier robots.txt amélioré
  const robots = `User-agent: *
Allow: /

# Disallow crawling of API routes and admin pages
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow specific important pages
Allow: /en
Allow: /fr
Allow: /en/
Allow: /fr/

# Crawl delay (optionnel)
Crawl-delay: 1

# Sitemap locations
Sitemap: ${baseUrl}/sitemap.xml

# Additional directive for better crawling
Host: ${baseUrl}
`;

  // Retourner la réponse avec les en-têtes appropriés
  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
