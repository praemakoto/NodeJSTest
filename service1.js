var express = require('express')
var app = express();

app.get('/', function(req,res){
    res.contentType("application/json");

    res.send();

    var json = {
        "poi":"cony place",
        "lat":13.56,
        "lon":100.76
    };
    res.send(json);
});

var server = app.listen(3000, function(){
    console.log("Service1 Start")
});