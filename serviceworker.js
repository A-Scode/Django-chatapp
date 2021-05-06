// Performing installing steps

let cache_name = "websocket_cache"

let urls = [
    "/"
]
self.addEventListener(
    "install",
    (event)=>{
        event.waitUntil(
            caches.open(cache_name).then(
                (cache)=>{
                    console.log("Opend Cache")
                    return cache.addAll(urls)
                }
            )
        )
    }
)

self.addEventListener(
    "fetch",
    (event)=>{
        caches.match(event.request).then(
            (response)=>{
                if (response){
                    return response
                }
                return fetch(event.request)
            }
        )
    }
)