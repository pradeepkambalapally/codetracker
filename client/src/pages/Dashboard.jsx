import SolvedProblems from "../components/tables/SolvedProblems";
import DashboarCard from "../components/dashboard/DashboardCard";

import Loading from "../components/ui/Loading";
import RatingCharts from "../components/dashboard/RatingCharts";
import SolvedProblemsChart from "../components/dashboard/SolvedProblemsChart";

import useProblems from "../hooks/useProblems";
import useContests from "../hooks/useContests";
import useProfile from "../hooks/useProfile";
import useLeetcodeProblems from "../hooks/useLeetcodeProblems";

import ErrorMessage from "../components/ErrorMessage";

const Dashboard = () => {

    const {
        problems = [],
        loading: problemsLoading
    } = useProblems();

    const {
        problems: leetcodeProblems = [],
        loading: leetcodeLoading
    } = useLeetcodeProblems();

    const allProblems = [

    ...(problems || []),

    ...(leetcodeProblems || [])

].sort(

    (a, b) =>

        (b?.submissionTime || 0)
        -
        (a?.submissionTime || 0)

);

    const {
        profile,
        loading: profileLoading,
        error
    } = useProfile();

    const {
        contests = [],
        loading: contestsLoading
    } = useContests();

    const loading =

        problemsLoading ||

        leetcodeLoading ||

        profileLoading ||

        contestsLoading;

    if (loading) {

        return <Loading />;

    }

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
                    tracking-tight

                    text-slate-800
                    dark:text-white
                ">

                    Dashboard

                </h1>

                <p className="
                    mt-2
                    text-lg

                    text-slate-500
                    dark:text-slate-400
                ">

                    Track your competitive programming journey

                </p>

            </div>

            <DashboarCard

                problems={
                    allProblems
                }

                profileStats={
                    profile || {}
                }

                contests={
                    contests || []
                }

            />

            <div className="
                grid
                grid-cols-1
                xl:grid-cols-2
                gap-4
                mt-6
            ">

                <SolvedProblemsChart
                    problems={
                        allProblems
                    }
                />

                <RatingCharts
                    contests={
                        (contests || [])
                        .slice(0, 5)
                    }
                />

            </div>

            <div className="
                mt-6
                w-full
            ">

                <SolvedProblems
                    problems={
                        allProblems
                        .slice(0, 8)
                    }
                />

            </div>

        </div>

    );

};

export default Dashboard;