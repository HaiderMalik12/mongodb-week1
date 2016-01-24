var express=require('express');
var app=express();
var MongoClient=require('mongodb').MongoClient;

//Open the COnnection to the server
MongoClient.connect('mongodb://localhost:27017/party',function(err,db){

  if(err) throw err;

  //Find one document in our collection

 db.collection('party').findOne({},function(err,doc){
 
  
  if(err) throw err;

  //print the result 
  console.log(doc);

  //close the DB
  db.close();

  });



//Declare the Sucess
console.dir("Called findOne !");

});