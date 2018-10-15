const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    category:{
        type: String,
        required: true
    }
});

mongoose.model('category', categorySchema);