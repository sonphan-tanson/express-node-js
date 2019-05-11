
var routes = require('./routes/user.router');
var express = require('express');
var app = express();
var port = 3000 ;



var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded




app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',function(req,res){
    res.render('index',{ title: 'Hey', message: 'Hello there!' });
})

app.use( '/user' , routes);

app.use(express.static('./public'));

app.listen(port,function(){
    console.log('ready localhost ' +port);
});