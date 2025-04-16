// const { Dashboard } = require("../../src/component/admin/Dashboard");
// const { default: Loginpageuser } = require("../../src/component/common/Loginpageuser");
const jwt = require('jsonwebtoken');  //Jsonwebtoken for token
const usermodel = require('../models/Userlogin') // Import user model
const bcrypt = require('bcrypt');  //Bcrypt for password encryption
// const { json } = require('express');

const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Access Denied: No token provided" });
        }

        const decoded = jwt.verify(token, 'jwt-secret-key');
        const user = await usermodel.findOne({ email: decoded.email });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Attach user data to request
        req.user = {
            id: user._id,
            email: user.email,
            role: user.role
        };

        // Allow both admin and volunteer roles
        if (decoded.role === 'admin' || decoded.role === 'volunteer') {
            next();
        } else {
            return res.status(403).json({ message: "Access Denied: Unauthorized role" });
        }
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

//Login page for user 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usermodel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not registered yet" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Wrong password" });
        }

        const token = jwt.sign(
            { 
                email: user.email, 
                role: user.role,
                id: user._id 
            }, 
            'jwt-secret-key',
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        return res.json({
            status: "Success",
            role: user.role,
            id: user._id,
            email: user.email
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await usermodel.create({
            fullname,
            email,
            password: hashedPassword
        });

        return res.json({ status: "OK", user: { id: user._id, email: user.email } });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: "Error creating user" });
    }
};

module.exports = {
    login,
    register,
    verifyUser
};