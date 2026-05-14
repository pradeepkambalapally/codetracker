
const axios = require('axios');
const User = require('../models/user-credentials');

const getCodeforcesContestData = async (req, res) => {
    const userId = req.user.userId;
    try{
        const user = await User.findById(userId);
         if(!user){
            return res.status(401).json({
                message : "User not found!",
                success : false
            })
        }
        const codeforcesusername = user.codeforcesUsername;
        if(!codeforcesusername){
            return res.status(400).json({
                message : "Codeforces username not set!",
                success : false
            })
        }

        const response = await axios.get(`https://codeforces.com/api/user.rating?handle=${codeforcesusername}`);
        if(response.data.result.length === 0){

    return res.status(200).json({

        success:true,

        contests:[]

    });

}

        const contests = response.data.result.map((contest) => ({
            contestName : contest.contestName,
            rank : contest.rank,
            ratingUpdateTime : new Date(contest.ratingUpdateTimeSeconds * 1000).toLocaleString(),
            oldRating : contest.oldRating,
            newRating : contest.newRating,
            ratingChange : contest.newRating - contest.oldRating

        }))
        

        res.status(200).json({
            message : "Codeforces contest data fetched successfully",
            success : true,
            contests,
            totalContests : contests.length 
        })

    }catch(error){
        console.error('Error fetching codeforces contest data:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = {
    getCodeforcesContestData
}

