const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userlogin');
const usermodel = require('./models/userlogin');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    usermodel.findOne({email:email})
    .then(user=>{
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

app.post('/register',(req,res)=>{
    usermodel.create(req.body)
    .then(result=>res.json(result))
    .catch(err=>res.json(err)) 
   
} ) 
app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})