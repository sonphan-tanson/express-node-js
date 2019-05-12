var express = require ('express');
var router = express.Router();
var autMidee = require('../authMidlleware/auth.middleware')
var authController = require('../controller/auth.controller');
var  u = require ('./user.router');
router.get('/login',authController.get);
router.post('/login',authController.post);

module.exports = router ;