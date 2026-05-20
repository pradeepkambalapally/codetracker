import {
    CheckCircle,
    Trophy,
    Star,
    Flame
} from "lucide-react";

const DashboardCard = ({

    problems = [],

    profileStats = {},

    leetcodeProfile = {},

    contests = [],

    platformFilter

}) => {

    const codeforcesSolved =

        problems.filter(

            (problem) =>

                problem.platform ===
                "Codeforces"

        ).length;

    const leetcodeSolved =

        leetcodeProfile
        ?.submitStats
        ?.acSubmissionNum
        ?.find(

            (item) =>

                item.difficulty ===
                "All"

        )?.count || 0;

    const totalSolved =

        platformFilter === "Codeforces"

        ?

        codeforcesSolved

        :

        platformFilter === "LeetCode"

        ?

        leetcodeSolved

        :

        codeforcesSolved + leetcodeSolved;

    const isLeetcode =
        platformFilter === "LeetCode";

    const activeDates = new Set();

problems.forEach((problem) => {

    if (!problem?.submissionTime) return;

    const date =

        new Date(
            problem.submissionTime
        )

        .toISOString()
        .split("T")[0];

    activeDates.add(date);

});

let streak = 0;

const currentDate = new Date();

while (true) {

    const formattedDate =

        currentDate
        .toISOString()
        .split("T")[0];

    if (

        activeDates.has(
            formattedDate
        )

    ) {

        streak++;

    }

    else {

        break;

    }

    currentDate.setDate(

        currentDate.getDate() - 1

    );

}

    const cardData = [

        {
            title:
                "Solved Problems",

            value:
                totalSolved,

            subtitle:
                "Across all time",

            icon:
                CheckCircle,

            border:
                "border-blue-500",

            bg:
                "bg-blue-100",

            iconColor:
                "text-blue-600"
        },

        {

            title:

                isLeetcode

                ?

                "Global Rank"

                :

                "Contests Attended",

            value:

                isLeetcode

                ?

                leetcodeProfile?.ranking || "N/A"

                :

                contests.length,

            subtitle:

                isLeetcode

                ?

                "LeetCode ranking"

                :

                "Rated contests",

            icon:
                Trophy,

            border:
                "border-purple-500",

            bg:
                "bg-purple-100",

            iconColor:
                "text-purple-600"
        },

        {

            title:

                isLeetcode

                ?

                "Star Rating"

                :

                "Highest Rating",

            value:

                isLeetcode

                ?

                leetcodeProfile?.starRating || "N/A"

                :

                profileStats?.maxRating ||
                  "Unrated",

            subtitle:

                isLeetcode

                ?

                "LeetCode stars"

                :

                "Keep grinding!",

            icon:
                Star,

            border:
                "border-yellow-500",

            bg:
                "bg-yellow-100",

            iconColor:
                "text-yellow-600"
        },

        {
            title:
                "Current Streak",

            value:
                `${streak} Days`,

            subtitle:
                "Keep it up!",

            icon:
                Flame,

            border:
                "border-red-500",

            bg:
                "bg-red-100",

            iconColor:
                "text-red-600"
        }
    ];

    return (

        <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
        ">

            {

                cardData.map(
                    (
                        card,
                        index
                    ) => {

                        const Icon =
                            card.icon;

                        return (

                            <div
                                key={index}

                                className={`

                                bg-white
                                dark:bg-slate-800

                                border
                                dark:border-slate-700

                                ${card.border}

                                border-l-4

                                rounded-3xl
                                p-6

                                shadow-sm
                                hover:shadow-lg
                                hover:-translate-y-1

                                transition-all
                                duration-300
                                `}
                            >

                                <div className="
                                    flex
                                    items-start
                                    justify-between
                                ">

                                    <div>

                                        <p className="
                                            text-sm
                                            font-medium
                                            text-slate-500
                                            dark:text-slate-400
                                        ">

                                            {
                                                card.title
                                            }

                                        </p>

                                        <h2 className="
                                            text-4xl
                                            font-bold
                                            mt-3
                                            text-slate-800
                                            dark:text-white
                                        ">

                                            {
                                                card.value
                                            }

                                        </h2>

                                        <p className={`

                                            text-sm
                                            mt-3
                                            font-medium

                                            ${card.iconColor}

                                        `}>

                                            {
                                                card.subtitle
                                            }

                                        </p>

                                    </div>

                                    <div
                                        className={`${card.bg}
                                        p-4
                                        rounded-2xl`}
                                    >

                                        <Icon
                                            className={
                                                card.iconColor
                                            }

                                            size={28}
                                        />

                                    </div>

                                </div>

                            </div>

                        );

                    }
                )

            }

        </div>
    );
};

export default DashboardCard;