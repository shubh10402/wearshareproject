const routes = require('express').Router();
const userController = require('../controller/userController');
const authController = require('../controller/authcontroller');

routes.get('/Userlogindata',authController.verifyUser ,userController.getalluser);

module.exports = routes;