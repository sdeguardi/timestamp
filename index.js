var express = require('express');
var port = 3000;
var app = express();

app.get('/', function(req, res){
   res.send('index.html');
});

app.get('/:input', function(req, res){
  var input = req.params.input;
  
});

app.listen(port, function(req, res){
   console.log('Server listening on port: ', port); 
});
