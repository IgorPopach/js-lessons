const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const personSchema = new Schema({
    name:{
        require: true,
        type: String
    },
    surname:{
        require: true,
        type: String
    },
    age:{
        require: true,
        type: Number,
        min: 18,
        max: 75,
        default: 20
    }
})

mongoose.model('user', personSchema);