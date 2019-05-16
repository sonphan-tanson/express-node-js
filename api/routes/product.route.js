var express = require('express');

var Router = express.Router();

var productController = require('../controllers/product.controller');

Router.get('/' , productController.get );
module.exports = Router;