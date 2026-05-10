
const axios = require('axios');
const User = require('../models/user-credentials');


const getCodeforcesData = async (req, res) => {
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

        const response = await axios.get(`https://codeforces.com/api/user.status?handle=${codeforcesusername}`);
        const solvedProblems = new Set();
        const submissions = [];

        response.data.result.forEach((submission) =>{
            const problemKey =
            `${submission.problem.contestId}-${submission.problem.index}`;

            if(submission.verdict === "OK" && !solvedProblems.has(problemKey)){
                solvedProblems.add(problemKey);
                submissions.push({
                    problemName : submission.problem.name,
                    problemLink : `https://codeforces.com/problemset/problem/${submission.problem.contestId}/${submission.problem.index}`,
                    submissionTime : new Date(submission.creationTimeSeconds * 1000).toLocaleString(),
                    programmingLanguage : submission.programmingLanguage,
                    rating : submission.problem.rating || "Unrated",
                    tags : submission.problem.tags,

                })
            }
        })
        res.status(200).json({
            message : "Codeforces data fetched successfully",
            success : true,
            submissions,
            totalSolved : submissions.length
        });

    }catch(error){
        console.error('Error fetching codeforces data:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = {
    getCodeforcesData
}