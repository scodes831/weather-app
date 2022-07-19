import { convertFahrenheitToCelsius, convertCelsiusToFahrenheit } from "./conversions";
import { displayWeather } from "./card";

export function displayToggleBtns() {
    const toggleBtns = document.querySelector('#toggle-container');
    toggleBtns.style.display = "flex";
}

export function toggleToCelsius(obj) {
    console.log(`starting toggle to celsius`);
    console.log(obj.currentTemp);
    const currentC = convertFahrenheitToCelsius(obj.currentTemp);
    const highC = convertFahrenheitToCelsius(obj.highTemp);
    const lowC = convertFahrenheitToCelsius(obj.lowTemp);
    obj.currentTemp = currentC;
    obj.highTemp = highC;
    obj.lowTemp = lowC;
    displayWeather(obj);
}

export function toggleToFahrenheit(obj) {
    const currentF = convertCelsiusToFahrenheit(obj.currentTemp);
    const highF = convertCelsiusToFahrenheit(obj.highTemp);
    const lowF = convertCelsiusToFahrenheit(obj.lowTemp);
    obj.currentTemp = currentF;
    obj.highTemp = highF;
    obj.lowTemp = lowF;
    displayWeather(obj);
}