//load in the module express
var express = require('express');

//create our app
var app = express();
//which folder we want to serve
//app.use allows you to add new function to your application
//express.static specify a folder name that we want to expose to the web server
app.use(express.static('public'));
//start the server
//two arguments: port 3000 and function that get called once the server is up
app.listen(3000, function(){
  console.log('Express server is up on port 3000')
});
