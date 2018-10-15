const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  require('../models/modelAuthor');
  require('../models/modelCategory');
  const allAuthors = mongoose.model('author');
  const allCategories = mongoose.model('category');
  allCategories.find({})
        .then(categories => {
            console.log(categories);
            res.render('addcategory', {categories: categories, title: 'Add New Category'});
        })
        .catch(e => console.log(e))
  res.render('addpost', { title: 'Add New Post' });
});

    
module.exports = router;
