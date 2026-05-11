
const axios = require("axios");
const User = require('../models/user-credentials');

const getCodeforcesProfileStats = async (req, res) => {
    const userId = req.user.userId; // Assuming you have user authentication and the user ID is available in req.user

    try{
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const codeforcesHandle = user.codeforcesUsername;
        if(!codeforcesHandle){
            return res.status(400).json({message: "Codeforces username not set"});
        }

        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${codeforcesHandle}`);
        
        const stats = response.data.result[0];
        return res.status(200).json({
            message : "Codeforces profile stats fetched successfully",
            success : true,
            stats
        })
    } catch (error) {
        console.error("Error fetching Codeforces profile stats:", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

module.exports = {
    getCodeforcesProfileStats
}