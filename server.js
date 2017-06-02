//load in the module express
var express = require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

// Express Middleware
app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

//which folder we want to serve
//app.use allows you to add new function to your application
//express.static specify a folder name that we want to expose to the web server
app.use(express.static('public'));
//start the server
//two arguments: port 3000 and function that get called once the server is up
app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
