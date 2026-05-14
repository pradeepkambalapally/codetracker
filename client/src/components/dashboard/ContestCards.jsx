import {
    CheckCircle,
    Trophy,
    Star,
    Flame
} from "lucide-react";

const ContestCard = ({
    contests
}) => {

    const bestRank =
        contests.length
            ? Math.min(
                ...contests.map(
                    c => c.rank
                )
            )
            : 0;

    const highestRatingGain =
        contests.length
            ? Math.max(
                ...contests.map(
                    c => c.ratingChange
                )
            )
            : 0;

    const avgRank =
        contests.length
            ? Math.floor(

                contests.reduce(

                    (sum,c)=>

                        sum +
                        c.rank,

                    0

                ) /

                contests.length

            )
            : 0;

    const cardData = [

        {
            title:
                "Total Contests",

            value:
                contests.length,

            subtitle:
                "Across all time",

            icon:
                CheckCircle,

            border:
                "border-blue-500",

            bg:
                "bg-blue-100 dark:bg-blue-900/40",

            iconColor:
                "text-blue-600 dark:text-blue-300"
        },

        {
            title:
                "Best Rank",

            value:
                bestRank,

            subtitle:
                "Keep grinding!",

            icon:
                Trophy,

            border:
                "border-yellow-500",

            bg:
                "bg-yellow-100 dark:bg-yellow-900/40",

            iconColor:
                "text-yellow-600 dark:text-yellow-300"
        },

        {
            title:
                "Highest Rating Gain",

            value:
                highestRatingGain,

            subtitle:
                "Keep grinding!",

            icon:
                Star,

            border:
                "border-purple-500",

            bg:
                "bg-purple-100 dark:bg-purple-900/40",

            iconColor:
                "text-purple-600 dark:text-purple-300"
        },

        {
            title:
                "Average Rank",

            value:
                avgRank,

            subtitle:
                "Keep it up!",

            icon:
                Flame,

            border:
                "border-red-500",

            bg:
                "bg-red-100 dark:bg-red-900/40",

            iconColor:
                "text-red-600 dark:text-red-300"
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

                rounded-3xl

                border
                dark:border-slate-700

                ${card.border}

                border-l-4

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

                            {card.title}

                        </p>

                        <h2 className="
                            text-4xl
                            font-bold
                            mt-3

                            text-slate-800
                            dark:text-white
                        ">

                            {card.value}

                        </h2>

                        <p
                        className={`
                        text-sm
                        mt-3
                        font-medium

                        ${card.iconColor}
                        `}
                        >

                            {card.subtitle}

                        </p>

                    </div>

                   

                    <div
                        className={`
                        ${card.bg}
                        p-4
                        rounded-2xl
                        `}
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

            })

            }

        </div>
    );
};

export default ContestCard;