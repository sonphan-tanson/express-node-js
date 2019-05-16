var model = require('../../models/product.model');

module.exports.get = async (req ,res ,next) =>{
    var data = await model.find();
    res.json(data);
}