const express = require('express');
const router = express.Router();
const flight_controller = require('../controllers/flight.controller');

router.post('/flight/create', flight_controller.createFlight)
router.get('/flight/readAll', flight_controller.showFlights)
router.get('/flight/read/:id', flight_controller.showFlight)
router.post('/flight/addTourist/:id', flight_controller.addTourist)
router.post('/flight/deleteTourist/:id', flight_controller.deleteTourist)
router.delete('/flight/delete/:id', flight_controller.deleteFlight)
module.exports = router;
