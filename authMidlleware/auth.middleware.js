var db = require('../db');
module.exports.authMiddle = function(req ,res ,next){
    
    var sas =req.signedCookies.id;
    var cookiess =  db.get('user').find({id:sas}).value();
    if(!cookiess){
        res.redirect('/auth/login');
        return;
    };
    res.locals.user = cookiess;
    next();
}