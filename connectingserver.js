var express = require('express');
var app = express();
/*
app.get('/', function (req, res) {
   res.send('Hello World');
   console.log("A Browser is connected")
})*/

app.get('/help', function (req, res) {
    res.send('This is a help page');
    console.log("A Browser is opening help page.")
 })

 app.get('/', function (req, res) {
    res.send(req.headers);
    console.log("Opening request")
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
