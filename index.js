require('dotenv').config()
var express = require('express');
var app = express();
var port = 3000 ;

var routes = require('./routes/user.router');
var authRoute = require('./routes/auth.rote');
var productRoute = require('./routes/product.route');
var cartRoute =require('./routes/cart.rote');

var cookieParser = require('cookie-parser');

var middlewareLogin = require('./authMidlleware/auth.middleware');
var sessionMiddleware = require('./authMidlleware/session.middleware');


app.use(cookieParser(process.env.CookieSession));
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());




app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',middlewareLogin.authMiddle,function(req,res){
    res.render('index',{ title: 'Hey', message: 'Hello there!' });
})

app.use( '/user' ,middlewareLogin.authMiddle, routes);
app.use( '/auth' , authRoute);
app.use( '/product' , productRoute);
app.use( '/cart' , cartRoute);

app.use(sessionMiddleware);


app.use(express.static('./public'));

app.listen(port,function(){
    console.log('ready localhost ' +port);
});