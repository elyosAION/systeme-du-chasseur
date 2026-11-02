/* Service worker : appli disponible hors connexion */
const CACHE = 'systeme-chasseur-v7';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];
const CDN = [
  'https://cdn.tailwindcss.com/3.4.17',
  'https://unpkg.com/lucide@0.453.0/dist/umd/lucide.min.js',
  'https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600;700;800&family=Barlow:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Spectral:ital,wght@0,400;0,500;1,400&display=swap'
];
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE);
    await Promise.all(CDN.map(u => c.add(new Request(u, { mode: 'no-cors' })).catch(() => {})));
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    /* Page : réseau d'abord (mises à jour), cache si hors connexion */
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  /* Ressources : cache d'abord, rafraîchi en arrière-plan */
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return r; }).catch(() => hit);
    return hit || net;
  }));
});
