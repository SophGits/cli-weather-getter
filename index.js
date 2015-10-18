"use strict";
var Promise = require('es6-promise').Promise,
  axios = require('axios');

var APP_ID = "bd82977b86bf27fb59a04b61b657fb6f";


axios.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=" + APP_ID)
  .then(function (res) {
    var sunset = res.data.sys.sunset;
    sunset = new Date(sunset * 1e3);
    console.log("Sunset is: ", sunset);

  })
  .catch(function (error) {
    console.log(error);
  });
