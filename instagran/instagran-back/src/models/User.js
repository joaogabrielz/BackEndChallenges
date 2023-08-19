const mongoose = require("mongoose");

const sha256 = require('crypto-js/sha256');
const Base64 = require('crypto-js/enc-base64');

const userSchema = new mongoose.Schema({
    avatar: String,
    username: String,
    name: String,
    email: String,
    password: String
});

userSchema.pre('save', function(next) {
    let hashDigest = sha256(this.password);
    let hmacDigest = Base64.stringify(hashDigest);
    this.password = hmacDigest;
    next();
});


const User = mongoose.model("User", userSchema);

module.exports = User;