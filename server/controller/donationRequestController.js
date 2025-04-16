const DonationRequest = require('../models/DonationRequest');

// Create a new donation request
exports.createDonationRequest = async (req, res) => {
  try {
    const donationRequest = new DonationRequest(req.body);
    await donationRequest.save();
    res.status(201).json({ 
      success: true,
      message: 'Donation request submitted successfully',
      donationRequest 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error submitting donation request',
      error: error.message 
    });
  }
};

// Get all donation requests
exports.getAllDonationRequests = async (req, res) => {
  try {
    const requests = await DonationRequest.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: requests.length,
      requests
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching donation requests',
      error: error.message
    });
  }
};

// Get a single donation request
exports.getDonationRequest = async (req, res) => {
  try {
    const request = await DonationRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Donation request not found'
      });
    }
    res.status(200).json({
      success: true,
      request
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching donation request',
      error: error.message
    });
  }
};

// Update donation request status
exports.updateDonationRequestStatus = async (req, res) => {
  try {
    const request = await DonationRequest.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Donation request not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      request
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating donation request',
      error: error.message
    });
  }
}; 