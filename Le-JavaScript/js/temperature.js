const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Veuillez entrer une température en Celsius : ", function(tempeCelsius) {
    let fahrenheit = (9 / 5) + 32;
    let tempFahrenheit = tempeCelsius * fahrenheit;

    console.log(`La température ${tempeCelsius} degré Celsius est ${tempFahrenheit} degré en Farhrenheit`);

    rl.close();
});

// console.log("------------------------ CALCUL TEMPERATURE DEGRES CELSIUS EN FAHRENHEIT ------------------------");

// var tempeCelsius = prompt("Veuillez entrer une température en Celsius : ");
// var fahrenheit = (9 / 5) + 32;
// var tempFahrenheit = tempeCelsius * fahrenheit;

// console.log("La température " + tempeCelsius + " degrés Celsius est " + tempFahrenheit + " degrés FAHRENHEIT");