self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('timer-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html', // O nome do seu arquivo HTML
        '/icone.ico', // O ícone que você está usando
        '/start.mp3', // Adicione todos os outros arquivos necessários
        '/finish.mp3',
        '/pause.mp3',
        '/resume.mp3',
        '/complete.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
