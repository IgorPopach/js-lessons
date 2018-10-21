const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    post:{
        type: String,
        required: true
    },
    myimage:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
});

mongoose.model('posts', postSchema);