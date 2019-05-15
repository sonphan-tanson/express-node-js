var md5 =require('md5');

var db = require('../db');

module.exports.get = function (req , res , next){
    res.render('./auth/login');
}
module.exports.post = function (req , res , next){
    var email = req.body.email;
    var password = req.body.password;
    var hasdedPassword = md5(password);
    
    var userEmail = db.get('user')
    .find({ email: email })
    .value();
    if(!userEmail){
        res.redirect('/auth/login');
        return ;
    };
    if(hasdedPassword !== userEmail.password){
        res.redirect('/auth/login');
        return ;
    };
    res.cookie('id',userEmail.id,{
        signed:true
    });
    res.redirect('/user');
    next();
}