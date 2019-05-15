const shortid = require('shortid')
var db =require('../db');

module.exports = function(req,res,next){

    var sessionId = req.signedCookies.sessionId;

    if(!sessionId){
        var id = shortid.generate();
        res.cookie('sessionId',id,{
            signed:true
        });
        db.get('cart')
            .push({ 'id': id})
            .write()
    }

    next();


}