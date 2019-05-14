var express = require('express');
var router = express.Router();
var controller = require('../controller/product.controller.js');

router.get('/' , controller.getProduct);







module.exports = router ;