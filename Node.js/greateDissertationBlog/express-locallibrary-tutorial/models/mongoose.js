const mongo = require('mongodb');
const mongoose = require("mongoose");

mongoose.connect('mongodb://Igor:popach150188@ds125263.mlab.com:25263/blog')
    .then (() => console.log('connected...'))
    .catch(error => console.log(error))

module.exports = mongoose;