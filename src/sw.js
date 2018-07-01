
self.addEventListener('install', (event)=>{

    const urlsToCache = [
        '/',
        'css/style.css',
        'img/andelaWhite.png',
        'img/bg_img.png',
        'img/convert2.png',
        'app.js',
        'index.html'
    ]

    event.waitUntil(
        caches.open('currencyConveterv1').then((cache)=>{
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch', (event)=>{

    event.respondWith(
        caches.match(event.request).then((response)=>{
            if(response) return response

            return fetch(event.request) 
        }) 
    )
})


self.addEventListener('activate', (event)=>{
    event.waitUntil(
        
    )
})