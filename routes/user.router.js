var express = require('express');
var multer  = require('multer');
var router = express.Router();

var userController = require('../controller/user.controller');
var validate = require('../validater/use.validate');
var middlewareLogin = require('../authMidlleware/auth.middleware');

var upload = multer({ dest: './public/uploads/' });

router.get('/',middlewareLogin.authMiddle,userController.get);

router.get('/search',userController.search);

router.get('/create',userController.getCreate)

router.post('/create',  upload.single('avatar') ,validate.postCreate , userController.postCreate);
  
router.get('/view/:id', userController.view);

module.exports = router ;