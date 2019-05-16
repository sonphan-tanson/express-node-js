const shortid = require('shortid')

var CartModel = require('../models/cart.model');

module.exports = function(req,res,next){

    var sessionId = req.signedCookies.sessionId;

    if(!sessionId){
        var id = shortid.generate();
        res.cookie('sessionId',id,{
            signed:true
        });
        CartModel.create({id:id});
    }

    next();


}