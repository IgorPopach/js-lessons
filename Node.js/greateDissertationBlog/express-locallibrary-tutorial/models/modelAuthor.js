const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const authorSchema = new Schema({
    author:{
        type: String,
        required: true
    }
});

mongoose.model('author', authorSchema);