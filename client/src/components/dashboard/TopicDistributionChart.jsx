import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const TopicDistributionChart = ({ chartData }) => {

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

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

            <h2 className="text-2xl font-bold text-slate-800 mb-2">

                Topic Distribution

            </h2>

            <p className="text-slate-500 text-sm mb-6">

                Topics you solve most frequently

            </p>

            <div className="flex items-center justify-center">

                <PieChart width={420} height={320}>

                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="42%"
                        cy="50%"
                        outerRadius={90}
                    >

                        {
                            chartData.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={
                                        COLORS[
                                            index % COLORS.length
                                        ]
                                    }
                                />

                            ))
                        }

                    </Pie>

                    <Tooltip />

                    <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                    />

                </PieChart>

            </div>

        </div>
    );
};

export default TopicDistributionChart;