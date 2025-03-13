// Desc: Server side code
//importing required modules


const express = require('express');  //Express for server
const mongoose = require('mongoose');  //Mongoose for DB connection
const cors = require('cors');    //Cors for cross origin
const User = require('./models/Userlogin'); //User model for user registration
const usermodel = require('./models/Userlogin'); //User model for user login
const bcrypt = require('bcrypt');  //Bcrypt for password encryption
const jwt = require('jsonwebtoken');  //JWT for token generation
const cookieParser = require('cookie-parser');  //Cookie parser for cookie
//creating express app
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST'],
}
));
//connecting to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/userlogin"); //DB connection --> use as 127.0.0.1 or localhost
app.post('/login',(req,res)=>{  //Login page for user
    const {email,password}=req.body;
    
    //Password encryption
    usermodel.findOne({email:email})
    .then(user=>{               //User login validation
        if(user){
                bcrypt.compare(password,user.password,(err,response) =>
                {
                    if(response){
                        const token =
                        jwt.sign({email: user.email, role: user.role}, 'jwt-secret-key',{expiresIn: '1h'});
                        res.cookie('token', token)
                        return res.json({Status:"Success", role:user.role})
                    }
                    else{
                        return res.json("Wrong password")
                    } 
                })
                // if(user.password===password){
                //     res.json("Success")
                //     } else {
                //     res.json("Wrong password")
                //     }
                 }
        else {
            res.json("User not registered yet")
            
        }
        

    })

})

app.post('/register',(req,res)=>{  //User registration
    // usermodel.create(req.body)
    const {fullname,email,password}=req.body;
    bcrypt.hash(password,10)
    .then(hash =>{
        usermodel.create({fullname,email,password:hash})
        .then(user=>res.json({status:"OK"}))
        .catch(err=>res.json(err))
    })
    .catch(err=>res.json(err)) 
   
} ) 
app.listen(3001,()=>{       //Server running on port 3001
    console.log("Server is running on port 3001");
})