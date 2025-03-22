const routes = require('express').Router();
const donateController = require('../controller/donateController');

routes.post('/adddonate', donateController.donate);

module.exports = routes;