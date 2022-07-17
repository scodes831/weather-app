//access geocode api
// export async function getCoordinates(input) {
//     const coordinatesURL = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=0643aacd639df6653d874ad486e6f335`;
//     const response = await fetch(coordinatesURL, {mode: 'cors'});
//     const coordinates = await response.json();
//     console.log(coordinates);
//     const lat = response[0].lat;
//     const lon = coordinates.lon;
//     getWeather(lat, lon);
// }

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

//access 5 day forecast api
function getWeather(lat, lon) {
    console.log(`the latitude is ${lat} and longitude is ${lon}`);
    fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0643aacd639df6653d874ad486e6f335`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })

}
