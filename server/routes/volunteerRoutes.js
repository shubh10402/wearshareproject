const routes = require('express').Router();
const volunteerController = require('../controller/volunteerController');
const authController = require('../controller/authcontroller');

routes.post('/Createvolunteer',authController.verifyUser ,volunteerController.Createvolunteer);
routes.get('/volunteer', authController.verifyUser,volunteerController.getVolunteer);

module.exports = routes;