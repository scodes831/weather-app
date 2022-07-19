import cloudIcon from './images/cloud-icon.png';
import rainIcon from './images/rain.png';
import sunIcon from './images/sun.png';
import snowIcon from './images/snow.png';

export function displayWeather(obj) {
    const card = document.getElementById('card');
    card.style.display = "block";

    const overallDisplay = document.getElementById('weather-icon');
    switch (obj.overall) {
        case 'Clouds':
            overallDisplay.src = cloudIcon;
            break;
        case 'Rain':
            overallDisplay.src = rainIcon;
            break;
        case 'Snow':
            overallDisplay.src = snowIcon;
            break;
        default:
            overallDisplay.src = sunIcon;
    }

    const currTempDisplay = document.getElementById('current-temp');
    currTempDisplay.textContent = obj.currentTemp;
    const highTempDisplay = document.getElementById('high-temp');
    highTempDisplay.textContent = obj.highTemp;
    const lowTempDisplay = document.getElementById('low-temp');
    lowTempDisplay.textContent = obj.lowTemp;
    const windDisplay = document.getElementById('wind-value');
    windDisplay.textContent = obj.wind;
    const humidityDisplay = document.getElementById('humidity-value');
    humidityDisplay.textContent = obj.humidity;
}