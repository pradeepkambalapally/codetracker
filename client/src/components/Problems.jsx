import axios from "axios";
import { useState, useEffect } from "react";
import SolvedProblems from "./SolvedProblems";
const Problems = () =>{
    const [problems, setProblems] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const fetchProblems = async () => {
        try{
            const token = localStorage.getItem("token");
            
            const response = await axios.get("http://localhost:3000/api/users/codeforces",{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })

            setProblems(response.data.submissions);
        }catch (error) {

                console.error("Error fetching dashboard data:", error);

            }
        }
        
        fetchProblems();
    }, []);

    const filteredProblems = problems.filter((problem) =>
    problem.problemName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    return (

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

        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 mb-6">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Search Input */}

        <input
            type="text"
            placeholder="Search problems..."
            className="w-full md:w-150 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        {/* Results Count */}

        <p className="text-slate-500 text-sm font-medium">

            Showing

            <span className="text-slate-800 font-semibold mx-1">
                {filteredProblems.length}
            </span>

            problems

        </p>

    </div>

</div>

        {/* Problems Table */}

        <SolvedProblems
            problems={filteredProblems}
        />

    </div>
)
}

export default Problems;
