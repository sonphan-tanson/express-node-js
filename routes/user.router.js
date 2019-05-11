var express = require('express');

var router = express.Router();

var userController = require('../controller/user.controller');

router.get('/',userController.get);

router.get('/search',userController.search);

router.get('/create',userController.getCreate)
router.post('/create',userController.postCreate);
  
router.get('/view/:id', userController.view);

module.exports = router ;