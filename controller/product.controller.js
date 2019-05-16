var productModel = require('../models/product.model');

module.exports.getProduct = async (req , res , next) =>{
    var data = await  productModel.find();
    res.render('./product/produc' ,{
        products : data
    } )
}