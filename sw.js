self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("darsh-app").then(cache => {
      return cache.addAll([
        "/love-site/",
        "/love-site/index.html",
        "/love-site/css/style.css",
        "/love-site/js/typer.js",
        "/love-site/songs.html",
        "/love-site/message.html",
        "/love-site/photos.html",
        "/love-site/images/background.jpg",
        "/love-site/images/icon-192.png",
        "/love-site/images/icon-512.png",
        "/love-site/audio/love.mp3"         // 💾 cache music for offline
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
