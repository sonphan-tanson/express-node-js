var db =require('../db');

module.exports.addCart =function(req , res , next){
    var productId = req.params.productId ;
    var sesssion = req.signedCookies.sessionId;

    var count = db.get('cart').find({'id':sesssion}).get('myCart.'+productId , 0).value();
    

    db.get('cart').find({'id':sesssion})
                .set('myCart.'+productId ,count + 1 )
                .write();
    res.redirect('/cart');

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