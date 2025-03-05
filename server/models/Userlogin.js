// Purpose: Model for user login.

const mongoose = require('mongoose');       //Mongoose for DB connection

const UserSchema = new mongoose.Schema({        //User schema for user registration
    fullname: {             //Full name
        type: String,
        required: true
    },
    email: {                    //Email
        type: String,
        required: true
    },
    password: {                 // Password
        type: String,
        required: true
    },  
    // retypepassword: {           //Retype password
    //     type: String,
    //     required: true
    // }
});

const usermodel = mongoose.model('user', UserSchema);   //User model for user registration
module.exports = usermodel;         //Exporting user model