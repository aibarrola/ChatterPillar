const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    firstname: String,
    lastname: String,
    status: String 
},{timestamps:true});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;
