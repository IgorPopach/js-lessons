var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool/', function(req, res, next) {
  res.render('cool', { title: 'cool' });
});
router.get('/home', function(err, html) {
  console.log("Home running");
  res.send(html);
});
router.get('/blog/', function(req, res, next) {
  res.render('blog');
});

module.exports = router;
