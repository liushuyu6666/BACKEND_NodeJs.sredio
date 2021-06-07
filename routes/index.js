var express = require('express');
const { route } = require('./users');
var router = express.Router();

router.get('/', require('../controllers/index').index);

module.exports = router;
