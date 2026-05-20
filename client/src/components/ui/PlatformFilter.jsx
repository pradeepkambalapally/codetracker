const PlatformFilter = ({

    platformFilter,

    setPlatformFilter

}) => {

    return (

        <div className="
            flex
            gap-3
            mt-4
            mb-6
            flex-wrap
        ">

            {

            [

                "All",
                "Codeforces",
                "LeetCode"

            ].map((platform) => (

                <button

                    key={platform}

                    onClick={() => {

                        setPlatformFilter(
                            platform
                        );

                    }}

                    className={`

                        px-4
                        py-2

                        rounded-xl

                        text-sm
                        font-semibold

                        transition-colors

                        ${

                            platformFilter === platform

                            ?

                            "bg-blue-600 text-white"

                            :

                            `

                            bg-white
                            dark:bg-slate-800

                            text-slate-600
                            dark:text-slate-300

                            border
                            border-slate-200
                            dark:border-slate-700

                            hover:bg-slate-100
                            dark:hover:bg-slate-700

                            `

                        }

                    `}
                >

                    {platform}

                </button>

            ))

            }

        </div>

    );

};

export default PlatformFilter;