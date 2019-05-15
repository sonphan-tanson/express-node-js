var express = require('express');
var router = express.Router();
var controller = require('../controller/cart.controller.js');

router.get('/' , controller.get);

router.get('/add/:productId' , controller.addCart);



module.exports = router ;