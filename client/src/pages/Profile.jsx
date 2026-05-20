import Loading from "../components/ui/Loading";

import SolvedProblems from "../components/tables/SolvedProblems";
import ContestActivity from "../components/tables/ContestActivity";

import TopicDistributionChart from "../components/dashboard/TopicDistributionChart";
import ContestPerformanceChart from "../components/dashboard/ContestPerformanceChart";

import ProfileCard from "../components/ui/ProfileCard";
import LeetcodeProfileCard from "../components/ui/LeetcodeProfileCard";

import useProfile from "../hooks/useProfile";
import useProblems from "../hooks/useProblems";
import useContests from "../hooks/useContests";
import useLeetcodeProfile from "../hooks/useLeetcodeProfile";
import useLeetcodeProblems from "../hooks/useLeetcodeProblems";
import useActivityHeatmap from "../hooks/useActivityHeatmap";

import getTopicDistribution from "../utils/getTopicDistribution";
import getContestPerformance from "../utils/getContestPerformance";

import ErrorMessage from "../components/ErrorMessage";
import ActivityHeatmap from "../components/dashboard/ActivityHeatmap";
import useUser from "../hooks/useUser";

const Profile = () => {

    const {

        heatmapData,

        loading:
            heatmapLoading

    } = useActivityHeatmap();

    const {

    user

} = useUser();

    const {

        profile = {},

        loading:
            profileLoading,

        error

    } = useProfile();

    const {

        profile:
            leetcodeProfile = {},

        loading:
            leetcodeProfileLoading

    } = useLeetcodeProfile();

    const {

        problems:
            leetcodeProblems = [],

        loading:
            leetcodeProblemsLoading

    } = useLeetcodeProblems();

    const {

        problems = [],

        loading:
            problemsLoading

    } = useProblems();

    const {

        contests = [],

        loading:
            contestsLoading

    } = useContests();

    // COMBINED LOADING

    const loading =

        profileLoading ||

        leetcodeProfileLoading ||

        problemsLoading ||

        leetcodeProblemsLoading ||

        contestsLoading ||

        heatmapLoading;

    // MERGED PROBLEMS

    const allProblems = [

        ...(problems || []),

        ...(leetcodeProblems || [])

    ].sort(

        (a, b) =>

            (b?.submissionTime || 0)

            -

            (a?.submissionTime || 0)

    );

    const filteredProblems =

    user?.defaultPlatform === "Codeforces"

    ?

    allProblems.filter(

        (problem) =>

            problem.platform ===
            "Codeforces"

    )

    :

    user?.defaultPlatform === "LeetCode"

    ?

    allProblems.filter(

        (problem) =>

            problem.platform ===
            "LeetCode"

    )

    :

    allProblems;

    // CHART DATA

    const chartData =

        getTopicDistribution(
            allProblems || []
        );

    const contestChartData =

        getContestPerformance(
            contests || []
        );

    if (loading)
        return <Loading />;

    if (error) {

        return (

            <ErrorMessage
                error={error}
            />

        );

    }

    return (

        <div className="
            flex-1
            min-h-screen

            p-6

            overflow-x-hidden

            bg-slate-100
            dark:bg-slate-900

            transition-colors
        ">

            {/* HEADER */}

            <div className="mb-6">

                <h1 className="
                    text-3xl
                    font-bold

                    text-slate-800
                    dark:text-white
                ">

                    Profile

                </h1>

                <p className="
                    mt-2

                    text-slate-500
                    dark:text-slate-400
                ">

                    View your competitive programming profile and statistics

                </p>

            </div>

            {/* PROFILE CARDS */}

            <div className="
                space-y-6
            ">

                <ProfileCard
                    profile={profile}
                />

                <LeetcodeProfileCard
                    profile={leetcodeProfile}
                />

                <ActivityHeatmap
                    heatmapData={heatmapData}
                />

            </div>

            {/* CHARTS */}

            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
                mt-6
            ">

                <TopicDistributionChart
                    chartData={
                        chartData || []
                    }
                />

                {

                    contests.length > 0

                    ?

                    (

                        <ContestPerformanceChart

                            contestChartData={
                                contestChartData || []
                            }

                        />

                    )

                    :

                    (

                        <div className="
                            p-8

                            rounded-3xl

                            text-center

                            bg-white
                            dark:bg-slate-800

                            border
                            border-slate-200
                            dark:border-slate-700

                            text-slate-500
                            dark:text-slate-400
                        ">

                            No contest performance data available

                        </div>

                    )

                }

                {/* RECENT PROBLEMS */}

                {

                    allProblems.length > 0

                    ?

                    (

                        <SolvedProblems

                            problems={
                                filteredProblems.slice(
                                    0,
                                    5
                                )
                            }

                        />

                    )

                    :

                    (

                        <div className="
                            p-8

                            rounded-3xl

                            text-center

                            bg-white
                            dark:bg-slate-800

                            border
                            border-slate-200
                            dark:border-slate-700

                            text-slate-500
                            dark:text-slate-400
                        ">

                            No solved problems available

                        </div>

                    )

                }

                {/* CONTEST HISTORY */}

                {

                    contests.length > 0

                    ?

                    (

                        <ContestActivity

                            contests={
                                contests.slice(
                                    0,
                                    5
                                )
                            }

                        />

                    )

                    :

                    (

                        <div className="
                            p-8

                            rounded-3xl

                            text-center

                            bg-white
                            dark:bg-slate-800

                            border
                            border-slate-200
                            dark:border-slate-700

                            text-slate-500
                            dark:text-slate-400
                        ">

                            No contest history available

                        </div>

                    )

                }

            </div>

        </div>

    );

};

export default Profile;