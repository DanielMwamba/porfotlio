import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    // Exclure les fichiers statiques, API routes, et assets
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|sw.js|grid.svg|manifest.webmanifest|apple-icon.png|icon0.svg|icon1.png).*)",
  ],
};
