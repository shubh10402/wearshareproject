// Desc: Server side code
//importing required modules


const express = require('express');  //Express for server
const mongoose = require('mongoose');  //Mongoose for DB connection
const cors = require('cors');    //Cors for cross origin
const User = require('./models/userlogin'); //User model for user registration
const usermodel = require('./models/userlogin'); //User model for user login
//creating express app
const app = express();
app.use(express.json());
app.use(cors());
//connecting to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/user"); //DB connection --> use as 127.0.0.1 or localhost
app.post('/login',(req,res)=>{  //Login page for user
    const {email,password}=req.body;
    usermodel.findOne({email:email})
    .then(user=>{               //User login validation
        if(user){
                if(user.password===password){
                    res.json("Success")
                    } else {
                    res.json("Wrong password")
                    }
                 }
        else {
            res.json("User not registered yet")
            
        }
        

    })

})

app.post('/register',(req,res)=>{  //User registration
    usermodel.create(req.body)
    .then(result=>res.json(result))
    .catch(err=>res.json(err)) 
   
} ) 
app.listen(3001,()=>{       //Server running on port 3001
    console.log("Server is running on port 3001");
})