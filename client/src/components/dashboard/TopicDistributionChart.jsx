import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const TopicDistributionChart = ({
    chartData
}) => {

    const isDark =
        document.documentElement.classList.contains(
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

        <div
            className="
                bg-white
                dark:bg-slate-800
                rounded-3xl
                p-6
                shadow-sm
                border
                border-slate-200
                dark:border-slate-700
                w-full
            "
        >

            <h2
                className="
                    text-2xl
                    font-bold
                    mb-2
                    text-slate-800
                    dark:text-white
                "
            >
                Topic Distribution
            </h2>

            <p
                className="
                    text-sm
                    mb-6
                    text-slate-500
                    dark:text-slate-400
                "
            >
                Topics you solve most frequently
            </p>

            <div
                className="
                    w-full
                    h-[350px]
                    md:h-[420px]
                "
            >

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <PieChart>

                        <Pie
                            data={chartData}
                           dataKey="value"
                           nameKey="name"
                           cx="35%"
                           cy="50%"
                           outerRadius="66%"
                           innerRadius="42%"
                           paddingAngle={2}
                           stroke="none"
                        >

                            {
                                chartData.map(
                                    (
                                        entry,
                                        index
                                    ) => (

                                        <Cell
                                            key={`cell-${index}`}

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
                                        : "#000",

                                boxShadow:
                                    "0 4px 20px rgba(0,0,0,0.08)"
                            }}
                        />

                        <Legend

                            layout="vertical"

                            verticalAlign="middle"

                            align="right"

                            iconSize={12}

                            wrapperStyle={{

                                color:
                                    isDark
                                        ? "#e2e8f0"
                                        : "#475569",

                                fontSize: "15px",

                                lineHeight: "30px",

                                paddingLeft: "40px",

                                right: 0
                            }}
                        />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default TopicDistributionChart;