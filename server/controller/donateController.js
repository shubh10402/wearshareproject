const multer = require('multer');
const donateModel = require('../models/donateModel');
const cloudinaryUtil = require('../utils/cloudinary'); 

const storage = multer.diskStorage({
    destination:"./uploads",
    filename: function (req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({
    storage:storage
}).single('image');

const donate = async (req,res)=>{
    try {
        upload(req,res,async()=>{
            const cloudinaryResponse = await cloudinaryUtil.uploadFileCloudinary(req.file)
            req.body.ImageURL = cloudinaryResponse.secure_url
            const donate = await donateModel.create(req.body)
            // res.status(200).send("Image uploaded successfully");
            res.status(200).json({
                status: "success",
                message: "Image uploaded successfully",
                data: donate
            });
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    donate
}