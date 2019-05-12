var db = require('../db');
module.exports.authMiddle = function(req ,res ,next){
    var sas =req.cookies.id;
    var cookiess =  db.get('user').find({id:sas}).value();
    if(!cookiess){
        res.redirect('/auth/login');
        return;
    }
    next();
}