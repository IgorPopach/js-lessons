var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addpost', { title: 'Add New Post' });

});

const mongoose = require("mongoose");

mongoose.connect('mongodb://Igor:popach150188@ds125263.mlab.com:25263/blog')
    .then (() => console.log('connected...'))
    .catch(error => console.log(error))

module.exports = router;
