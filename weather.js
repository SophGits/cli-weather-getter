"use strict";


var Promise = require('es6-promise').Promise,
  axios = require('axios');

var APP_ID = "bd82977b86bf27fb59a04b61b657fb6f";

function forCity(city) {
  return axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APP_ID)
}



module.exports = { forCity: forCity };