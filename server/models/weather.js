const request = require('request-promise');

const API_KEY = '1ecdd5defcd8e3303ba92c106c2c2f08';

class Weather {
  static retrieveByCity(city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    }).then(function (res) {
      callback(res);
    }).catch(function (err) {
      console.log(err);
      callback({ error: `Could not reach OpenWeatherMap API`})
    })
  }
}

module.exports = Weather;