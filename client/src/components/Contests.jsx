import axios from "axios";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import ContestActivity from "./ContestActivity";
import ContestCard from "./ContestCards";
import RatingCharts from "./RatingCharts";

const Contests = () => {
    const [contestData, setConstestData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const contestsPerPage = 10;
    const indexOfLastContest = currentPage * contestsPerPage;
    const indexOfFirstContest = indexOfLastContest - contestsPerPage;

    useEffect(() => {
        const fetchContestData = async () => {
            try{
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/api/users/codeforces-contests",{
                    headers : {
                        Authorization : `Bearer ${token}`
                    }})
                
                setConstestData(response.data.contests);
            }catch(err){
                console.error(err);
            }finally{
                setLoading(false);
            }
            
        }
        fetchContestData();
    }, [])

    const filteredContests = contestData.filter((contest) => 
        contest.contestName.toLowerCase().includes(search.toLowerCase())
    );
     const currentContests = filteredContests.slice(
        indexOfFirstContest,
        indexOfLastContest
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

           <ContestCard contests = {contestData}/>

           <div className="grid grid-cols-1 gap-4 mt-6">

                    <RatingCharts contests={contestData} />

            </div>
           <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 mt-6 mb-6">   

               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Search Input */}

        <input
            type="text"
            placeholder="Search Contests..."
            className="w-full md:w-150 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        {/* Results Count */}

        <p className="text-slate-500 text-sm font-medium">

            Showing

            <span className="text-slate-800 font-semibold mx-1">
                {filteredContests.length}
            </span>

            Contests

        </p>

    </div>

</div>

       
        <ContestActivity contests = {currentContests} /> 


        
<div className="flex items-center justify-center gap-3 mt-6">

    <button
        onClick={() =>
            setCurrentPage(currentPage - 1)
        }
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-xl bg-white border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
    >
        Previous
    </button>

    <span className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold">

        {currentPage}

    </span>

    <button
        onClick={() =>
            setCurrentPage(currentPage + 1)
        }
        disabled={
            indexOfLastContest >=
            filteredContests.length
        }
        className="px-4 py-2 rounded-xl bg-white border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
    >
        Next
    </button>

</div>
        </div>
    )
)
}



export default Contests;