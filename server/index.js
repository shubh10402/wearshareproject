// Desc: Server side code
//importing required modules

const express = require('express');  //Express for server
const mongoose = require('mongoose');  //Mongoose for DB connection
const cors = require('cors');    //Cors for cross origin
const authRoutes = require('./routes/authRouter'); //User model for user login
const volunteerRoutes = require('./routes/volunteerRoutes'); //Volunteer model for volunteer registration
const userRoutes = require('./routes/userRoutes'); //User model for user login
const cookieParser = require('cookie-parser');  //Cookie parser for cookie
const donationRequestRoutes = require('./routes/donationRequestRoutes'); // Donation request routes
const adminRoutes = require('./routes/adminRoutes');

//creating express app
const app = express();
app.use(express.json());        
app.use(cors({      
    origin: ['http://localhost:5173'],      
    credentials: true,                  
}
));
app.use(cookieParser());   // <-- Add this middleware to parse cookies

const donateRouter = require('./routes/donateRouter'); //Donate router for donation
app.use('/donate', donateRouter); //Donate router for donation

//connecting to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/userlogin"); //DB connection --> use as 127.0.0.1 or localhost

//Dashboard page for  Verify User is admin or not

// app.get('/dashboard',verifyUser,(req,res)=>{  
//     res.json({Status:"Success"})  //Response for user
// }
// )

app.use('/auth', authRoutes); //User routes for user login
app.use('/volunteer', volunteerRoutes); //Volunteer routes for volunteer registration
app.use('/user', userRoutes); //User routes for user login
app.use('/api', donationRequestRoutes); // Donation request routes
app.use('/admin', adminRoutes);

//Server running or not
app.listen(3001,()=>{       //Server running on port 3001
    console.log("Server is running on port 3001");
})