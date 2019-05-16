const shortid = require('shortid')

var userModel = require('../models/user.model');


module.exports.get = async function(req,res){
    var pay = await userModel.find();
    res.render('./user/index',{
        listUser : pay
    });
};

module.exports.search = async function(req,res){
    var x = await userModel.find();
    var y = x.filter(function(item){
        return item.name.indexOf(req.query.name) !== -1;
    });
    res.render('./user/index',{
        listUser : y                                 
    });
};

module.exports.getCreate =function(req,res){
    res.render('./user/create')
}

module.exports.postCreate =  function(req, res) {
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    req.body.id = shortid.generate();
    userModel.create(req.body);
    res.redirect('/user');
}

module.exports.view = async function(req,res){
    
    var id =req.params.id ;
    var pay = await userModel.findById(id);
    res.render('./user/view',{
        user : pay
    })
}