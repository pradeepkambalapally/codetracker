import { useState } from "react";

import SolvedProblems from "../components/tables/SolvedProblems";
import Loading from "../components/ui/Loading";
import SearchBar from "../components/ui/SearchBar";
import Pagination from "../components/ui/Pagination";
import ErrorMessage from "../components/ErrorMessage";
import useProblems from "../hooks/useProblems";
import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";

const Problems = () => {

    const {
        problems,
        loading,
        error
    } = useProblems();

    const [
        search,
        setSearch
    ] = useState("");

  

    const filteredProblems =
        useSearch(
            problems,
            search,
            "problemName"
        );

    

    const {

        currentPage,

        setCurrentPage,

        currentItems,

        indexOfLastItem

    } = usePagination(

        filteredProblems,

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
                search={
                    search
                }

                setSearch={
                    setSearch
                }

                placeholder=
                    "Search problems..."

                count={
                    filteredProblems.length
                }

                label=
                    "problems"
            />

        

            <SolvedProblems
                problems={
                    currentItems
                }
            />

            

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

        </div>
    );
};

export default Problems;