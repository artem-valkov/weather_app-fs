const express = require('express');
const Cities = require('../models/cities');

const router = express.Router();

router.get('/', function (req, res) {
  Cities.retrieveAll(function (err, cities) {
    if (err.error) {
      return res.json(err);
    }
    return res.json(cities);
  });
});

router.post('/', function (req, res) {
  const city = req.body.city;

  Cities.insert(city,function (err, result) {
    if (err) {
      return res.json(err);
    }
    return res.json(result);
  });
});

module.exports = router;