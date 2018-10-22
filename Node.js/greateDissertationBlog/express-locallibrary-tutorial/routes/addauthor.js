var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/add', function(req, res, next) {
  require('../models/modelAuthor');
  const allAuthors = mongoose.model('author');
  allAuthors.find({})
        .then(authors => {
            console.log(authors);
            res.render('addauthor', {authors: authors, title: 'Add New Author'});
        })
        .catch(e => console.log(e))
});

router.post('/add', function (req, res, next) {
  let author = req.body.author;

  req.checkBody('author', 'Author field is required').notEmpty();

  let errors = req.validationErrors();
  if (errors) {
      res.render('addauthor', {
          "errors": errors
      });
  } else {
      require('../models/modelAuthor');
      const allAuthors = mongoose.model('author');

      const addAuthors = new allAuthors({
          author: author,
      });

      addAuthors.save()
          .then(() => {
              req.flash('success', 'Authors Added');
              res.location('/');
              res.redirect('/addauthor/add');
          })
          .catch(e => console.log(e))
  }
});

module.exports = router;
