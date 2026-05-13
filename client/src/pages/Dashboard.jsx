

import SolvedProblems from "../components/tables/SolvedProblems";
import DashboarCard from "../components/dashboard/DashboardCard";

import Loading from "../components/ui/Loading";
import RatingCharts from "../components/dashboard/RatingCharts";
import SolvedProblemsChart from "../components/dashboard/SolvedProblemsChart";
import useProblems from "../hooks/useProblems";
import useContests from "../hooks/useContests";
import useProfile from "../hooks/useProfile";

const Dashboard = () => {

    const {problems, loading }= useProblems();
    const {profileStats} = useProfile();
    const {contests} = useContests();




    return (

        loading ? (

            <Loading />

        ) : (

            <div className="flex-1 bg-slate-100 min-h-screen p-6 overflow-x-hidden">
                {/* Dashboard Header */}

                <div className="mb-6">

                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
                        Dashboard
                    </h1>

                    <p className="text-slate-500 mt-2 text-lg">
                        Track your competitive programming journey
                    </p>

                </div>

                {/* Summary Cards */}

                <DashboarCard
                    problems={problems}
                    profileStats={profileStats}
                    contests={contests}
                />

                {/* Charts Section */}

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">

                    <SolvedProblemsChart
                        problems={problems}
                    />

                    <RatingCharts
                        contests={contests.slice(0, 5)}
                    />

                </div>

                {/* Full Width Problems Table */}

                <div className="mt-6 w-full">

                    <SolvedProblems
                        problems={problems.slice(0, 8)}
                    />

                </div>

            </div>
        )
    );
};

export default Dashboard;