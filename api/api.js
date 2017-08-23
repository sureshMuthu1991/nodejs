var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./model/User.js');
var jwt = require('./services/jwt.js');

var app = express();

app.use(function(req, res, next){
    res.header('Access-control-Allow-Origin','*');
    res.header('Access-control-Allow-Origin','GET,PUT,POST,DELETE');
    res.header('Access-control-Allow-Origin','Contect-Type, Authorization');

    next();
})

app.post('/rigister',function(req, res){
    var user = req.body;

    var newUser = new User.model({
        email: user.email,
        password: user.password
    });
    var payload = {
        iss: req.hostname,
        sub: user._id
    }

    var token =jwt.encode(payload, "shhh..");

    newUser.save(function(err){
        res.status(200).send({
            user:newUser.toJSON(),
            token: token
        });
    })
})

mongoose.connect('mongodb://localhost/psjwt');


var server = app.listen(3000, function(){
    console.log('api listening on', server.address().port);
})