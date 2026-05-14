import Loading from "../components/ui/Loading";
import { useState } from "react";
import ContestActivity from "../components/tables/ContestActivity";
import ContestCard from "../components/dashboard/ContestCards";
import RatingCharts from "../components/dashboard/RatingCharts";
import useContests from "../hooks/useContests";
import SearchBar from "../components/ui/SearchBar";
import Pagination from "../components/ui/Pagination";
import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";
import ErrorMessage from "../components/ErrorMessage";

const Contests = () => {

    const [search, setSearch] =
        useState("");

    const {
        contests,
        loading,
        error
    } = useContests();

    const filteredContests =
        useSearch(
            contests,
            search,
            "contestName"
        );

    const {
        currentPage,
        setCurrentPage,
        currentItems,
        indexOfLastItem
    } = usePagination(
        filteredContests,
        10
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

                    Contests

                </h1>

                <p className="
                    text-slate-500
                    dark:text-slate-400
                    mt-2
                ">

                    Analyze your competitive programming contest performance

                </p>

            </div>

           

            <ContestCard
                contests={
                    contests
                }
            />

            

            <div className="
                grid
                grid-cols-1
                gap-4
                mt-6
            ">

                <RatingCharts
                    contests={
                        contests
                    }
                />

            </div>

            

            <SearchBar
                search={
                    search
                }

                setSearch={
                    setSearch
                }

                placeholder=
                    "Search contests..."

                count={
                    filteredContests.length
                }

                label=
                    "contests"
            />

           

            <div className="mt-6">

                <ContestActivity
                    contests={
                        currentItems
                    }
                />

            </div>

           

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
                    filteredContests.length
                }
            />

        </div>
    );

};

export default Contests;