var CartModel = require('../models/cart.model');

module.exports.addCart =  function(req , res , next){
    try{
        var productId = req.params.productId ;
    var sesssion = req.signedCookies.sessionId;  

    
    var query = { id: sesssion};
    
    var count  ;
    CartModel.findOne({id:sesssion}).then(function(res){
        if(res.cart[productId] == undefined){
            count = 0;
            
        }else {
            count =res.cart[productId];
        };
        
    });

    var obj ={};


    obj[productId] =count + 1;
    
    
    CartModel.findOneAndUpdate(query, {$set:{cart:obj } }  , {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    });

           
    res.redirect('/product');
    }catch (error){
        next(error);
    }

}

module.exports.get = function(req , res , next){
    var sesssion = req.signedCookies.sessionId;
    var data = db.get('cart').find({'id':sesssion}).value();
    
    if(!data){
        res.render('./cart/cart' ,{
            myCartProducts : []
        } );
        return;
    }

    var arrayProductId = [];
    for (x in data.myCart){
        arrayProductId.push(x);
    };
    var myCartProduct = [];
    for ( var i=0 ; i<=arrayProductId.length-1 ;i++ ){
        var data = db.get('products').find({'id':arrayProductId[i]}).value();
        var count = db.get('cart').find({'id':sesssion}).get('myCart.'+arrayProductId[i] , 0).value();
        var obj = {};
        obj.data =data;
        obj.count =count;

        myCartProduct.push(obj);
    }

    res.render('./cart/cart' ,{
        myCartProducts : myCartProduct
    } )
}