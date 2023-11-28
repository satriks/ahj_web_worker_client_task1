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

const site = process.env.SITE_URL || ''
console.log('this is site: ', site)
// let site = ""
// if (env.sateUrl) { site = env.sateUrl}

self.addEventListener('install', (event) => {
  console.log('install')
  self.skipWaiting()
})

self.addEventListener('activate', async (event) => {
  console.log('activate')
  clientsClaim()
  await caches.open(cacheName)
    .then((cache) => {
      cache.add(site + '/')
      cache.add(site + '/main.css')
      cache.add(site + '/main.js')
    })
})

self.addEventListener('fetch', (event) => {
  console.log(' start fetching')
  console.log('SW fetchin:', event.request.url)

  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  )
})
