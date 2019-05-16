var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
{   name: 'string',
    phone: 'string',
    avatar:'string',
    password:'string'
}
);
var User = mongoose.model('User', userSchema ,'user');
module.exports = User ;
