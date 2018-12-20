let staticCache = 'my-cache-1';


self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith("my-") && cacheName != staticCache
                }).map(function (cacheName) {
                    return cache.delete(cacheName);
                })

            );
        })
    );
});

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCache).then(function (cache) {
            return cache.addAll(
                [   
                    './',
                    './imgs/hero.jpg',
                    './imgs/img.jpg',
                    './imgs/img2.jpg',
                    './imgs/img3.jpg',
                    './imgs/logo.jpg',
                    './js/app.js',
                    './styles.css',
                    './index.html'
                ]
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    );
});