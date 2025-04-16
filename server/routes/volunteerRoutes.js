const express = require('express');
const router = express.Router();
const volunteerController = require('../controller/volunteerController');
const authController = require('../controller/authcontroller');




router.post('/Createvolunteer',authController.verifyUser ,volunteerController.Createvolunteer);
router.get('/volunteer', authController.verifyUser,volunteerController.getVolunteer);
router.get('/volunteer/:id', authController.verifyUser,volunteerController.getVolunteerById);
router.put('/volunteer/update/:id', authController.verifyUser,volunteerController.Updatevolunteer);
router.delete('/Deletevolunteer/:id', authController.verifyUser,volunteerController.Deletevolunteer);
router.get('/stats', authController.verifyUser, volunteerController.getVolunteerStats);
router.get('/recent-donations', authController.verifyUser, volunteerController.getRecentDonations);

module.exports = router;