import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const ContestPerformanceChart = ({ contestChartData }) => {

    return (

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

            <h2 className="text-2xl font-bold text-slate-800 mb-2">

                Contest Performance

            </h2>

            <p className="text-slate-500 text-sm mb-6">

                Your rating progress over contests

            </p>

            <div className="h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={contestChartData}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#e2e8f0"
                        />

                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="change"
                            fill="#3b82f6"
                            radius={[8, 8, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default ContestPerformanceChart;