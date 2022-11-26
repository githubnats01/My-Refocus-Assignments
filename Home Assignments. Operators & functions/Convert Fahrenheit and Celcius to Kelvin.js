function convertCelciusToKelvin (tempCelcius){
    let tempKelvinToCelcius = (tempCelcius+273.15);
    return tempKelvinToCelcius;
}
console.log(convertCelciusToKelvin(1))

function convertFahrenheitToKelvin (tempFahrenheit){
    let tempKelvinToFahrenheit = ((tempFahrenheit+459.67)*5/9);
    return tempKelvinToFahrenheit;
}
console.log(convertFahrenheitToKelvin(1))
