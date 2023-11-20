import NewsWidget from './widget/NewsWidget/NewsWidget'

const place = document.querySelector('main')
// const serverUrl = "http://localhost:7070"
const serverUrl = 'https://ahj-webworker-server-task1.onrender.com'
const news = new NewsWidget(place, serverUrl)

if (navigator.serviceWorker) {
  window.addEventListener('load', async () => {
    try {
      if (navigator.serviceWorker) {
        await navigator.serviceWorker.register(
          './service-worker.js'
        )
        console.log('sw registered')
      }
    } catch (e) {
      console.log(e)
    }
  })
}

news.createNews()
