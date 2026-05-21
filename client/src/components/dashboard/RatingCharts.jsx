import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

import {
    useEffect,
    useState
} from "react";

const RatingCharts = ({
    contests = []
}) => {

    const [
        isDark,
        setIsDark
    ] = useState(false);

    useEffect(() => {

        const updateTheme = () => {

            setIsDark(

                document
                    .documentElement
                    .classList
                    .contains(
                        "dark"
                    )

            );

        };

        updateTheme();

        const observer =
            new MutationObserver(
                updateTheme
            );

        observer.observe(

            document.documentElement,

            {
                attributes:true,

                attributeFilter:[
                    "class"
                ]
            }

        );

        return () =>
            observer.disconnect();

    }, []);

    const chartData =
        (contests || [])

        .filter(

            contest =>

                contest?.ratingUpdateTime

        )

        .map(

            (contest) => ({

                ...contest,

                date:

                    new Date(

                        contest.ratingUpdateTime

                    )

                    .toLocaleDateString(

                        "en-US",

                        {

                            month:"short",

                            year:"numeric"

                        }

                    )

            })

        );

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            p-5
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

                <div>

                    <h2 className="
                        text-2xl
                        font-bold
                        text-slate-800
                        dark:text-white
                    ">

                        Rating Progress

                    </h2>

                    <p className="
                        mt-1
                        text-slate-500
                        dark:text-slate-400
                    ">

                        Track your Codeforces rating growth

                    </p>

                </div>

            </div>

            <div className="
                w-full
                h-[350px]
                min-h-[350px]
            ">

                {

                    chartData.length > 0

                    ?

                    (

                    <ResponsiveContainer
                        width="99%"
                        height={350}
                    >

                        <LineChart

                            data={
                                chartData
                            }

                            margin={{

                                top:5,
                                right:10,
                                left:-20,
                                bottom:0

                            }}
                        >

                            <CartesianGrid

                                strokeDasharray="3 3"

                                stroke={

                                    isDark

                                    ?

                                    "#334155"

                                    :

                                    "#e2e8f0"

                                }

                                vertical={false}

                            />

                            <XAxis

                                dataKey="date"

                                tick={{
                                    fontSize:12
                                }}

                                tickLine={false}

                                axisLine={false}

                                stroke={

                                    isDark

                                    ?

                                    "#cbd5e1"

                                    :

                                    "#94a3b8"

                                }

                            />

                            <YAxis

                                tick={{
                                    fontSize:12
                                }}

                                tickLine={false}

                                axisLine={false}

                                stroke={

                                    isDark

                                    ?

                                    "#cbd5e1"

                                    :

                                    "#94a3b8"

                                }

                            />

                            <Tooltip

                                contentStyle={{

                                    borderRadius:
                                        "16px",

                                    border:

                                    isDark

                                    ?

                                    "1px solid #475569"

                                    :

                                    "1px solid #e2e8f0",

                                    backgroundColor:

                                    isDark

                                    ?

                                    "#1e293b"

                                    :

                                    "#ffffff",

                                    color:

                                    isDark

                                    ?

                                    "#fff"

                                    :

                                    "#000"

                                }}

                            />

                            <Line

                                type="monotone"

                                dataKey="newRating"

                                stroke="#2563eb"

                                strokeWidth={3}

                                dot={false}

                                activeDot={{
                                    r:6
                                }}

                                animationDuration={1500}

                            />

                        </LineChart>

                    </ResponsiveContainer>

                    )

                    :

                    (

                    <div className="
                        h-full

                        flex
                        items-center
                        justify-center

                        text-slate-500
                        dark:text-slate-400
                    ">

                        No contest data available

                    </div>

                    )

                }

            </div>

        </div>
    );
};

export default RatingCharts;