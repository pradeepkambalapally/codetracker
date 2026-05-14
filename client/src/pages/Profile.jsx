import Loading from "../components/ui/Loading";

import SolvedProblems from "../components/tables/SolvedProblems";
import ContestActivity from "../components/tables/ContestActivity";

import TopicDistributionChart from "../components/dashboard/TopicDistributionChart";
import ContestPerformanceChart from "../components/dashboard/ContestPerformanceChart";

import ProfileCard from "../components/ui/ProfileCard";

import useProfile from "../hooks/useProfile";
import useProblems from "../hooks/useProblems";
import useContests from "../hooks/useContests";

import getTopicDistribution from "../utils/getTopicDistribution";
import getContestPerformance from "../utils/getContestPerformance";

import ErrorMessage from "../components/ErrorMessage";

const Profile = () => {

    const {

        profile = {},

        error

    } = useProfile();

    const {

        problems = [],

        loading

    } = useProblems();

    const {

        contests = []

    } = useContests();

    const chartData =

        getTopicDistribution(
            problems || []
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

            <ProfileCard
                profile={profile}
            />

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

                <ContestPerformanceChart
                    contestChartData={
                        contestChartData || []
                    }
                />

                {

                    problems.length > 0

                    ?

                    (

                        <SolvedProblems

                            problems={
                                problems.slice(
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