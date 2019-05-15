const shortid = require('shortid')

var db = require('../db');


module.exports.get = function(req,res){
    res.render('./user/index',{
        listUser : db.get('user').value(),
    });
};

module.exports.search = function(req,res){
    var x = db.get('user').value();
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

module.exports.postCreate = function(req, res) {
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    console.log(req.file.path);
    req.body.id = shortid.generate();
    
    db.get('user')
        .push(req.body)
        .write();
    res.redirect('/user');
}

module.exports.view = function(req,res){
    
    var id =req.params.id ;
    
    var data = db.get('user').find( {id: id} ).value();
    res.render('./user/view',{
        user : data
    })
}