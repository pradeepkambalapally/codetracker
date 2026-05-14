const ProfileCard = ({
    profile
}) => {

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            rounded-3xl

            border
            border-slate-200
            dark:border-slate-700

            shadow-sm

            overflow-hidden

            max-w-7xl
            mx-auto
        ">

           

            <div className="
                h-20

                bg-gradient-to-r
                from-blue-500
                via-indigo-500
                to-purple-500

                relative
            ">

               

                <div className="
                    absolute
                    -bottom-8
                    left-5
                ">

                    <div className="
                        w-16
                        h-16

                        rounded-full

                        border-4
                        border-white
                        dark:border-slate-800

                        bg-gradient-to-br
                        from-blue-500
                        to-indigo-600

                        flex
                        items-center
                        justify-center

                        text-2xl
                        font-bold
                        text-white

                        shadow-md
                    ">

                        {
                        profile.handle
                        ?.charAt(0)
                        .toUpperCase()
                        }

                    </div>

                </div>

            </div>

            

            <div className="
                pt-12
                px-5
                pb-5
            ">

               

                <div className="
                    flex
                    flex-col

                    lg:flex-row
                    lg:items-center
                    lg:justify-between

                    gap-4
                ">

                    

                    <div>

                        <h1 className="
                            text-2xl
                            font-bold

                            text-slate-800
                            dark:text-white
                        ">

                            {
                                profile.handle
                            }

                        </h1>

                        <div className="
                            flex
                            items-center
                            gap-2
                            mt-2
                            flex-wrap
                        ">

                            <span className="
                                bg-blue-100
                                dark:bg-blue-900/40

                                text-blue-600
                                dark:text-blue-300

                                text-xs
                                font-semibold

                                px-3
                                py-1

                                rounded-full
                            ">

                                {
                                    profile.rank ||
                                    "Unrated"
                                }

                            </span>

                            <span className="
                                bg-yellow-100
                                dark:bg-yellow-900/40

                                text-yellow-700
                                dark:text-yellow-300

                                text-xs
                                font-semibold

                                px-3
                                py-1

                                rounded-full
                            ">

                                Max:

                                {
                                profile.maxRank ||
                                "N/A"
                                }

                            </span>

                        </div>

                    </div>

                    

                    <div className="
                        flex
                        gap-3
                    ">

                        <div className="
                            bg-slate-50
                            dark:bg-slate-700

                            border
                            border-slate-200
                            dark:border-slate-600

                            rounded-2xl

                            px-4
                            py-3

                            min-w-[120px]
                        ">

                            <p className="
                                text-xs
                                text-slate-400
                            ">

                                Contribution

                            </p>

                            <h2 className="
                                text-xl
                                font-bold
                                mt-1

                                text-slate-800
                                dark:text-white
                            ">

                                {
                                profile.contribution ?? 0
                                }

                            </h2>

                        </div>

                        <div className="
                            bg-slate-50
                            dark:bg-slate-700

                            border
                            border-slate-200
                            dark:border-slate-600

                            rounded-2xl

                            px-4
                            py-3

                            min-w-[120px]
                        ">

                            <p className="
                                text-xs
                                text-slate-400
                            ">

                                Friend Of

                            </p>

                            <h2 className="
                                text-xl
                                font-bold
                                mt-1

                                text-slate-800
                                dark:text-white
                            ">

                                {
                                profile.friendOfCount ?? 0
                                }

                            </h2>

                        </div>

                    </div>

                </div>

                

                <div className="
                    grid
                    grid-cols-3
                    gap-3
                    mt-5
                ">

                    {

                    [

                    {
                        title:
                        "Current Rating",

                        value:
                        profile.rating ||
                        "N/A"
                    },

                    {
                        title:
                        "Max Rating",

                        value:
                        profile.maxRating ||
                        "N/A"
                    },

                    {
                        title:
                        "Organization",

                        value:
                        profile.organization ||
                        "N/A"
                    }

                    ]

                    .map(

                    (
                        item,
                        index
                    ) => (

                    <div

                        key={index}

                        className="
                        bg-slate-50
                        dark:bg-slate-700

                        border
                        border-slate-200
                        dark:border-slate-600

                        rounded-2xl

                        p-3
                        "
                    >

                        <p className="
                            text-xs
                            text-slate-400
                        ">

                            {
                                item.title
                            }

                        </p>

                        <h2 className="
                            mt-1

                            font-bold

                            text-slate-800
                            dark:text-white

                            text-xl
                        ">

                            {
                                item.value
                            }

                        </h2>

                    </div>

                    ))

                    }

                </div>

            </div>

        </div>
    );
};

export default ProfileCard;