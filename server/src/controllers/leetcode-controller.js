const axios = require("axios");
const User = require("../models/user-credentials");

const getLeetcodeProfile = async (req, res) => {

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

                submissionCalendar

            }

        }

        `;

        const response = await axios.post(

            "https://leetcode.com/graphql",

            {

                query,

                variables: {
                    username
                }

            },

            {

                headers: {

                    "Content-Type":
                        "application/json"

                },

                timeout: 10000

            }

        );

        if (

            !response.data ||

            !response.data.data ||

            !response.data.data.matchedUser

        ) {

            return res.status(500).json({

                success: false,

                message:
                    "Invalid LeetCode response"

            });

        }

        const data =
            response.data
            .data
            .matchedUser;

        res.status(200).json({

            success: true,

            profile: {

                username:
                    data.username,

                ranking:
                    data.profile?.ranking || 0,

                reputation:
                    data.profile?.reputation || 0,

                starRating:
                    data.profile?.starRating || 0,

                submitStats:
                    data.submitStats || {},

                submissionCalendar:

                    data.submissionCalendar

                    ?

                    JSON.parse(
                        data.submissionCalendar
                    )

                    :

                    {}

            }

        });

    }

    catch (error) {

        console.log(
            "LeetCode Profile Error:",
            error.message
        );

        res.status(500).json({

            success: false,

            message:
                "Failed to fetch LeetCode profile"

        });

    }

};
let leetcodeCache = {};

const CACHE_DURATION =
    1000 * 60 * 10; // 10 minutes

const getLeetcodeSubmissions = async (req, res) => {

    try {

        const user =
            await User.findById(
                req.user.userId
            );

        if (!user) {

            return res.status(404).json({

                success: false,

                message:
                    "User not found"

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

        // CACHE KEY

        const cacheKey =
            username;

        const cachedData =
            leetcodeCache[
                cacheKey
            ];

        // RETURN CACHE IF VALID

        if (

            cachedData &&

            Date.now() -
            cachedData.timestamp
            <
            CACHE_DURATION

        ) {

            return res.status(200).json({

                success: true,

                submissions:
                    cachedData.submissions,

                totalSolved:
                    cachedData.totalSolved

            });

        }

        // FETCH USER SUBMISSIONS

        const submissionsResponse =
            await axios.get(

`https://alfa-leetcode-api.onrender.com/${username}/acSubmission`

            );

        const submissionsData =
            submissionsResponse.data?.submission || [];

        if (

            !Array.isArray(
                submissionsData
            )

        ) {

            return res.status(500).json({

                success: false,

                message:
                    "Invalid submissions response"

            });

        }

        // REMOVE DUPLICATES

        const solvedSet =
            new Set();

        const uniqueSubmissions =

            submissionsData.filter(
                (submission) => {

                    if (

                        !submission?.titleSlug

                    ) {

                        return false;

                    }

                    const slug =

                        submission.titleSlug
                        .toLowerCase()
                        .trim();

                    if (

                        solvedSet.has(
                            slug
                        )

                    ) {

                        return false;

                    }

                    solvedSet.add(
                        slug
                    );

                    return true;

                }
            );

        // FINAL SUBMISSIONS

        const submissions =

            uniqueSubmissions
            .slice(0, 50)
            .map(

                (submission) => {

                    return {

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

                    };

                }

            );

        // SAVE CACHE

        leetcodeCache[
            cacheKey
        ] = {

            submissions,

            totalSolved:
                uniqueSubmissions.length,

            timestamp:
                Date.now()

        };

        return res.status(200).json({

            success: true,

            submissions,

            totalSolved:
                uniqueSubmissions.length

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