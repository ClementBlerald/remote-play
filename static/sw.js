/*
fetch('https://eloquentjavascript.net/code/journal.js').then(v => {
  v.text().then(txt => {
    eval(txt)
    console.log(JOURNAL)
  })
})
*/

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
