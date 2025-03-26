const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//User Schema
const VolunteerSchema = new mongoose.Schema({
    name:String,    
    email:String,
    phone:Number,
    address:String,
    city:String,    
    area:String
});

const volunteerModel = new mongoose.model("volunteer",VolunteerSchema);
module.exports=volunteerModel