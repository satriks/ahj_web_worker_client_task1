// import { precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
// import { NetworkFirst, CacheFirst} from 'workbox-strategies'

const version = 'v'
const cacheName = `ahj-service-${version}`
// const files = [
//   '/',
//   '/main.css'
//   '/main.js'
// ]

self.addEventListener('install', (event) => {
  caches.open(cacheName)
    .then((cache) => {
      cache.add('/')
      cache.add('/main.css')
      cache.add('/main.js')
    })

  console.log('install')
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  console.log('activate')
  clientsClaim()
})

self.addEventListener('fetch', (event) => {
  console.log(' start fetching')
  console.log('SW fetchin:', event.request.url)

  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  )
})
