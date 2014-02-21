var dados = [{ url:'www.google.com', cur:'google' }];

var express = require('express');
var app = express();

//app.get('/', function(req, res){
//  res.send('Teste');
//});

//app.use(express.urlencoded());

app.get('/list', function(req, res){
  
  res.send(dados);
});

app.get('/get', function(req, res){
  
	dados.push(req.query);
	// console.log(req);
  res.send(dados);
});


app.listen(8000);