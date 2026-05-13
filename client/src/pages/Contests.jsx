
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


const Contests = () => {
    
    const [search, setSearch] = useState("");

    const { contests, loading } = useContests();
    

    const filteredContests = useSearch(
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
    return (
    loading ? < Loading /> : (
        <div className="flex-1 bg-slate-100 min-h-screen p-6 overflow-x-hidden">
             <div className="mb-6">

            <h1 className="text-3xl font-bold text-slate-800">
                Contests
            </h1>

            <p className="text-slate-500 mt-2">
               Analyze your competitive programming contest performance
            </p>

           </div>

           <ContestCard contests = {contests}/>

           <div className="grid grid-cols-1 gap-4 mt-6">

                    <RatingCharts contests={contests} />

            </div>
         <SearchBar
    search={search}
    setSearch={setSearch}
    placeholder="Search contests..."
    count={filteredContests.length}
    label="contests"
/>

       
        <div className="mt-6">
            <ContestActivity contests={currentItems} />
        </div>

        <Pagination
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    indexOfLastItem={indexOfLastItem}
    totalItems={filteredContests.length}
/>
        </div>
    )
)
}



export default Contests;