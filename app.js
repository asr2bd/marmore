var express = require('express')
	, stylus = require('stylus')
	, nib = require('nib');
var app =express();
app.use(express.bodyParser());
function compile(str,path){
	return stylus(str)
		.set('filename',path)
		.use(nib());
}
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(stylus.middleware(
	{
	src: __dirname+'/public'
	, compile:compile
}));
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.send("Hello");
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

