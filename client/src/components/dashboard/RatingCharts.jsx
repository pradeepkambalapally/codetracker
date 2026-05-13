import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";


const RatingCharts = ({ contests }) => {

    // Transform contest data

    const chartData = contests.map((contest) => ({

        ...contest,

        date: new Date(
            contest.ratingUpdateTime
        ).toLocaleDateString(
            "en-US",
            {
                month: "short",
                year: "numeric"
            }
        )

    }));

    return (

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">

            
            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-slate-800">
                        Rating Progress
                    </h2>

                    <p className="text-slate-500 mt-1">
                        Track your Codeforces rating growth
                    </p>

                </div>

              

            </div>

            {/* Chart */}

            <div className="w-full h-56">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 10,
                            left: -20,
                            bottom: 0
                        }}
                    >

                        {/* Grid */}

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#e2e8f0"
                            vertical={false}
                        />

                        {/* X Axis */}

                        <XAxis
                            dataKey="date"
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                            stroke="#94a3b8"
                        />

                        {/* Y Axis */}

                        <YAxis
                            tick={{ fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                            stroke="#94a3b8"
                        />

                        {/* Tooltip */}

                        <Tooltip
                            contentStyle={{
                                borderRadius: "16px",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                            }}
                        />

                        {/* Rating Line */}

                        <Line
                            type="monotone"
                            dataKey="newRating"
                            stroke="#2563eb"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{
                                r: 6
                            }}
                            animationDuration={1500}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default RatingCharts;