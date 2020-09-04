const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {type: String, unique: true},
    bio: String,
    password: String
},{timestamps:true});


const User = mongoose.model('User', userSchema);
module.exports = User;