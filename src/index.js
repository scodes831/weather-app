require ('./style.css');

import { getCoordinates } from './forecast';

//control inputs of the user
const searchBtn = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchBtn.addEventListener('click', () => {
    const userInput = searchBar.value;
    console.log(`the user input is ${userInput}`);
    getCoordinates(userInput);
})

//add info to cards
function updateForecastCards() {
    const forecastContainer = document.getElementById('forecast-container');

    
}

