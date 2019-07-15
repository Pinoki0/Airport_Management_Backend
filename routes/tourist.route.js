const express = require('express');
const router = express.Router();
const tourist_controller = require('../controllers/tourist.controller');

router.post('/tourist/create', tourist_controller.createTourist)
router.get('/tourist/readAll', tourist_controller.showTourists)
router.get('/tourist/read/:id', tourist_controller.showTourist)
router.post('/tourist/addFlight/:id', tourist_controller.addFlight)
router.post('/tourist/deleteFlight/:id', tourist_controller.deleteFlight)
router.delete('/tourist/delete/:id', tourist_controller.deleteTourist)

module.exports = router;
