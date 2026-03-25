/**
 * FillKit Demo Hub — Service Worker
 *
 * Strategy:
 *   - Navigation requests → network-first, fall back to cached /index.html
 *   - Static assets (.js, .css, .svg, .png, .woff2) → cache-first
 *   - External CDN requests (e.g. Tailwind) → skip, let browser cache handle
 *
 * Bump CACHE_VERSION to invalidate all caches on deploy.
 */

const CACHE_VERSION = 'fillkit-demo-v1';

const STATIC_EXTENSIONS = ['.js', '.css', '.svg', '.png', '.woff2', '.woff', '.ico'];

// ---------------- Install ----------------

self.addEventListener('install', (event) => {
  // Activate immediately, don't wait for existing tabs to close
  self.skipWaiting();
});

// ---------------- Activate ----------------

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_VERSION)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ---------------- Fetch ----------------

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests — skip external CDN, analytics, etc.
  if (url.origin !== self.location.origin) return;

  // Navigation requests → network-first with offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  // Static assets → cache-first
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Everything else → network only (no caching)
});

// ---------------- Strategies ----------------

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    // Cache a clone for offline use
    const cache = await caches.open(CACHE_VERSION);
    cache.put(request, response.clone());
    return response;
  } catch {
    // Offline — try cached version, then fall back to cached /index.html
    const cached = await caches.match(request);
    if (cached) return cached;
    return caches.match('/index.html');
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Asset not available offline — return a basic 503
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

// ---------------- Helpers ----------------

function isStaticAsset(pathname) {
  return STATIC_EXTENSIONS.some((ext) => pathname.endsWith(ext));
}
