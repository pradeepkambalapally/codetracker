
const User = require('../models/user-credentials');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const registerUser = async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
       return res.status(401).json({
          message : "All fields are required",
          success : false
    })
   }
    try{
        const exisitingUser = await User.findOne({username});
        if(exisitingUser){
            return res.status(401).json({message: 'User already exists'});
        }
         const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({
            message : "User registered successfully",
            success : true,
            user : {
                userId : newUser._id,
                username : newUser.username
            }
        })
    }catch(error){
        console.error('Error registering user:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

const loginUser = async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({
                message : "User not found!",
                success : false
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({
                message : "Invalid password!",
                success : false
            })
        }
       

        const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET, {
            expiresIn : '1h'
        })


        res.status(200).json({
            message : "Login successful",
            success : true,
            token,
            user : {
                userId : user._id,
                username : user.username
            }
        })
    }catch(error){
        console.error('Error logging in user:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

const updateProfiles = async (req, res) => {
    const {leetcodeUsername, codeforcesUsername} = req.body;
    const userId = req.user.userId;
    try{
        const user = await User.findById(userId);
        if(!user){
            return res.status(401).json({
                message : "user not found!",
                success : false
            })
        }

        user.leetcodeUsername = leetcodeUsername || user.leetcodeUsername;
        user.codeforcesUsername = codeforcesUsername || user.codeforcesUsername;
        await user.save();
        res.status(200).json({
            message : "Profiles updated successfully",
            success : true,
            user : {    
                userId : user._id,
                username : user.username,
                leetcodeUsername : user.leetcodeUsername,
                codeforcesUsername : user.codeforcesUsername
            }
        })
    }catch(error){
        console.error('Error updating profiles:', error);
        res.status(500).json({message: 'Internal server error'});   
    }
}

module.exports = {
    registerUser,
    loginUser,
    updateProfiles
}