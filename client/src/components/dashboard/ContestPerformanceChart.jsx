import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import {
    useEffect,
    useState
} from "react";

const ContestPerformanceChart = ({
    contestChartData = []
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

        (contestChartData || [])
        .filter(
            item =>
                item?.name &&
                item?.change !== undefined
        );

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            rounded-3xl
            p-6

            shadow-sm

            border
            border-slate-200
            dark:border-slate-700
        ">

            <h2 className="
                text-2xl
                font-bold
                mb-2

                text-slate-800
                dark:text-white
            ">

                Contest Performance

            </h2>

            <p className="
                text-sm
                mb-6

                text-slate-500
                dark:text-slate-400
            ">

                Your rating progress over contests

            </p>

            <div className="
                w-full
                h-[320px]
                min-h-[320px]
            ">

                {

                    chartData.length > 0

                    ?

                    (

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart
                            data={chartData}
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

                            />

                            <XAxis

                                dataKey="name"

                                tick={{
                                    fontSize:12
                                }}

                                stroke={

                                    isDark

                                    ?

                                    "#cbd5e1"

                                    :

                                    "#94a3b8"

                                }

                            />

                            <YAxis

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

                                        "#fff",

                                    color:

                                        isDark

                                        ?

                                        "#fff"

                                        :

                                        "#000"

                                }}

                            />

                            <Bar

                                dataKey="change"

                                fill="#3b82f6"

                                radius={[
                                    8,
                                    8,
                                    0,
                                    0
                                ]}

                            />

                        </BarChart>

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

export default ContestPerformanceChart;