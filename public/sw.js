const CACHE_NAME = `portfolio-v${Date.now()}`;
const OFFLINE_PAGE = "/en"; // Route vers la page par défaut

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        return await cache.addAll([
          "/en",
          "/fr",
          "/manifest.webmanifest",
          "/profile.png",
          "/CV-DANIEL-MWAMBA.pdf",
          "/devsphere.png",
          "/duplex.png",
          "/streameex.png",
          "/catfish.png",
          "/grid.svg",
        ]);
      } catch (err) {
        return console.error(err);
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.url.includes("/_next/")) {
    return fetch(event.request);
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (event.request.url.startsWith(self.location.origin)) {
          const clone = response.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() =>
        caches
          .match(event.request)
          .then((cached) => cached || caches.match(OFFLINE_PAGE))
      )
  );
});
