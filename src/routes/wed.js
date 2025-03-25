const express = require('express');
const route = express.Router();
const { getHomepage, ok, kkk } = require('../controllers/homeController'); //khai bao duong dan ham
route.get('/', ok);
route.get('/ok', getHomepage);
route.get('/akkakk', kkk);
module.exports = route;