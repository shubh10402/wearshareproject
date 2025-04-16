const mongoose = require('mongoose');

const donationRequestSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
  },
  numClothes: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  condition: {
    type: String,
    required: true,
    enum: ['Brand New', 'Very Good Condition', 'Good Condition', 'Average Condition', 'Bad Condition']
  },
  type: {
    type: String,
    required: true,
    enum: ['Wedding Dress', 'Bridesmaid Dress', 'Formal Dress', 'Other']
  },
  fabric: {
    type: String,
    required: true,
    enum: ['Cotton', 'Silk', 'Denim', 'Leather']
  },
  size: {
    type: String,
    required: true,
    enum: ['Small', 'Medium', 'Large', 'XL']
  },
  additionalInfo: {
    type: String
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'Completed']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DonationRequest', donationRequestSchema); 