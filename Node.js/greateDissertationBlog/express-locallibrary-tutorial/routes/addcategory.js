var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  require('../models/modelCategory');
  const allCategories = mongoose.model('category');
  allCategories.find({})
        .then(categories => {
            console.log(categories);
            res.render('addcategory', {categories: categories, title: 'Add New Category'});
        })
        .catch(e => console.log(e))
});

router.post('/', function (req, res, next) {
  let category = req.body.category;

  req.checkBody('category', 'Category field is required').notEmpty();

  let errors = req.validationErrors();
  if (errors) {
      res.render('addcategory', {
          "errors": errors
      });
  } else {
      require('../models/modelCategory');
      const allCategories = mongoose.model('category');

      const addCategory = new allCategories({
        category: category,
      });

      addCategory.save()
          .then(() => {
              req.flash('success', 'Categories Added');
              res.location('/');
              res.redirect('/addcategory');
          })
          .catch(e => console.log(e))
  }
});

module.exports = router;
