const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({dest: './public/uploads/'});

/* GET home page. */
router.get('/', function(req, res, next) {
  require('../models/modelAuthor');
  require('../models/modelCategory');
  const allAuthors = mongoose.model('author');
  const allCategories = mongoose.model('category');
  allCategories.find({})
        .then(categories => {
          allAuthors.find({})
            .then(authors => {
              res.render('addpost', {
                title: 'Add New Post',
                authors: authors,
                categories: categories
              });
            })
        })
        .catch(e => console.log(e))
});

router.post('/', upload.single('myimage'), function (req, res, next) {
  let title = req.body.title;
  let category = req.body.category;
  let post = req.body.post;
  let author = req.body.author;
  let date = new Date();

  if (req.file) {
    var myimage = req.file.filename;
  }
  else {
      var myimage = 'default.png';
  }

  req.checkBody('title', 'Title field is required').notEmpty();
  req.checkBody('post', 'Body field is required').notEmpty();

  let errors = req.validationErrors();
  if (errors) {
      res.render('addpost', {
          "errors": errors
      });
  } else {
    require ('../models/modelPost');
    const allPosts = mongoose.model('posts');

    const addPost = new allPosts({
      author: author,
      category: category,
      title: title,
      post: post,
      date: date,
      myimage: myimage
    });

    addPost.save()
    .then((post) => {
      req.flash('success', 'Post Added');
      res.location('/');
      res.redirect('/blog');
    })
    .catch(e => console.log(e))
  }
})

    
module.exports = router;
