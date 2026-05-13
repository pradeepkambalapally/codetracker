import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";



const SolvedProblemsChart = ({ problems }) => {

    // Group solved problems by month/year

    const groupedData = {};

    problems.forEach((problem) => {

        const date = new Date(problem.submissionTime);

        const monthYear = date.toLocaleDateString(
            "en-US",
            {
                month: "short",
                year: "numeric"
            }
        );

        if (!groupedData[monthYear]) {

            groupedData[monthYear] = 0;

        }

        groupedData[monthYear] += 1;

    });

    // Convert to cumulative solved count

    let cumulativeSolved = 0;

    const chartData = Object.entries(groupedData).map(
        ([date, count]) => {

            cumulativeSolved += count;

            return {
                date,
                solved: cumulativeSolved
            };
        }
    );

    return (

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-slate-800">
                        Solved Problems Progress
                    </h2>

                    <p className="text-slate-500 mt-1">
                        Track your cumulative solved problems
                    </p>

                </div>

                

            </div>

            {/* Chart */}

            <div className="w-full h-56">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart
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

                        {/* Area */}

                        <Area
                            type="monotone"
                            dataKey="solved"
                            stroke="#16a34a"
                            fill="#86efac"
                            fillOpacity={0.5}
                            strokeWidth={3}
                            animationDuration={1500}
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default SolvedProblemsChart;