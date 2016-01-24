var express=require('express');
var app=express();

app.get('/',function(req,res){
  
  res.send('hello express');
 
});

app.listen(8080,function(){
	console.log('express Listening on Port 8080');
});

app.get('*',function(req,res){
res.send('Page not Found !!');
});