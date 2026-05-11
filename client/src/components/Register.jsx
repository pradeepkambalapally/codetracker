import { useEffect, useState } from "react";
import axios from "axios";

import SolvedProblems from "./SolvedProblems";
import Card from "./Card";
import Loading from "./Loading";
import RatingCharts from "./RatingCharts";
import SolvedProblemsChart from "./SolvedProblemsChart";

const Dashboard = () => {

    const [problems, setProblems] = useState([]);
    const [profileStats, setProfileStats] = useState({});
    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                const token = localStorage.getItem("token");

                const problemsResponse = await axios.get(
                    "http://localhost:3000/api/users/codeforces",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const profileResponse = await axios.get(
                    "http://localhost:3000/api/users/codeforces-profile-stats",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const contestsResponse = await axios.get(
                    "http://localhost:3000/api/users/codeforces-contests",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setProblems(problemsResponse.data.submissions);
                setProfileStats(profileResponse.data.stats);
                setContests(contestsResponse.data.contests);

            } catch (error) {

                console.error("Error fetching dashboard data:", error);

            } finally {

                setLoading(false);

            }
        };

        fetchDashboardData();

    }, []);

    return (

        loading ? (

            <Loading />

        ) : (

            <div className="flex-1 bg-slate-100 min-h-screen p-8">

                {/* Dashboard Header */}

                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
                        Dashboard
                    </h1>

                    <p className="text-slate-500 mt-2 text-lg">
                        Track your competitive programming journey
                    </p>

                </div>

                {/* Summary Cards */}

                <Card
                    problems={problems}
                    profileStats={profileStats}
                    contests={contests}
                />

                {/* Charts Row */}

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

                    {/* Solved Problems Chart */}

                    <SolvedProblemsChart
                        problems={problems}
                    />

                    {/* Rating Progress Chart */}

                    <RatingCharts
                        contests={contests}
                    />

                </div>

                {/* Full Width Problems Table */}

                <div className="mt-6">

                    <SolvedProblems
                        problems={problems.slice(0, 5)}
                    />

                </div>

            </div>
        )
    );
};

export default Dashboard;