require ('./style.css');

import { getCoordinates, weatherObj } from './forecast';
import { toggleToCelsius, toggleToFahrenheit } from './display';

const searchBtn = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const celsiusToggleBtn = document.getElementById('celsius');
const fahrenheitToggleBtn = document.getElementById('fahrenheit');
let degrees = "F";

searchBtn.addEventListener('click', () => {
    const userInput = searchBar.value;
    getCoordinates(userInput);
    displayCity(userInput);
    degrees = "F";
})

celsiusToggleBtn.addEventListener('click', function() {
    if (degrees === "F") {
        degrees = "C";
        toggleToCelsius(weatherObj);
    } else if (degrees === "C") {
        return;
    }
});

fahrenheitToggleBtn.addEventListener('click', function() {
    if (degrees === "C") {
        degrees = "F";
        toggleToFahrenheit(weatherObj);
    } else if (degrees === "F") {
        return;
    }
});

getLocalStorageCity();

function displayCity(city) {
    const cityDisplay = document.getElementById('current-city-name');
    cityDisplay.textContent = city;
    localStorage.setItem('city', JSON.stringify(city));
}

function getLocalStorageCity() {
    const savedInLocalStorage = localStorage.getItem('city');
    if (savedInLocalStorage) {
        const savedCity = JSON.parse(savedInLocalStorage);
        displayCity(savedCity);
    }
}

