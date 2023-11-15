export default class NewsWidget {
    constructor(element, url) {
        this.element = element;
        this.url = url;
        this.newsWidget = null
        this.newsContainer = null
        this.createDom()

// test data genereate

        let n = 0
        while (n < 5) {
        this.createPreloadMassage()
        // this.createMassage(new Date(Date.now()).toLocaleString(), 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg?w=826&t=st=1700057542~exp=1700058142~hmac=a59eb95998cafeaf27ccfbc98391c8a411a603c188f0d6e2ecc49671f509ca9e', 'Какой то текст для теста новости , выйдет 07ю18 93б ну и еще что то ')
        n++   } 

        setTimeout(() => {
            this.clearNews()
            n = 0
            while (n < 5) {
            // this.createPreloadMassage()
            this.createMassage(new Date(Date.now()).toLocaleString(), 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg?w=826&t=st=1700057542~exp=1700058142~hmac=a59eb95998cafeaf27ccfbc98391c8a411a603c188f0d6e2ecc49671f509ca9e', 'Какой то текст для теста новости , выйдет 07ю18 93б ну и еще что то ')
            n++   } 
        
        }, 7000)
// stop test data
        
    }
    createDom(){
        const newsWidget = document.createElement('div');
        newsWidget.className = 'news__wrapper'
        this.newsWidget = newsWidget

        const head = document.createElement('div');
        head.className = 'news__head'

        const title = document.createElement('span');
        title.className = 'news__title'
        title.textContent = 'Новости мира кино'

        const update = document.createElement('span');
        update.className = 'news__update'
        update.textContent = 'Обновить'
        head.append(title, update)

        const newsContainer = document.createElement('div');
        newsContainer.className = 'news__container'
        this.newsContainer = newsContainer

        newsWidget.append(head, newsContainer)
        this.element.append(newsWidget)
    }

    createMassage(date, img, title){
        const newMessage = document.createElement('div');
        newMessage.className = 'news'

        const newsDate = document.createElement('span');
        newsDate.className = 'news__date'
        newsDate.textContent = date

        const newsData = document.createElement('div');
        newsData.className = 'news__data'

        const newsImg = document.createElement('img');
        newsImg.className = 'news__img'
        newsImg.src = img
        
        const newsTitle = document.createElement('span');
        newsTitle.className = 'news__title'
        newsTitle.textContent = title

        newsData.append(newsImg, newsTitle)
        newMessage.append(newsDate, newsData)

        this.newsContainer.append(newMessage)

    }
    createPreloadMassage(){
        const newMessage = document.createElement('div');
        newMessage.className = 'news'

        const newsDate = document.createElement('span');
        newsDate.className = 'news__date'


        const newsData = document.createElement('div');
        newsData.className = 'news__data'

        const newsImg = document.createElement('img');
        newsImg.className = 'news__img'


        const preloadTitle = document.createElement('div');
        preloadTitle.className = 'news__preload'

        const newsTitle = document.createElement('span');
        newsTitle.className = 'news__title'
        newsTitle.classList.add('loading-data')
  
        const newsTitle2 = document.createElement('span');
        newsTitle2.className = 'news__title'
        newsTitle2.classList.add('loading-data')
        preloadTitle.append(newsTitle, newsTitle2)



        newMessage.classList.add('loading')
        newsDate.classList.add('loading-data')

        newsData.append(newsImg, preloadTitle)
        newMessage.append(newsDate, newsData)

        this.newsContainer.append(newMessage)   

    }

    clearNews (){
        this.newsContainer.remove()
        const newsContainer = document.createElement('div');
        newsContainer.className = 'news__container'
        this.newsContainer = newsContainer
        this.newsWidget.append(newsContainer)

    }
}