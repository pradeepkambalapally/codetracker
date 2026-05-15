const axios = require("axios");
const User = require("../models/user-credentials");

const getCodeforcesData = async (req, res) => {

    const userId = req.user.userId;

    try {

        const user = await User.findById(userId);

        if (!user) {

            return res.status(401).json({

                message: "User not found!",
                success: false

            });

        }

        const codeforcesUsername =
            user.codeforcesUsername;

       

        if (!codeforcesUsername) {

            return res.status(400).json({

                message:
                "Codeforces username not set!",

                success: false

            });

        }

        const response =
            await axios.get(

                `https://codeforces.com/api/user.status?handle=${codeforcesUsername}`

            );

        if (
            response.data.status !== "OK"
        ) {

            return res.status(400).json({

                message:
                "Failed to fetch Codeforces data",

                success:false

            });

        }

        const solvedProblems =
            new Set();

        const problems = [];

        response.data.result.forEach(
            (submission) => {

                const problemKey =

                `${submission.problem.contestId}-${submission.problem.index}`;

                if (

                    submission.verdict === "OK" &&

                    !solvedProblems.has(
                        problemKey
                    )

                ) {

                    solvedProblems.add(
                        problemKey
                    );

                    problems.push({
                        platform:"Codeforces",
                        problemName:
                            submission.problem.name,

                        problemLink:

`https://codeforces.com/problemset/problem/${submission.problem.contestId}/${submission.problem.index}`,

                        submissionTime: submission.creationTimeSeconds * 1000,

                           

                        programmingLanguage:

                            submission.programmingLanguage,

                        rating:

                            submission.problem.rating ||
                            "Unrated",

                        tags:

                            submission.problem.tags || [],

                        contestId:

                            submission.problem.contestId,

                        problemIndex:

                            submission.problem.index

                    });

                }

            }
        );

        

        res.status(200).json({

            success: true,

            problems,

            totalSolved:
                problems.length

        });

    }

    catch (error) {

        console.error(

            "Error fetching codeforces data:",

            error.response?.data ||
            error.message

        );

        res.status(500).json({

            message:
            "Internal server error",

            success:false

        });

    }

};

module.exports = {

    getCodeforcesData

};