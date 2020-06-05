// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles/')
    .then(response => {
        const javascript = response.data.articles.javascript
        const bootstrap = response.data.articles.bootstrap
        const jquery = response.data.articles.jquery
        const node = response.data.articles.node
        const technology = response.data.articles.technology

        const articlesArr = []

        javascript.forEach(item => {
            articlesArr.push(item)
        })
        bootstrap.forEach(item => {
            articlesArr.push(item)
        })
        jquery.forEach(item => {
            articlesArr.push(item)
        })
        node.forEach(item => {
            articlesArr.push(item)
        })
        technology.forEach(item => {
            articlesArr.push(item)
        })

        articlesArr.forEach(articles => {
            const theCard =  getArticle(articles) 
            cardsContainer.appendChild(theCard)
        })
    })
    .catch(error => {
        console.log(error)
    })

function getArticle(article) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const image = document.createElement('div')
    const imageLink = document.createElement('img')
    const authorsName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    image.classList.add('img-container')

    headline.textContent = article.headline
    imageLink.src = article.authorPhoto
    authorsName.textContent = `By ${article.authorName}`
  
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(image)
    image.appendChild(imageLink)
    author.appendChild(authorsName)

    return card
}