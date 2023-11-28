import NewsWidget from './widget/NewsWidget/NewsWidget'
import { Workbox } from 'workbox-window'

const place = document.querySelector('main')
// const serverUrl = 'http://localhost:7070'
const serverUrl = 'https://ahj-webworker-server-task1.onrender.com'
const news = new NewsWidget(place, serverUrl)

if ('serviceWorker' in navigator) {
  const wb = new Workbox('./service.worker.js')
  wb.register()
}

console.log('this is env from app', test)

setTimeout(() => news.createNews(), 10000)
