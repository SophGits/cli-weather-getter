"use strict";
var weather = require("./weather");

function throwError(err) {
  throw new Error(err);
}

// Main
function getIcon(code) {
  code = code.slice(0,2);
  var iconMap = {
    "01": String.fromCharCode(0xD83C, 0xDF08),
    "02": "☁️",
    "03": "☁️☁",
    "04": "⛅",
    "09": "☔",
    "10" : String.fromCharCode(0xD83D, 0xDCA6),
    "11" : "⚡",
    "13": "❄",
    "50": String.fromCharCode(0xD83C,0xDF01)
  };

  return iconMap[code] || throwError(code);
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
