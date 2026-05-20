import {
    Trophy,
    Star,
    CheckCircle,
    Activity
} from "lucide-react";

const LeetcodeStatsCard = ({
    leetcodeProfile = {}
}) => {

    const stats =

        leetcodeProfile
        ?.submitStats
        ?.acSubmissionNum || [];

    const easySolved =

        stats.find(
            (item) =>
                item.difficulty === "Easy"
        )?.count || 0;

    const mediumSolved =

        stats.find(
            (item) =>
                item.difficulty === "Medium"
        )?.count || 0;

    const hardSolved =

        stats.find(
            (item) =>
                item.difficulty === "Hard"
        )?.count || 0;

    const cards = [

        {

            title:
                "Global Rank",

            value:
                leetcodeProfile?.ranking || "N/A",

            icon:
                Trophy,

            bg:
                "bg-yellow-100 dark:bg-yellow-900/30",

            iconColor:
                "text-yellow-600 dark:text-yellow-300"

        },

        {

            title:
                "Star Rating",

            value:
                leetcodeProfile?.starRating || "N/A",

            icon:
                Star,

            bg:
                "bg-blue-100 dark:bg-blue-900/30",

            iconColor:
                "text-blue-600 dark:text-blue-300"

        },

        {

            title:
                "Reputation",

            value:
                leetcodeProfile?.reputation || 0,

            icon:
                Activity,

            bg:
                "bg-purple-100 dark:bg-purple-900/30",

            iconColor:
                "text-purple-600 dark:text-purple-300"

        },

        {

            title:
                "Hard Solved",

            value:
                hardSolved,

            icon:
                CheckCircle,

            bg:
                "bg-red-100 dark:bg-red-900/30",

            iconColor:
                "text-red-600 dark:text-red-300"

        }

    ];

    return (

        <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            mt-6
        ">

            {

                cards.map(
                    (
                        card,
                        index
                    ) => {

                        const Icon =
                            card.icon;

                        return (

                            <div

                                key={index}

                                className="
                                bg-white
                                dark:bg-slate-800

                                border
                                border-slate-200
                                dark:border-slate-700

                                rounded-3xl
                                p-6

                                shadow-sm
                                "

                            >

                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                ">

                                    <div>

                                        <p className="
                                            text-sm
                                            text-slate-500
                                            dark:text-slate-400
                                        ">

                                            {
                                                card.title
                                            }

                                        </p>

                                        <h2 className="
                                            text-3xl
                                            font-bold
                                            mt-3

                                            text-slate-800
                                            dark:text-white
                                        ">

                                            {
                                                card.value
                                            }

                                        </h2>

                                    </div>

                                    <div className={`
                                        ${card.bg}

                                        p-4
                                        rounded-2xl
                                    `}>

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

            <div className="
                col-span-1
                sm:col-span-2
                xl:col-span-4

                bg-white
                dark:bg-slate-800

                border
                border-slate-200
                dark:border-slate-700

                rounded-3xl
                p-6

                shadow-sm
            ">

                <h2 className="
                    text-xl
                    font-bold

                    text-slate-800
                    dark:text-white
                ">

                    Problem Distribution

                </h2>

                <div className="
                    grid
                    grid-cols-3
                    gap-4
                    mt-6
                ">

                    {

                    [

                        {

                            label: "Easy",

                            value: easySolved,

                            color:
                                "bg-green-500"

                        },

                        {

                            label: "Medium",

                            value: mediumSolved,

                            color:
                                "bg-yellow-500"

                        },

                        {

                            label: "Hard",

                            value: hardSolved,

                            color:
                                "bg-red-500"

                        }

                    ].map(

                        (
                            item,
                            index
                        ) => (

                            <div
                                key={index}
                            >

                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                    mb-2
                                ">

                                    <span className="
                                        text-sm
                                        font-medium

                                        text-slate-600
                                        dark:text-slate-300
                                    ">

                                        {
                                            item.label
                                        }

                                    </span>

                                    <span className="
                                        text-sm
                                        font-bold

                                        text-slate-800
                                        dark:text-white
                                    ">

                                        {
                                            item.value
                                        }

                                    </span>

                                </div>

                                <div className="
                                    h-3

                                    bg-slate-200
                                    dark:bg-slate-700

                                    rounded-full
                                    overflow-hidden
                                ">

                                    <div
                                        className={`
                                            h-full
                                            ${item.color}
                                        `}
                                        style={{

                                            width: `${

                                                (
                                                    item.value
                                                    /
                                                    (
                                                        easySolved +
                                                        mediumSolved +
                                                        hardSolved
                                                    )
                                                ) * 100

                                            }%`

                                        }}
                                    />

                                </div>

                            </div>

                        )

                    )

                    }

                </div>

            </div>

        </div>

    );

};

export default LeetcodeStatsCard;