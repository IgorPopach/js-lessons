const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const errorRouter = require('./routes/error');
const homeRouter = require('./routes/home');
const blogRouter = require('./routes/blog');
const postRouter = require('./routes/addpost');
const authorRouter = require('./routes/addauthor');
const categoryRouter = require('./routes/addcategory');
const expressValidator = require('express-validator');
const mongo = require('mongodb');
const mongoose = require("mongoose");
const session = require('express-session');
const flash = require('req-flash');

mongoose.connect('mongodb://Igor:popach150188@ds125263.mlab.com:25263/blog')
    .then (() => console.log('connected...'))
    .catch(error => console.log(error))

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.locals.basedir = path.join(__dirname, 'views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
      var namespace = param.split('.')
          , root = namespace.shift()
          , formParam = root;

      while (namespace.length) {
          formParam += '[' + namespace.shift() + ']';
      }
      return {
          param: formParam,
          msg: msg,
          value: value
      };
  }
}));

app.use('/', indexRouter);
app.use('/error', errorRouter);
app.use('/home', homeRouter);
app.use('/blog', blogRouter);
app.use('/addpost', postRouter);
app.use('/addauthor', authorRouter);
app.use('/addcategory', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
