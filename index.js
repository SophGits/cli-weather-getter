"use strict";
var Promise = require('es6-promise').Promise,
  axios = require('axios');

var APP_ID = "bd82977b86bf27fb59a04b61b657fb6f";


// Main
function getIcon(code) {
  var iconMap = {
    "01d": "🌈",
    "02d": "☁️",
    "03d": "☁️☁",
    "04d": "⛅",
    "09d": "☔",
    "10d" : "💦",
    "11d" : "⚡",
    "13d": "❄",
    "50d": "💨"
  };

  return iconMap[code];
}


axios.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=" + APP_ID)
  .then(function (res) {
    var icon = getIcon(res.data.weather[0].icon);
    console.log(icon);
  })
  .catch(function (error) {
    console.log(error);
  });
