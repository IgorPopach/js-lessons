const mongoose = require("mongoose");


mongoose.connect('mongodb://Igor:popach150188@ds121673.mlab.com:21673/po_barabanu')
    .then (() => console.log('connected...'))
    .catch(error => console.log(error))

require('./model/modelPerson');

const User = mongoose.model('user');
// const Bill = new User({
//     name: "Bill",
//     surname: "Watson",
//     age: 21
// })
// Bill.save()
//     .then(user => console.log(user))
//     .catch(error => console.log(error))

// User.find({})
//     .limit(4)
//     .sort('-age')
//     .then(users => console.log(users))
//     .catch(error => console.log(error))

User.find({name:'Jake'}).remove()
    .then(() =>  console.log('deleted'))
    .catch(error => console.log(error))
