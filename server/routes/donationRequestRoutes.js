const express = require('express');
const router = express.Router();
const {
  createDonationRequest,
  getAllDonationRequests,
  getDonationRequest,
  updateDonationRequestStatus
} = require('../controller/donationRequestController');

// Create a new donation request
router.post('/submit', createDonationRequest);

// Get all donation requests
router.get('/requests', getAllDonationRequests);

// Get a single donation request
router.get('/requests/:id', getDonationRequest);

// Update donation request status
router.patch('/requests/:id/status', updateDonationRequestStatus);

module.exports = router; 