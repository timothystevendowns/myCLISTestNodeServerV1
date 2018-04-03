var express = require('express');
var router = express.Router();

//get Model
var student = require('../models/student.js');

//get pages
router.get('/', function(req, res){
  student.find({}, function(err, students) {
    if(err) console.log(err)
    res.json(students);
  });
});

//exports
module.exports = router;
