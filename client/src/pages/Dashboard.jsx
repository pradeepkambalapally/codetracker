import {
    useState, useEffect, useRef
} from "react";

import SolvedProblems from "../components/tables/SolvedProblems";
import DashboarCard from "../components/dashboard/DashboardCard";
import Loading from "../components/ui/Loading";
import RatingCharts from "../components/dashboard/RatingCharts";
import SolvedProblemsChart from "../components/dashboard/SolvedProblemsChart";
import PlatformFilter from "../components/ui/PlatformFilter";
import EmptyState from "../components/ui/EmptyState"

import useProblems from "../hooks/useProblems";
import useContests from "../hooks/useContests";
import useProfile from "../hooks/useProfile";
import useLeetcodeProblems from "../hooks/useLeetcodeProblems";
import useLeetcodeProfile from "../hooks/useLeetcodeProfile";
import useUser from "../hooks/useUser";

const Dashboard = () => {
    const {

    user,

    loading:
        userLoading

} = useUser();

    const {

        profile:
            leetcodeProfile,

        loading:
            leetcodeProfileLoading

    } = useLeetcodeProfile();

    const {

        problems = [],

        loading:
            problemsLoading

    } = useProblems();

    const {

        problems:
            leetcodeProblems = [],

        loading:
            leetcodeLoading

    } = useLeetcodeProblems();

    const {

        profile,

        loading:
            profileLoading,

    } = useProfile();

    const {

        contests = [],

        loading:
            contestsLoading

    } = useContests();

    const [

    platformFilter,

    setPlatformFilter

] = useState(

    user?.defaultPlatform ||

    "All"

);
const hasInitialized = useRef(false);
useEffect(() => {

    if (

        !hasInitialized.current &&

        user?.defaultPlatform

    ) {

        setPlatformFilter(

            user.defaultPlatform

        );

        hasInitialized.current = true;

    }

}, [user]);

    // MERGE PROBLEMS

    const allProblems = [

        ...(problems || []),

        ...(leetcodeProblems || [])

    ].sort(

        (a, b) =>

            (b?.submissionTime || 0)

            -

            (a?.submissionTime || 0)

    );

    // FILTER PROBLEMS

    const filteredProblems =

        platformFilter === "All"

        ?

        allProblems

        :

        allProblems.filter(

            (problem) =>

                problem.platform ===
                platformFilter

        );

    // FILTER CONTESTS

    const filteredContests =

        platformFilter === "Codeforces"

        ||

        platformFilter === "All"

        ?

        contests

        :

        [];

    // LOADING

    const loading =

           userLoading ||

    problemsLoading ||

    leetcodeLoading ||

    leetcodeProfileLoading ||

    profileLoading ||

    contestsLoading;


const hasCodeforcesData =
    profile?.handle ||
    (problems?.length ?? 0) > 0 ||
    (contests?.length ?? 0) > 0;

const hasLeetcodeData =
    leetcodeProfile?.username ||
    (leetcodeProblems?.length ?? 0) > 0;

const hasAnyPlatformData =
    hasCodeforcesData ||
    hasLeetcodeData;

    if (loading) {

        return <Loading />;

    }

    // ERROR

    

   if (!hasAnyPlatformData) {
    return (
        <EmptyState
            title="No Data Found"
            description="
                Connect your Codeforces or LeetCode account from the settings page to view analytics.
            "
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

            {/* PLATFORM FILTER */}

            <PlatformFilter

                platformFilter={
                    platformFilter
                }

                setPlatformFilter={
                    setPlatformFilter
                }

            />

            {/* MAIN DASHBOARD CARDS */}

            <DashboarCard

                problems={
                    filteredProblems || []
                }

                profileStats={
                    profile || {}
                }
                platformFilter={
    platformFilter
}
                leetcodeProfile={
                    leetcodeProfile || {}
                }

                contests={
                    filteredContests || []
                }

            />


            {/* CHARTS */}

            <div className={`
                grid
                grid-cols-1

                ${

                    platformFilter !== "LeetCode"

                    ?

                    "xl:grid-cols-2"

                    :

                    ""

                }

                gap-4
                mt-6
            `}>

                <SolvedProblemsChart

                    problems={
                        filteredProblems || []
                    }

                />

                {

                    platformFilter !== "LeetCode"

                    &&

                    <RatingCharts

                        contests={
                            (filteredContests || [])
                            .slice(0, 5)
                        }

                    />

                }

            </div>

            {/* RECENT PROBLEMS */}

            <div className="
                mt-6
                w-full
            ">

                <SolvedProblems

                    problems={
                        (filteredProblems || [])
                        .slice(0, 8)
                    }

                />

            </div>

        </div>

    );

};

export default Dashboard;