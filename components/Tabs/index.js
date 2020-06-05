// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        const topicsObj = response.data.topics
        //console.log(topicsObj)

        topicsObj.forEach(arr => {
            const tab =  createTab(arr) 
            topics.appendChild(tab)
        })

    })
    .catch(error => {
        console.log(error)
    })

function createTab(item) {
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = item
    
    return tab
}

/*
    const topics = document.querySelector('.topics')

        for (let i = 0; i < topicsObj.length; i++) {
            const tab = document.createElement('div')
            tab.classList.add('tab')
            tab.textContent = item.topics
        
            topics.appendChild(tab)
        }
        */