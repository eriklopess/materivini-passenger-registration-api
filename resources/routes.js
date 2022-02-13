const express = require('express');
const { getPassengers } = require('../src/main/controllers/passengersControllers');
const { registerPassenger } = require('../src/main/controllers/registerPassenger');
const route = express.Router();

route.get('/passengers', getPassengers);
route.post('/register', registerPassenger)

module.exports = route;