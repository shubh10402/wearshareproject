const routes = require('express').Router();
const donateController = require('../controller/donateController');
const multer = require('multer');

// const cloudinary = require('cloudinary').v2;
const storage = multer.diskStorage({
    destination:"./uploads",
    filename: function (req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({
    storage:storage
}).array('images');

routes.post('/adddonate',upload, donateController.donate);

// Route for getting all donation requests
routes.get('/requests', donateController.getDonationRequests);

module.exports = routes;