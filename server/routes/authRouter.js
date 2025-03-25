const routes = require('express').Router();
const authController = require('../controller/authcontroller');

routes.post('/login', authController.login);
routes.post('/register', authController.register);

module.exports = routes;