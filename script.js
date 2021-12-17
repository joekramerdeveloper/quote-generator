// Using Local Storage for quote generator if API doesnt work
function newQuote() {
    // pick random quote from quote array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);

}
// Get quotes from API via asychronus fetch request w/in a try catch statement 
// async runs anytime and wont stop the browser from loading
// try/catch trys to do a fetch, but if fails catches error and can use it
// NOTE using async and await allows the "response" variable below to get data before
    // it loads, otherwise it wouldnt work and would just be undefined   

// YOU'LL NEED THIS LATER ˇˇˇ
    // https://salty-falls-81744.herokuapp.com/ 

// 1A : UNCOMMENT THE FOLLOWING FOR getting data from API (still need proxy)
    // let apiQuotes = [];

// async function getQuotes() {
//     const apiUrl = 'https://quotes-react.netlify.app/';
//     try {
//         const response = await fetch(apiUrl);
//         // getting json from API as a response, then turning back into json object and put into variable
//         apiQuotes = await response.json();
//         console.log(apiQuotes);
//     } catch (error) {
//         // handle error here please
//     }
// }


// NOW you must instantiate the beautiful function you just made
// so it actually will execute

// getQuotes() ;
//  1a: END

newQuote();