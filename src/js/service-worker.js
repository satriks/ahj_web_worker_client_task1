import { precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'

self.skipWaiting()
clientsClaim()

self.addEventListener('install', (event) => {
  precacheAndRoute(self.__WB_MANIFEST)
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
        .catch( err => {return response} )
      })
  )
})
