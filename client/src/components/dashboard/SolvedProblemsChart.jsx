import {
    AreaChart,
    Area,
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

const SolvedProblemsChart = ({

    problems = []

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
                    .contains("dark")

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

                attributes: true,

                attributeFilter: [
                    "class"
                ]

            }

        );

        return () =>
            observer.disconnect();

    }, []);

    // GROUP MONTHLY SOLVED PROBLEMS

    const groupedData = {};

    (problems || []).forEach(
        (problem) => {

            if (
                !problem?.submissionTime
            ) return;

            const date =
                new Date(
                    problem.submissionTime
                );

            const monthYear =
                date.toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        year: "numeric"
                    }
                );

            if (
                !groupedData[
                    monthYear
                ]
            ) {

                groupedData[
                    monthYear
                ] = 0;

            }

            groupedData[
                monthYear
            ]++;

        }
    );

    // SORT MONTHS

    const sortedEntries =

        Object.entries(
            groupedData
        ).sort(

            ([a], [b]) =>

                new Date(a) -
                new Date(b)

        );

    // BUILD CUMULATIVE DATA

    let cumulativeSolved = 0;

    const chartData =

        sortedEntries.map(

            ([date, count]) => {

                // eslint-disable-next-line react-hooks/immutability
                cumulativeSolved += count;

                return {

                    date,

                    solved:
                        cumulativeSolved

                };

            }

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

                        Solved Problems Progress

                    </h2>

                    <p className="
                        mt-1
                        text-slate-500
                        dark:text-slate-400
                    ">

                        Track your recent solved problems progression

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

                            <AreaChart

                                data={chartData}

                                margin={{

                                    top: 5,

                                    right: 10,

                                    left: -20,

                                    bottom: 0

                                }}

                            >

                                <CartesianGrid

                                    strokeDasharray="3 3"

                                    vertical={false}

                                    stroke={

                                        isDark

                                        ?

                                        "#334155"

                                        :

                                        "#e2e8f0"

                                    }

                                />

                                <XAxis

                                    dataKey="date"

                                    tick={{
                                        fontSize: 12
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
                                        fontSize: 12
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

                                        borderRadius: "16px",

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

                                            "#fff",

                                        color:

                                            isDark

                                            ?

                                            "#fff"

                                            :

                                            "#000"

                                    }}

                                />

                                <Area

                                    type="monotone"

                                    dataKey="solved"

                                    stroke="#16a34a"

                                    fill="#86efac"

                                    fillOpacity={0.5}

                                    strokeWidth={3}

                                />

                            </AreaChart>

                        </ResponsiveContainer>

                    )

                    :

                    (

                        <div className="
    flex
    flex-col
    items-center
    justify-center

    py-10

    text-slate-500
    dark:text-slate-400
">

    <p className="
        text-lg
        font-semibold
    ">

        No solved problems yet

    </p>

    <p className="
        text-sm
        mt-2
    ">

        Start solving problems to see activity here

    </p>

</div>

                    )

                }

            </div>

        </div>

    );

};

export default SolvedProblemsChart;