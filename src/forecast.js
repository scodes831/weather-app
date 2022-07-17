import { displayWeather } from './card';
import { convertCelsiusToFahrenheit,
        convertFahrenheitToCelsius,
        convertKelvinToFahrenheit } from './conversions';

export const weatherObj = {
        overall: 0,
        currentTemp: 0,
        highTemp: 0,
        lowTemp: 0,
        humidity: 0,
        wind: 0
}

export function getCoordinates(input) {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=0643aacd639df6653d874ad486e6f335`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const lat = response[0].lat;
        const lon = response[0].lon;
        getWeather(lat, lon);
    })
    .catch(function(error) {
        console.log(error);
    })
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0643aacd639df6653d874ad486e6f335`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        weatherObj.overall = response.weather[0].main;
        weatherObj.currentTemp = convertKelvinToFahrenheit(response.main.temp);
        weatherObj.highTemp = convertKelvinToFahrenheit(response.main.temp_max);
        weatherObj.lowTemp = convertKelvinToFahrenheit(response.main.temp_min);
        weatherObj.humidity = Math.round(response.main.humidity) + '%';
        weatherObj.wind = Math.round(response.wind.speed) + ' mph';
        displayWeather(weatherObj);
    })
    .catch(function(error) {
        console.log(error);
    })
}


