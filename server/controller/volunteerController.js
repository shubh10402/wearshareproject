const volunteerModel = require('../models/Volunteermodel');

//Creating a new Volunteer from admin side 
const Createvolunteer=(req,res)=>{  //Create volunteer
    volunteerModel.create(req.body)
    .then(user=>res.json(user))     //Response for user
    .catch(err=>res.json(err))    //Error response
}

const getVolunteer=(req,res) => {    // request the data from volunteer page
    volunteerModel.find()                    //fetch all the records from a table 
    .then(user => res.json(user))
    .catch(err => res.json(err))
}
const getVolunteerById=(req,res) => {    // request the data from volunteer page
    volunteerModel.findById(req.params.id)                    //fetch all the records from a table 
    .then(user => res.json(user))
    .catch(err => res.json(err))
}

const Updatevolunteer=(req,res)=>{ //Update volunteer
    console.log(req.body)
    console.log(req.params.id)
    volunteerModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}
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
module.exports={Createvolunteer,getVolunteer,getVolunteerById,Updatevolunteer,Deletevolunteer}  //Exporting Createvolunteer and getVolunteer