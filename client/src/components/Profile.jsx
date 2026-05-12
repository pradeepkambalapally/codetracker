
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import SolvedProblems from "./SolvedProblems";
import ContestActivity from "./ContestActivity";
import TopicDistributionChart from "./TopicDistributionChart";
import ContestPerformanceChart from "./ContestPerformanceChart";
import ProfileCard from "./ProfileCard";
const Profile = () => {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [problems, setProblems] = useState([]);
    const [contests, setContests] = useState([]);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get(
                    "http://localhost:3000/api/users/codeforces-profile-stats",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                  const problemsResponse = await axios.get(
                    "http://localhost:3000/api/users/codeforces",
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

                setProblems(problemsResponse.data.submissions)
                setContests(contestsResponse.data.contests)
                setProfile(response.data.stats);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchProfile();

    }, []);

const tagCount = {};

problems.forEach((problem) => {

    problem.tags.forEach((tag) => {

        tagCount[tag] =
            (tagCount[tag] || 0) + 1;

    });

});
const chartData = Object.entries(tagCount)

    .map(([name, value]) => ({
        name,
        value
    }))

    .sort((a, b) => b.value - a.value)

    .slice(0, 10);
  
const contestChartData = contests
    .slice(-10)
    .map((contest) => ({
        name: contest.contestName.slice(0, 12),
        change: contest.ratingChange
    }));

    return (

        loading ? (

            <Loading />

        ) : (

            <div className="flex-1 bg-slate-100 min-h-screen p-6 overflow-x-hidden">

                {/* Page Header */}

                <div className="mb-6">

                    <h1 className="text-3xl font-bold text-slate-800">
                        Profile
                    </h1>

                    <p className="text-slate-500 mt-2">
                        View your competitive programming profile and statistics
                    </p>

                </div>

               
          <ProfileCard profile={profile} />
<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-6 mt-6">

    <TopicDistributionChart
        chartData={chartData}
    />

    <ContestPerformanceChart
        contestChartData={contestChartData}
    />

    <SolvedProblems
        problems={problems.slice(0, 5)}
    />
    <ContestActivity
        contests={contests.slice(0, 5)}
    />
    
</div>
     


            </div>
        )
    );
};

export default Profile;