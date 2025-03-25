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

module.exports={Createvolunteer,getVolunteer}  //Exporting Createvolunteer and getVolunteer