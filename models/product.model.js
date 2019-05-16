var mongoose = require('mongoose');

var productSchema = new mongoose.Schema(
    {   name: 'string',
        image: 'string',
        description:'string',
    }
);

var Product = mongoose.model('Product' , productSchema, 'products');
module.exports = Product ;