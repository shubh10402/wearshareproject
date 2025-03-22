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

const donateRouter = require('./routes/donateRouter'); //Donate router for donation
app.use('/donate', donateRouter); //Donate router for donation

//connecting to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/userlogin"); //DB connection --> use as 127.0.0.1 or localhost
 const verifyUser= (req,res,next)=>{  //User verification
    const token = req.cookies.token;
    if(!token){
        return res.json("Access Denied")
    }else{
        jwt.verify(token,'jwt-secret-key',(err,decoded)=>{
            if(err){
                return res.json("Invalid Token")
            }else{
                 if(decoded.role==='admin'){
                     next()

            } else {
                return res.json("Access Denied as you are not an admin")
            }
        }})
    
    }    
}
//Dashboard page for user 

app.get('/dashboard',verifyUser,(req,res)=>{  
    res.json({Status:"Success"})
}
)
// Showing page from table ==> usertableshow 
app.get('/Userlogindata',(req,res) => {    // request the data from Userlogin page
    usermodel.find()                    //fetch all the records from a table 
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
//Login page for user
app.post('/login',(req,res)=>{  
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