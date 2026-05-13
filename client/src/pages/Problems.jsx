import { useState } from "react";

import SolvedProblems from "../components/tables/SolvedProblems";
import Loading from "../components/ui/Loading";
import SearchBar from "../components/ui/SearchBar";
import Pagination from "../components/ui/Pagination";

import useProblems from "../hooks/useProblems";
import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";

const Problems = () => {

    const { problems, loading } = useProblems();

    const [search, setSearch] = useState("");

    // Search Hook

    const filteredProblems = useSearch(
        problems,
        search,
        "problemName"
    );

    // Pagination Hook

    const {
        currentPage,
        setCurrentPage,
        currentItems,
        indexOfLastItem
    } = usePagination(
        filteredProblems,
        10
    );

    return (

        loading ? (

            <Loading />

        ) : (

            <div className="flex-1 bg-slate-100 min-h-screen p-6 overflow-x-hidden">

                {/* Header */}

                <div className="mb-6">

                    <h1 className="text-3xl font-bold text-slate-800">

                        Problems

                    </h1>

                    <p className="text-slate-500 mt-2">

                        Browse and track your solved problems

                    </p>

                </div>

                {/* Search Bar */}

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    placeholder="Search problems..."
                    count={filteredProblems.length}
                    label="problems"
                />

                {/* Problems Table */}

                <SolvedProblems
                    problems={currentItems}
                />

                {/* Pagination */}

                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    indexOfLastItem={indexOfLastItem}
                    totalItems={filteredProblems.length}
                />

            </div>
        )
    );
};

export default Problems;