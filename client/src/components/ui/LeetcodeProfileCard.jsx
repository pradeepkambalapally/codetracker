const LeetcodeProfileCard = ({
    profile
}) => {

    const stats =

        profile?.submitStats
        ?.acSubmissionNum || [];

    const allSolved =

        stats.find(
            item =>
                item.difficulty === "All"
        )?.count || 0;

    const easySolved =

        stats.find(
            item =>
                item.difficulty === "Easy"
        )?.count || 0;

    const mediumSolved =

        stats.find(
            item =>
                item.difficulty === "Medium"
        )?.count || 0;

    const hardSolved =

        stats.find(
            item =>
                item.difficulty === "Hard"
        )?.count || 0;

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            rounded-3xl

            border
            border-slate-200
            dark:border-slate-700

            shadow-sm
            mt-6
            p-6
        ">

            <div className="
                flex
                items-center
                justify-between
                flex-wrap
                gap-4
            ">

                <div>

                    <h1 className="
                        text-3xl
                        font-bold

                        text-slate-800
                        dark:text-white
                    ">

                        {profile?.username}

                    </h1>

                    <p className="
                        mt-2

                        text-slate-500
                        dark:text-slate-400
                    ">

                        LeetCode Profile

                    </p>

                </div>

                <div className="
                    bg-orange-100
                    dark:bg-orange-900/40

                    text-orange-700
                    dark:text-orange-300

                    px-4
                    py-2

                    rounded-2xl

                    font-semibold
                ">

                    Ranking:
                    {" "}
                    {profile?.ranking || "N/A"}

                </div>

            </div>

            <div className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-4
                mt-8
            ">

                {

                [

                    {
                        title:
                        "Total Solved",

                        value:
                        allSolved
                    },

                    {
                        title:
                        "Easy",

                        value:
                        easySolved
                    },

                    {
                        title:
                        "Medium",

                        value:
                        mediumSolved
                    },

                    {
                        title:
                        "Hard",

                        value:
                        hardSolved
                    }

                ].map((item, index) => (

                    <div

                        key={index}

                        className="
                            bg-slate-50
                            dark:bg-slate-700

                            border
                            border-slate-200
                            dark:border-slate-600

                            rounded-2xl

                            p-4
                        "
                    >

                        <p className="
                            text-sm
                            text-slate-400
                        ">

                            {item.title}

                        </p>

                        <h2 className="
                            mt-2

                            text-2xl
                            font-bold

                            text-slate-800
                            dark:text-white
                        ">

                            {item.value}

                        </h2>

                    </div>

                ))

                }

            </div>

        </div>

    );

};

export default LeetcodeProfileCard;