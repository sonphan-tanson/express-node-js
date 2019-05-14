var db =require ('../db');

module.exports.getProduct = (req , res , next) =>{
    var pager = Number(req.query.page) || 1 ;
    var items = 8;
    var long = Math.ceil(db.get('products').value().length / items) ;
    var arrPaginations = [] ;
    for (var i=1;i<=long;i++){
        arrPaginations.push(i);
    }
    var start = (pager - 1) * items;
    var end = pager * items ;
    res.render('./product/produc' ,{
        products : db.get('products').value().slice(start , end),
        paginations : arrPaginations.splice(pager-1,3)
    } )
}