var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/database');

//connect to // DB
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('connected to MongoDB');
});

//init app
var app = express();

//pretyfy json
app.set('json spaces', 40);

//Body parser middleware
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

//set routs
var students = require('./routs/students.js');
app.use('/students',students);

// start server
var port = 3002
app.listen(port, function(){
  console.log('server running at '+port);
})
