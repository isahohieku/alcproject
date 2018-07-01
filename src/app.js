
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}

const currency1Field = document.getElementById('currency1') 
const currency2Field = document.getElementById('currency2')

//Create Element
const createNode = (element) =>{
    return document.createElement(element)
}

//Append Element
const appendElement = (parent, element) =>{
    return parent.appendChild(element)
}

fetch('https://free.currencyconverterapi.com/api/v5/currencies').then((response)=>{
    return response.json()
}).then((data)=>{

    const currencies = data.results
    console.log(currencies)

    return Object.entries(currencies).forEach( ([key, value]) => {
        
        let option = createNode('option')

        option.value = key
        option.text = value.currencyName

        appendElement(currency1Field, option)
        appendElement(currency2Field, option)
    })

}).catch(()=>{
    console.log('fetch failed')
})


const dontReload = (e)=>{
    e.preventDefault()

    let amount = document.getElementById('amount')
    console.log(amount)
}


dontReload(e)