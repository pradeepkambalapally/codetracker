const axios = require("axios");

const User = require("../models/user-credentials");

const getActivityHeatmap = async (req, res, next) => {

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

        const activityMap = {};

        // CODEFORCES

        if (user.codeforcesUsername) {

            try {

                const cfResponse =
                    await axios.get(

`https://codeforces.com/api/user.status?handle=${user.codeforcesUsername}`

                    );

                const submissions =
                    cfResponse.data.result || [];

                submissions.forEach(
                    (submission) => {

                        const timestamp =

                            submission.creationTimeSeconds;

                        if (!timestamp) return;

                        const date =

                            new Date(
                                timestamp * 1000
                            )

                            .toISOString()

                            .split("T")[0];

                        activityMap[date] =

                            (activityMap[date] || 0)

                            + 1;

                    }
                );

            }

            catch (error) {

                console.log(

                    "CF Heatmap Error:",

                    error.message

                );

            }

        }

        // LEETCODE

        if (user.leetcodeUsername) {

            try {

                const query = `

                query userProfile($username: String!) {

                    matchedUser(username: $username) {

                        submissionCalendar

                    }

                }

                `;

                const lcResponse = await axios.post(

                    "https://leetcode.com/graphql",

                    {

                        query,

                        variables: {

                            username:
                                user.leetcodeUsername

                        }

                    },

                    {

                        headers: {

                            "Content-Type":
                                "application/json"

                        }

                    }

                );

                const rawCalendar =

                    lcResponse.data
                    ?.data
                    ?.matchedUser
                    ?.submissionCalendar;

                if (rawCalendar) {

                    const submissionCalendar =

                        typeof rawCalendar === "string"

                        ?

                        JSON.parse(rawCalendar)

                        :

                        rawCalendar;

                    Object.entries(
                        submissionCalendar
                    ).forEach(([timestamp, count]) => {

                        const date =

                            new Date(
                                Number(timestamp) * 1000
                            )

                            .toISOString()

                            .split("T")[0];

                        activityMap[date] =

                            (activityMap[date] || 0)

                            + Number(count);

                    });

                }

            }

            catch (error) {

                console.log(

                    "LC Heatmap Error:",

                    error.message

                );

            }

        }

        const heatmapData =

            Object.entries(activityMap)

            .map(([date, count]) => ({

                date,
                count

            }));

        return res.status(200).json({

            success: true,

            heatmapData

        });

    }

    catch (error) {
         next(error);
    }

};

module.exports = {
    getActivityHeatmap
};