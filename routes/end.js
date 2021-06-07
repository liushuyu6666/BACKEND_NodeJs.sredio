var express = require('express');
var router = express.Router();

router.get('/', require('../controllers/end').end);

module.exports = router;