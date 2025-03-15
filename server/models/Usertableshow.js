//Show table data to the admin panel 

const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema
//show the data to the table 
({
    fullname:String,
    email:String,
    role:String,
    password:String
})
const usermodel = mongoose.model('user', UserSchema);   //User model for user registration
module.exports = usermodel;         //Exporting user model 
