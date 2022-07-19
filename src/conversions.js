export function convertKelvinToFahrenheit(temp) {
    return (Math.round((((temp-273.15)*9)/5)+32) + '°F');
}

export function convertFahrenheitToCelsius(temp) {
    const numTemp = +temp.substring(0, temp.length-2);
    return (Math.round((numTemp-32)/1.8) + '°C');
}

export function convertCelsiusToFahrenheit(temp) {
    const numTemp = +temp.substring(0, temp.length-2);
    return (Math.round(numTemp*(9/5)+32) + '°F');
}