const CACHE = 'task-triage-v1';
const ASSETS = [
  '/task-triage/',
  '/task-triage/index.html',
  '/task-triage/manifest.json',
  '/task-triage/icon.png',
  '/task-triage/icon-192.png',
  '/task-triage/icon-180.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
