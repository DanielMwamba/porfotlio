import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daniel MWAMBA - Full Stack Developer",
    short_name: "Daniel MWAMBA",
    description:
      "Portfolio of Daniel Mwamba, a passionate Full Stack Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/profile.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "profile.png",
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
  };
}
