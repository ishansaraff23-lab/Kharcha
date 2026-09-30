// Kharcha service worker: keeps the app shell available offline.
// Bump VERSION whenever you upload new app files.
const VERSION = 'kharcha-v3';
const SHELL = ['./','index.html','style.css','app.js','icons.js','config.js','supabase.js','manifest.webmanifest',
  'icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/favicon.png',
  'fonts/manrope-latin-400-normal.woff2','fonts/manrope-latin-500-normal.woff2','fonts/manrope-latin-600-normal.woff2',
  'fonts/manrope-latin-700-normal.woff2','fonts/manrope-latin-800-normal.woff2'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // Supabase calls go straight to the network
  // Network first for app files so updates show up; fall back to cache offline.
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); } return r; })
    .catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('index.html'))));
});
