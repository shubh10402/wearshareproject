const express = require('express');
const router = express.Router();
const donateController = require('../controller/donateController');
const authController = require('../controller/authcontroller');

// ... existing routes ...

router.get('/recent', authController.verifyUser, donateController.getRecentDonations);

module.exports = router; 