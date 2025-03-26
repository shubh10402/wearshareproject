const routes = require('express').Router();
const volunteerController = require('../controller/volunteerController');
const authController = require('../controller/authcontroller');



routes.post('/Createvolunteer',authController.verifyUser ,volunteerController.Createvolunteer);
routes.get('/volunteer', authController.verifyUser,volunteerController.getVolunteer);
routes.get('/volunteer/:id', authController.verifyUser,volunteerController.getVolunteerById);
routes.put('/volunteer/update/:id', authController.verifyUser,volunteerController.Updatevolunteer);
routes.delete('/volunteer/delete/:id', authController.verifyUser,volunteerController.Deletevolunteer);
module.exports = routes;