const usermodel = require('../models/Userlogin') // Import user model

// Showing page from table ==> usertableshow (Admin Side)
const getalluser=(req,res) => {    // request the data from Userlogin page
    console.log("Inside getalluser") //Display the message in console
    usermodel.find()                    //fetch all the records from a table 
    .then(user => 
        res.json(user))                 //Display the records in json format
    .catch(err => res.json(err))
}

module.exports={getalluser}  //Exporting getalluser