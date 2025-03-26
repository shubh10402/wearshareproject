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
const Deletevolunteer=(req,res)=>{ //Delete volunteer
    volunteerModel.findByIdAndDelete(req.params.id,req.body,{new:true})
    console.log(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}
module.exports={Createvolunteer,getVolunteer,getVolunteerById,Updatevolunteer,Deletevolunteer}  //Exporting Createvolunteer and getVolunteer