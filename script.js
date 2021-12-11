// Get quotes from API via asychronus fetch request w/in a try catch statement 
// async runs anytime and wont stop the browser from loading
// try/catch trys to do a fetch, but if fails catches error and can use it
// NOTE using async and await allows the "response" variable below to get data before
    // it loads, otherwise it wouldnt work and would just be undefined
    
let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://quotes-react.netlify.app/';
    try {
        const response = await fetch(apiUrl);
        // getting json from API as a response, then turning back into json object and put into variable
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        // handle error here please
    }
}

// NOW you must instantiate the beautiful function you just made
// so it actually will execute

getQuotes() ;