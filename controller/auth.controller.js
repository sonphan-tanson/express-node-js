var db = require('../db');

module.exports.get = function (req , res , next){
    res.render('./auth/login');
}
module.exports.post = function (req , res , next){
    var email = req.body.email;
    var password = req.body.password;
    var userEmail = db.get('user')
    .find({ email: email })
    .value();
    if(!userEmail){
        res.redirect('/auth/login');
        return ;
    };
    if(password !== userEmail.password){
        res.redirect('/auth/login');
        return ;
    };
    res.cookie('id',userEmail.id);
    res.redirect('/user');
    next();
}