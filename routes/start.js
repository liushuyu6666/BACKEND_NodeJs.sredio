var express = require('express');
var router = express.Router();

var start = require('../controllers/start');


router.get('/', start.start);

module.exports = router;