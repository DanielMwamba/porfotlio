import { NextResponse } from "next/server";

export async function GET() {
  // Base URL du site
  const baseUrl = "https://danielmwamba.com";

  // Contenu du fichier robots.txt
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml
`;

  // Retourner la réponse avec les en-têtes appropriés
  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
