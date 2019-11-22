const express = require('express');
const weather = require('../models/weather');

const router = express.Router();

router.get('/:city', function (req, res) {
  const city = req.params.city;

  weather.retrieveByCity(city,function (err, weather) {
    if (err) {
      return res.json(err);
    }
    return res.json(weather);
  })
});

module.exports = router;