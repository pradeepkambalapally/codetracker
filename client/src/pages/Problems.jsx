import { useState, useEffect, useRef } from "react";

import SolvedProblems from "../components/tables/SolvedProblems";
import Loading from "../components/ui/Loading";
import SearchBar from "../components/ui/SearchBar";
import Pagination from "../components/ui/Pagination";

import useProblems from "../hooks/useProblems";
import useLeetcodeProblems from "../hooks/useLeetcodeProblems";

import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";
import PlatformFilter from "../components/ui/PlatformFilter";
import useUser from "../hooks/useUser";
import EmptyState from "../components/ui/EmptyState";

import useContests from "../hooks/useContests";
import useProfile from "../hooks/useProfile";
import useLeetcodeProfile from "../hooks/useLeetcodeProfile";

const Problems = () => {

    const {

        problems: codeforcesProblems = [],

        loading: cfLoading,

       

    } = useProblems();

    const {

        problems:
            leetcodeProblems = [],


    } = useLeetcodeProblems();

    const {

        profile,

      

    } = useProfile();
     const {

        profile:
            leetcodeProfile,


    } = useLeetcodeProfile();

    const {

        contests = [],

        

    } = useContests();

    const {

    user,

    loading:
        userLoading

} = useUser();
    

    const problems = [

    ...(codeforcesProblems || []),

    ...(leetcodeProblems || [])

].sort(

    (a, b) =>

        (b?.submissionTime || 0)
        -
        (a?.submissionTime || 0)

);

    const loading =

    userLoading ||

    cfLoading;

    const [

        search,

        setSearch

    ] = useState("");

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
    const searchedProblems =

    useSearch(

        problems || [],
        search,
        "problemName"

    );

const filteredProblems =

    platformFilter === "All"

    ?

    searchedProblems

    :

    searchedProblems.filter(

        (problem) =>

            problem.platform ===
            platformFilter

    );

    const {

        currentPage,

        setCurrentPage,

        currentItems = [],

        indexOfLastItem

    } = usePagination(

        filteredProblems || [],

        10

    );
useEffect(() => {

    setCurrentPage(1);

}, [

    search,

    platformFilter,

    setCurrentPage

]);


const hasCodeforcesData =
    profile?.handle ||
    (codeforcesProblems?.length ?? 0) > 0 ||
    (contests?.length ?? 0) > 0;

const hasLeetcodeData =
    leetcodeProfile?.username ||
    (leetcodeProblems?.length ?? 0) > 0;

const hasAnyPlatformData =
    hasCodeforcesData ||
    hasLeetcodeData;


    if (loading)
        return <Loading />;

    
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

            <div className="mb-6">

                <h1 className="
                    text-3xl
                    font-bold

                    text-slate-800
                    dark:text-white
                ">

                    Problems

                </h1>

                <p className="
                    mt-2

                    text-slate-500
                    dark:text-slate-400
                ">

                    Browse and track your solved problems

                </p>

            </div>

            <SearchBar

                search={search}

                setSearch={setSearch}

                placeholder="Search problems..."

                count={
                    (filteredProblems || []).length
                }

                label="problems"

            />
             <PlatformFilter

    platformFilter={
        platformFilter
    }

    setPlatformFilter={
        setPlatformFilter
    }

/>
            {

                currentItems.length > 0

                ?

                (

                    <SolvedProblems
                        problems={
                            currentItems || []
                        }
                    />

                )

                :

                (

                    <div className="
                        mt-8
                        p-10

                        rounded-3xl

                        bg-white
                        dark:bg-slate-800

                        border
                        border-slate-200
                        dark:border-slate-700

                        text-center

                        text-slate-500
                        dark:text-slate-400
                    ">

                        No problems found

                    </div>

                )

            }

            {

                filteredProblems.length > 10 &&

                <Pagination

                    currentPage={
                        currentPage
                    }

                    setCurrentPage={
                        setCurrentPage
                    }

                    indexOfLastItem={
                        indexOfLastItem
                    }

                    totalItems={
                        filteredProblems.length
                    }

                />

            }

        </div>
    );
};

export default Problems;