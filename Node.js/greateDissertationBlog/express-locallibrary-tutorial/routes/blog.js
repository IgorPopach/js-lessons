var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/sort/category', function(req, res, next) {
  require('../models/modelAuthor');
  require('../models/modelCategory');
  require ('../models/modelPost');
  const allCategories = mongoose.model('category');
  const allAutors = mongoose.model('author');
  const allPosts = mongoose.model('posts');
});

module.exports = router;
