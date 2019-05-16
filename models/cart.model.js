var mongoose = require('mongoose');

var CartSechma = new mongoose.Schema({
    id:String,
    cart:Object
});

var Cart = mongoose.model('Cart' ,CartSechma ,'cart');
module.exports = Cart ;