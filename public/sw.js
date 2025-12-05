// Basic service worker for BurgerBoss PWA

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('burgerboss-static-v1').then((cache) =>
      cache.addAll([
        '/',
        '/index.html',
        '/vite.svg'
      ])
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});


