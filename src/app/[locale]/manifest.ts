import type { MetadataRoute } from "next";

export default function manifest({
  params,
}: {
  params: { locale: string };
}): MetadataRoute.Manifest {
  const locale = params.locale;

  const translations = {
    en: {
      name: "Daniel MWAMBA - Full Stack Developer",
      short_name: "Daniel MWAMBA",
      description:
        "Portfolio of Daniel Mwamba, a passionate Full Stack Developer specializing in React, Node.js, and modern web technologies.",
      lang: "en-US",
    },
    fr: {
      name: "Daniel MWAMBA - Développeur Full Stack",
      short_name: "Daniel MWAMBA",
      description:
        "Portfolio de Daniel Mwamba, un Développeur Full Stack passionné spécialisé en React, Node.js et technologies web modernes.",
      lang: "fr-FR",
    },
  };

  const t =
    translations[locale as keyof typeof translations] || translations.en;

  return {
    name: t.name,
    short_name: t.short_name,
    description: t.description,
    start_url: `/${locale}`,
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    lang: t.lang,
    icons: [
      {
        src: "/profile.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["portfolio", "développement web", "technologie"],
  };
}
