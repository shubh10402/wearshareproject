const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    retypepassword: {
        type: String,
        required: true
    }
});

const usermodel = mongoose.model('user', UserSchema);
module.exports = usermodel;