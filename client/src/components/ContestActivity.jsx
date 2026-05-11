import {
    Trophy,
    ArrowRight,
    TrendingUp,
    TrendingDown
} from "lucide-react";

const ContestActivity = ({ contests }) => {

    return (

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-3">

                    <div className="bg-purple-100 p-3 rounded-2xl">

                        <Trophy
                            className="text-purple-600"
                            size={22}
                        />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold text-slate-800">
                            Recent Contest Activity
                        </h2>

                        <p className="text-slate-500 text-sm mt-1">
                            Your latest Codeforces contests
                        </p>

                    </div>

                </div>

                {/* View All */}

                <button className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors">

                    View All

                    <ArrowRight size={16} />

                </button>

            </div>

            {/* Contest List */}

            <div className="space-y-4">

                {
                    contests.slice(0, 5).map((contest, index) => (

                        <div
                            key={index}
                            className="flex items-center justify-between border-b border-slate-100 last:border-none pb-4 hover:bg-slate-50 rounded-2xl px-3 transition-colors"
                        >

                            {/* Contest Info */}

                            <div className="pr-4">

                                <h3 className="font-semibold text-slate-800 line-clamp-1">

                                    {contest.contestName}

                                </h3>

                                <p className="text-slate-500 text-sm mt-1">

                                    Rank #{contest.rank}

                                </p>

                            </div>

                            {/* Rating Change */}

                            <div
                                className={`flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${
                                    contest.ratingChange > 0
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                }`}
                            >

                                {
                                    contest.ratingChange > 0
                                        ? (
                                            <TrendingUp size={14} />
                                        )
                                        : (
                                            <TrendingDown size={14} />
                                        )
                                }

                                {
                                    contest.ratingChange > 0
                                        ? `+${contest.ratingChange}`
                                        : contest.ratingChange
                                }

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default ContestActivity;