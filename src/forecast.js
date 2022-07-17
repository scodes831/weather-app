//access geocode api
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

//access current weather api
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0643aacd639df6653d874ad486e6f335`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const weather = response.weather[0].main;
        const currentTemp = response.main.temp;
        const lowTemp = response.main.temp_min;
        const highTemp = response.main.temp_max;
        const humidity = response.main.humidity;
        const wind = response.wind.speed;
        console.log(`current temp is ${currentTemp}`); //301.59
        console.log(`low temp is ${lowTemp}`);
        console.log(`high temp is ${highTemp}`);
        console.log(`humidity is ${humidity}`);
        console.log(`wind is ${wind}`);
        console.log(`overall weather is ${weather}`);
    })
    .catch(function(error) {
        console.log(error);
    })
}
