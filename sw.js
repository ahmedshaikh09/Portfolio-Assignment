self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCache).then(function (cache) {
            return cache.addAll(
                [
                    '/imgs/*.jpg',
                    '/js/app.js',
                    '/styles.css',
                    '/',
                    '/index.html'
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