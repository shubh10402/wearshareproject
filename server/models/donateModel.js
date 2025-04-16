const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donateSchema = new Schema({
    ImageURL:[{type: String}],
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    city: {
        type: String,
        required: [true, 'City is required']
    },
    pincode: {
        type: String,
        required: [true, 'Pincode is required'],
        match: [/^[0-9]{6}$/, 'Please enter a valid 6-digit pincode']
    },
    numClothes: {
        type: Number,
        required: [true, 'Number of clothes is required'],
        min: [1, 'Must be at least 1'],
        max: [100, 'Must be at most 100']
    },
    condition: {
        type: String,
        required: [true, 'Condition is required'],
        enum: ['Brand New', 'Very Good Condition', 'Good Condition', 'Average Condition', 'Bad Condition']
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        enum: ['Wedding Dress', 'Bridesmaid Dress', 'Formal Dress', 'Other']
    },
    fabric: {
        type: String,
        required: [true, 'Fabric is required'],
        enum: ['Cotton', 'Silk', 'Denim', 'Leather']
    },
    size: {
        type: String,
        required: [true, 'Size is required'],
        enum: ['Small', 'Medium', 'Large', 'XL']
    },
    images: [{
        path: String,
        filename: String
    }],
    additionalInfo: String,
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Approved', 'Rejected']
    },
    
   
    
}, {timestamps: true});

module.exports = mongoose.model('donate', donateSchema);