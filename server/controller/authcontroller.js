// const { Dashboard } = require("../../src/component/admin/Dashboard");
// const { default: Loginpageuser } = require("../../src/component/common/Loginpageuser");
const jwt = require('jsonwebtoken');  //Jsonwebtoken for token
const usermodel = require('../models/Userlogin') // Import user model
const bcrypt = require('bcrypt');  //Bcrypt for password encryption
// const { json } = require('express');


const verifyUser= (req,res,next)=>{  //User verification
    const token = req.cookies.token;
    if(!token){
        return res.json("Access Denied No token provided")
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
//Login page for user 
const login = (req,res)=>{  
    const {email,password}=req.body;    
    
    //Password encryption using bcrypt 
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

}

const register = (req,res)=>{  //User registration
    // usermodel.create(req.body)
    const {fullname,email,password}=req.body;
    bcrypt.hash(password,10)
    .then(hash =>{
        usermodel.create({fullname,email,password:hash})
        .then(user=>res.json({status:"OK"}))
        .catch(err=>res.json(err))
    })
    .catch(err=>res.json(err)) 
   
}

module.exports = {
    login,
    register,
    verifyUser
};