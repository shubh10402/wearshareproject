const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');
const authController = require('../controller/authcontroller');

router.get('/stats', authController.verifyUser, adminController.getDashboardStats);

module.exports = router; 