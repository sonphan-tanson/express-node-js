module.exports.postCreate = function (req , res , next){
    var errr =[];

    if(!req.body.name){
        errr.push('name is requied.');
    }
    if(!req.body.phone){
        errr.push('phone is requied.');
    }

    if(errr.length){
        res.render('./user/create',{
            errr : errr,
            values : req.body,  
        });
        return;
    };
    next();
}