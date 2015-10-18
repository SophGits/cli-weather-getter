"use strict";
var weather = require("./weather");

// Main
function getIcon(code) {
  var iconMap = {
    "01d": String.fromCharCode(0xD83C, 0xDF08),
    "02d": "☁️",
    "03d": "☁️☁",
    "04d": "⛅",
    "09d": "☔",
    "10d" : String.fromCharCode(0xD83D, 0xDCA6),
    "11d" : "⚡",
    "13d": "❄",
    "50d": String.fromCharCode(0xD83C,0xDF01)
  };
  return iconMap[code];
}

function kelvinToCelsius(kelvin) {
  return (kelvin -273.15).toFixed(2);
}

var city = process.argv[2];
if (!city) {
  console.log("Pass city as argument.");
  process.exit(1);
}

weather.forCity(city)
  .then(function(res){
    var icon = getIcon(res.data.weather[0].icon),
      celsius = kelvinToCelsius(res.data.main.temp);

    console.log("%s  %d °C", icon, celsius);
  })
  .catch(function (error) {
    console.log(error);
  });
