import {
    CheckCircle2,
    ArrowRight,
    ExternalLink
} from "lucide-react";

const SolvedProblems = ({ problems }) => {

    return (

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-3">

                    <div className="bg-blue-100 p-3 rounded-2xl">

                        <CheckCircle2
                            className="text-blue-600"
                            size={22}
                        />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold text-slate-800">
                            Solved Problems
                        </h2>

                        <p className="text-slate-500 text-sm mt-1">
                            Your latest accepted submissions
                        </p>

                    </div>

                </div>

                {/* View All */}

                <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">

                    View All

                    <ArrowRight size={16} />

                </button>

            </div>

            {/* Table */}

            <div className="overflow-x-auto">

                <table className="w-full min-w-[900px]">

                    {/* Table Head */}

                    <thead>

                        <tr className="border-b border-slate-200 text-left">

                            <th className="pb-4 text-sm font-semibold text-slate-500">
                                #
                            </th>

                            <th className="pb-4 text-sm font-semibold text-slate-500">
                                Problem
                            </th>

                            <th className="pb-4 text-sm font-semibold text-slate-500">
                                Contest
                            </th>

                            <th className="pb-4 text-sm font-semibold text-slate-500">
                                Tags
                            </th>

                            <th className="pb-4 text-sm font-semibold text-slate-500">
                                Rating
                            </th>

                            <th className="pb-4 text-sm font-semibold text-slate-500">
                                Language
                            </th>

                            <th className="pb-4 text-sm font-semibold text-slate-500">
                                Solved At
                            </th>

                            <th className="pb-4 text-sm font-semibold text-slate-500">
                                Action
                            </th>

                        </tr>

                    </thead>

                    {/* Table Body */}

                    <tbody>

                        {
                            problems.slice(0, 8).map((problem, index) => (

                                <tr
                                    key={index}
                                    className="border-b border-slate-100 last:border-none hover:bg-slate-50 transition-colors"
                                >

                                    {/* Index */}

                                    <td className="py-3 text-slate-500 font-medium">

                                        {index + 1}

                                    </td>

                                    {/* Problem */}

                                    <td className="py-3 pr-6">

                                        <p className="font-semibold text-slate-800">

                                            {problem.problemName}

                                        </p>

                                    </td>

                                    {/* Contest */}

                                    <td className="py-3">

                                        <span className="text-slate-600 font-medium">

                                            {problem.contestId}
                                            {problem.problemIndex}

                                        </span>

                                    </td>

                                    {/* Tags */}

                                    <td className="py-3">

                                        <div className="flex flex-wrap gap-2">

                                            {
                                                problem.tags
                                                    .slice(0, 2)
                                                    .map((tag, idx) => (

                                                        <span
                                                            key={idx}
                                                            className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                                                        >

                                                            {tag}

                                                        </span>
                                                    ))
                                            }

                                        </div>

                                    </td>

                                    {/* Rating */}

                                    <td className="py-3">

                                        <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">

                                            {problem.rating ? problem.rating : "-"}

                                        </span>

                                    </td>

                                    {/* Language */}

                                    <td className="py-3 text-slate-600 text-sm font-medium whitespace-nowrap">

                                        {problem.programmingLanguage}

                                    </td>

                                    {/* Solved At */}

                                    <td className="py-4 text-slate-600 text-sm whitespace-nowrap">

                                        {problem.submissionTime}

                                    </td>

                                    {/* Action */}

                                    <td className="py-3">

                                        <a
                                            href={problem.problemLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
                                        >

                                            <ExternalLink
                                                size={16}
                                                className="text-slate-600"
                                            />

                                        </a>

                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default SolvedProblems;