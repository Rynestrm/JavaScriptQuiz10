// get JSON joke list
async function getJokes() {
    const responce = await fetch('https://official-joke-api.appspot.com/random_ten');
    const data = await responce.json();
    jokes.push(...data);
    show();
}
// run the joke list and put it into the empty jokes aray
getJokes();

// variables
const jokes = [];
let counter = 0;
console.log(counter);

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
let newJoke = document.querySelector('.newJoke');
console.log(h2);

// functions
function show() {
    h1.textContent = jokes[counter].setup;
    h2.textContent = jokes[counter].punchline;
}

function nextJoke() {
    if (counter === jokes.length - 1) {
      counter = 0;
    } else {
      counter +=1;
    }
    show();
    console.log('its running');
  }

// event listener 
newJoke.addEventListener('click', nextJoke);
