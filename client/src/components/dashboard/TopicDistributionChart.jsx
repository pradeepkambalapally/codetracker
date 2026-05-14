import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const TopicDistributionChart = ({
    chartData
}) => {

    const isDark =
        document.documentElement
            .classList.contains(
                "dark"
            );

    const COLORS = [

        "#84cc16",
        "#6366f1",
        "#f59e0b",
        "#ef4444",
        "#10b981",
        "#f97316",
        "#3b82f6",
        "#06b6d4",
        "#8b5cf6",
        "#14b8a6"

    ];

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

                Topic Distribution

            </h2>

            <p className="
                text-sm
                mb-6
                text-slate-500
                dark:text-slate-400
            ">

                Topics you solve most frequently

            </p>

            <div className="
                flex
                items-center
                justify-center
            ">

                <PieChart
                    width={420}
                    height={320}
                >

                    <Pie
                        data={
                            chartData
                        }

                        dataKey=
                            "value"

                        nameKey=
                            "name"

                        cx="42%"
                        cy="50%"

                        outerRadius={90}
                    >

                        {

                            chartData.map(
                                (
                                    entry,
                                    index
                                ) => (

                                    <Cell
                                        key={
                                            index
                                        }

                                        fill={
                                            COLORS[
                                                index %
                                                COLORS.length
                                            ]
                                        }
                                    />
                                )
                            )

                        }

                    </Pie>

                    <Tooltip

                        contentStyle={{

                            borderRadius:
                                "16px",

                            border:
                                isDark
                                ? "1px solid #475569"
                                : "1px solid #e2e8f0",

                            backgroundColor:
                                isDark
                                ? "#1e293b"
                                : "#ffffff",

                            color:
                                isDark
                                ? "#fff"
                                : "#000"
                        }}
                    />

                    <Legend

                        layout=
                            "vertical"

                        align=
                            "right"

                        verticalAlign=
                            "middle"

                        wrapperStyle={{

                            color:
                                isDark
                                ? "#e2e8f0"
                                : "#475569"
                        }}
                    />

                </PieChart>

            </div>

        </div>
    );
};

export default TopicDistributionChart;