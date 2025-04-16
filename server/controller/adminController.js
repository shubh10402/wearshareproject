const usermodel = require('../models/Userlogin');
const volunteerModel = require('../models/Volunteermodel');
const donateModel = require('../models/donateModel');
const DonationRequest = require('../models/DonationRequest');

const getDashboardStats = async (req, res) => {
    try {
        const [
            totalUsers,
            totalVolunteers,
            totalDonations,
            pendingRequests
        ] = await Promise.all([
            usermodel.countDocuments(),
            volunteerModel.countDocuments(),
            donateModel.countDocuments(),
            DonationRequest.countDocuments({ status: 'Pending' })
        ]);

        res.json({
            totalUsers,
            totalVolunteers,
            totalDonations,
            pendingRequests
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        res.status(500).json({ error: 'Error fetching dashboard statistics' });
    }
};

module.exports = {
    getDashboardStats
}; 