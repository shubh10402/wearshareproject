const volunteerModel = require('../models/Volunteermodel');
const donateModel = require('../models/donateModel');
const User = require('../models/Userlogin');

//Creating a new Volunteer from admin side 
const Createvolunteer = (req, res) => {
    volunteerModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
};

const getVolunteer = (req, res) => {
    volunteerModel.find()
        .then(user => res.json(user))
        .catch(err => res.json(err));
};

const getVolunteerById = (req, res) => {
    volunteerModel.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.json(err));
};

const Updatevolunteer = (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    volunteerModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => res.json(user))
        .catch(err => res.json(err));
};

const Deletevolunteer = async (req, res) => {
    try {
        const deletedVolunteer = await volunteerModel.findByIdAndDelete(req.params.id);
        
        if (!deletedVolunteer) {
            return res.status(404).json({ message: "Volunteer not found" });
        }

        res.json({ message: "Volunteer deleted successfully", deletedVolunteer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get volunteer dashboard statistics
const getVolunteerStats = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        const volunteerId = req.user.id;
        console.log('Fetching stats for volunteer:', volunteerId);

        const stats = await donateModel.aggregate([
            { $match: { volunteerId: volunteerId } },
            {
                $group: {
                    _id: null,
                    total: { $sum: 1 },
                    pending: {
                        $sum: { $cond: [{ $eq: ["$status", "Pending"] }, 1, 0] }
                    },
                    completed: {
                        $sum: { $cond: [{ $eq: ["$status", "Completed"] }, 1, 0] }
                    }
                }
            }
        ]);

        const result = stats[0] || { total: 0, pending: 0, completed: 0 };
        res.json({
            success: true,
            data: {
                totalDonations: result.total,
                pendingDonations: result.pending,
                completedDonations: result.completed
            }
        });
    } catch (error) {
        console.error('Error fetching volunteer stats:', error);
        res.status(500).json({ success: false, message: "Error fetching statistics" });
    }
};

// Get recent donations
const getRecentDonations = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, message: "User not authenticated" });
        }

        const volunteerId = req.user.id;
        console.log('Fetching recent donations for volunteer:', volunteerId);

        const donations = await donateModel.find({ volunteerId: volunteerId })
            .sort({ createdAt: -1 })
            .limit(5)
            .populate('userId', 'fullname email')
            .populate('volunteerId', 'fullname email');

        const formattedDonations = donations.map(donation => ({
            id: donation._id,
            name: donation.name,
            type: donation.type,
            condition: donation.condition,
            status: donation.status,
            createdAt: donation.createdAt
        }));

        res.json({
            success: true,
            data: formattedDonations
        });
    } catch (error) {
        console.error('Error fetching recent donations:', error);
        res.status(500).json({ success: false, message: "Error fetching recent donations" });
    }
};

module.exports = {
    Createvolunteer,
    getVolunteer,
    getVolunteerById,
    Updatevolunteer,
    Deletevolunteer,
    getVolunteerStats,
    getRecentDonations
};