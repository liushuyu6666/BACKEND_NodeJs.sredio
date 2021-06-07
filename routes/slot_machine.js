var express = require('express');
var router = express.Router();

// var slot_machine = require('../controllers/slot_machine');

/* GET home page. */
// router.get('/', slot_machine.symbols);
router.get('/', require('../controllers/slot_machine').symbols);

module.exports = router;