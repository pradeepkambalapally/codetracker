const axios = require("axios");
const User = require("../models/user-credentials");

const getLeetcodeProfile = async (req, res) => {

    try {

        const user =
            await User.findById(
                req.user.userId
            );

        if(!user){

            return res.status(404).json({

                success:false,

                message:"User not found"

            });

        }

        const username =
            user.leetcodeUsername;

        if(!username){

            return res.status(400).json({

                success:false,

                message:
                "LeetCode username not set"

            });

        }

        const query = `

        query userProfile($username: String!) {

            matchedUser(username: $username) {

                username

                profile {
                    ranking
                    reputation
                    starRating
                }

                submitStats {

                    acSubmissionNum {

                        difficulty
                        count
                    }

                }

            }

        }

        `;

        const response = await axios.post(

            "https://leetcode.com/graphql",

            {

                query,

                variables:{
                    username
                }

            },

            {

                headers:{
                    "Content-Type":
                    "application/json"
                }

            }

        );

        const data =
            response.data.data.matchedUser;

        res.status(200).json({

            success:true,

            profile:data

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            success:false,

            message:
            "Failed to fetch LeetCode profile"

        });

    }

};
const getLeetcodeSubmissions = async (req, res) => {

    try {

        const user =
            await User.findById(
                req.user.userId
            );

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        const username =
            user.leetcodeUsername;

        if (!username) {

            return res.status(400).json({

                success: false,

                message:
                    "LeetCode username not set"

            });

        }

        const response =
            await axios.get(

`https://alfa-leetcode-api.onrender.com/${username}/acSubmission`

            );

        const submissionsData =
            response.data?.submission || [];

        if (

            !Array.isArray(
                submissionsData
            )

        ) {

            return res.status(500).json({

                success: false,

                message:
                    "Invalid LeetCode response"

            });

        }

        const solvedSet =
            new Set();

        const problemCache =
            {};

        const uniqueSubmissions =

            submissionsData.filter(
                (submission) => {

                    if (

                        !submission ||

                        !submission.title ||

                        !submission.titleSlug

                    ) {

                        return false;

                    }

                    if (

                        solvedSet.has(
                            submission.titleSlug
                        )

                    ) {

                        return false;

                    }

                    solvedSet.add(
                        submission.titleSlug
                    );

                    return true;

                }
            );

        const submissions = [];

        for (

            const submission of uniqueSubmissions

        ) {

            try {

                const slug =
                    submission.titleSlug;

                if (

                    !problemCache[slug]

                ) {

                    const detailsResponse =
                        await axios.get(

`https://alfa-leetcode-api.onrender.com/select?titleSlug=${slug}`

                        );

                    const questionData =
                        detailsResponse.data;

                    problemCache[slug] = {

                        difficulty:

                            questionData?.difficulty ||

                            "Unknown",

                        tags:

                            Array.isArray(
                                questionData?.topicTags
                            )

                            ?

                            questionData.topicTags.map(
                                (tag) =>

                                    typeof tag === "string"

                                    ?

                                    tag

                                    :

                                    tag?.name
                            )

                            :

                            []

                    };

                }

                submissions.push({

                    platform:
                        "LeetCode",

                    problemName:
                        submission.title,

                    problemLink:

`https://leetcode.com/problems/${submission.titleSlug}`,

                    submissionTime:

                        submission.timestamp

                        ?

                        Number(
                            submission.timestamp
                        ) * 1000

                        :

                        null,

                    programmingLanguage:

                        submission.lang ||

                        "Unknown",

                    verdict:

                        submission.statusDisplay ||

                        "Accepted",

                    difficulty:

                        problemCache[slug]
                        ?.difficulty ||

                        "Unknown",

                    tags:

                        problemCache[slug]
                        ?.tags ||

                        [],

                    rating:
                        null,

                    contestId:
                        null,

                    problemIndex:
                        null

                });

            }

            catch (problemError) {

                console.log(

                    "Problem details error:",

                    submission.titleSlug,

                    problemError.message

                );

                submissions.push({

                    platform:
                        "LeetCode",

                    problemName:
                        submission.title,

                    problemLink:

`https://leetcode.com/problems/${submission.titleSlug}`,

                    submissionTime:

                        submission.timestamp

                        ?

                        Number(
                            submission.timestamp
                        ) * 1000

                        :

                        null,

                    programmingLanguage:

                        submission.lang ||

                        "Unknown",

                    verdict:

                        submission.statusDisplay ||

                        "Accepted",

                    difficulty:
                        "Unknown",

                    tags:
                        [],

                    rating:
                        null,

                    contestId:
                        null,

                    problemIndex:
                        null

                });

            }

        }

        return res.status(200).json({

            success: true,

            submissions,

            totalSolved:
                submissions.length

        });

    }

    catch (error) {

        console.log(
            "LeetCode Error:",
            error.message
        );

        return res.status(500).json({

            success: false,

            message:
                "Failed to fetch LeetCode submissions"

        });

    }

};



module.exports = {
    getLeetcodeProfile,
    getLeetcodeSubmissions
};