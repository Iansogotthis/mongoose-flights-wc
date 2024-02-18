var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights form
router.get('/new', flightsCtrl.new);

//POST /flights form
router.post('/', flightsCtrl.create);

module.exports = router;
