import {
    Trophy,
    ArrowRight,
    TrendingUp,
    TrendingDown
} from "lucide-react";

import {
    useNavigate
} from "react-router-dom";

const ContestActivity = ({
    contests
}) => {

    const navigate =
        useNavigate();

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            p-6

            rounded-3xl

            shadow-sm

            border
            border-slate-200
            dark:border-slate-700
        ">

           

            <div className="
                flex
                items-center
                justify-between
                mb-6
            ">

                <div className="
                    flex
                    items-center
                    gap-3
                ">

                    <div className="
                        bg-purple-100
                        dark:bg-purple-900/40

                        p-3

                        rounded-2xl
                    ">

                        <Trophy
                            className="
                            text-purple-600
                            dark:text-purple-300
                            "
                            size={22}
                        />

                    </div>

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            text-slate-800
                            dark:text-white
                        ">

                            Recent Contest Activity

                        </h2>

                        <p className="
                            text-sm
                            mt-1
                            text-slate-500
                            dark:text-slate-400
                        ">

                            Your latest Codeforces contests

                        </p>

                    </div>

                </div>

                <button

                    onClick={() => {

                        navigate(
                            "/contests"
                        );

                    }}

                    className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    font-semibold

                    text-purple-600
                    hover:text-purple-700

                    dark:text-purple-300
                    dark:hover:text-purple-200

                    transition-colors
                    "
                >

                    View All

                    <ArrowRight
                        size={16}
                    />

                </button>

            </div>


            <div className="
                space-y-4
            ">

                {

                contests.map(

                (
                    contest,
                    index
                ) => (

                <div

                    key={index}

                    className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-slate-100
                    dark:border-slate-700

                    last:border-none

                    pb-4
                    px-3

                    rounded-2xl

                    hover:bg-slate-50
                    dark:hover:bg-slate-700/40

                    transition-colors
                    "
                >

                   

                    <div className="
                        pr-4
                    ">

                        <h3 className="
                            font-semibold
                            line-clamp-1

                            text-slate-800
                            dark:text-white
                        ">

                            {
                                contest.contestName
                            }

                        </h3>

                        <p className="
                            text-sm
                            mt-1

                            text-slate-500
                            dark:text-slate-400
                        ">

                            Rank #
                            {
                                contest.rank
                            }

                        </p>

                    </div>

                    
                    <div

                    className={`

                    flex
                    items-center
                    gap-1

                    text-sm
                    font-semibold

                    px-3
                    py-1.5

                    rounded-full
                    whitespace-nowrap

                    ${
                    contest.ratingChange > 0

                    ?

                    "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300"

                    :

                    "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300"

                    }

                    `}
                    >

                        {

                        contest.ratingChange > 0

                        ?

                        <TrendingUp
                            size={14}
                        />

                        :

                        <TrendingDown
                            size={14}
                        />

                        }

                        {

                        contest.ratingChange > 0

                        ?

                        `+${
                        contest.ratingChange
                        }`

                        :

                        contest.ratingChange

                        }

                    </div>

                </div>

                ))

                }

            </div>

        </div>
    );
};

export default ContestActivity;