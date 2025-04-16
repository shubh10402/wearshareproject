const donateModel = require('../models/donateModel');
const cloudinaryUtil = require('../utils/cloudinary'); 

const donate = async (req,res)=>{
    try {
            if(!req.files || req.files.length === 0){
                console.log("No files were uploaded.");
                return res.status(400).send("No files were uploaded.");
            }
            const uploadPromises = req.files.map((file) => cloudinaryUtil.uploadFileCloudinary(file));
            const uploadResults = await Promise.all(uploadPromises);
            console.log(uploadResults.map((result) => result.secure_url));
            req.body.ImageURL = uploadResults.map((result) => result.secure_url);
            const donate = await donateModel.create(req.body)
            // res.status(200).send("Image uploaded successfully");
            res.status(200).json({
                status: "success",
                message: "Image uploaded successfully",
                data: donate
            });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getDonationRequests = async (req, res) => {
    try {
        const requests = await donateModel.find()
            .sort({ createdAt: -1 }) // Sort by newest first
            .select('-__v'); // Exclude version field

        res.status(200).json({
            success: true,
            count: requests.length,
            data: requests
        });
    } catch (error) {
        console.error('Error fetching donation requests:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching donation requests',
            error: error.message
        });
    }
};

const getRecentDonations = async (req, res) => {
    try {
        const recentDonations = await donateModel.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select('name type condition status createdAt');
        
        res.json(recentDonations);
    } catch (error) {
        console.error('Error fetching recent donations:', error);
        res.status(500).json({ error: 'Error fetching recent donations' });
    }
};

module.exports = {
    donate,
    getDonationRequests,
    getRecentDonations
}