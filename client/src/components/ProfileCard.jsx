const ProfileCard = ({ profile }) => {

    return (

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden max-w-7xl mx-auto">

            {/* Banner */}

            <div className="h-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 relative">

                {/* Avatar */}

                <div className="absolute -bottom-8 left-5">

                    <div className="w-16 h-16 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-md">

                        {profile.handle?.charAt(0).toUpperCase()}

                    </div>

                </div>

            </div>

            {/* Content */}

            <div className="pt-12 px-5 pb-5">

                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    {/* Left */}

                    <div>

                        <h1 className="text-2xl font-bold text-slate-800">

                            {profile.handle}

                        </h1>

                        <div className="flex items-center gap-2 mt-2 flex-wrap">

                            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">

                                {profile.rank || "Unrated"}

                            </span>

                            <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">

                                Max: {profile.maxRank || "N/A"}

                            </span>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="flex gap-3">

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 min-w-[120px]">

                            <p className="text-slate-400 text-xs">

                                Contribution

                            </p>

                            <h2 className="text-xl font-bold text-slate-800 mt-1">

                                {profile.contribution ?? 0}

                            </h2>

                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 min-w-[120px]">

                            <p className="text-slate-400 text-xs">

                                Friend Of

                            </p>

                            <h2 className="text-xl font-bold text-slate-800 mt-1">

                                {profile.friendOfCount ?? 0}

                            </h2>

                        </div>

                    </div>

                </div>

                {/* Ratings */}

                <div className="grid grid-cols-3 gap-3 mt-5">

                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-3">

                        <p className="text-slate-400 text-xs">

                            Current Rating

                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 mt-1">

                            {profile.rating || "N/A"}

                        </h2>

                    </div>

                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-3">

                        <p className="text-slate-400 text-xs">

                            Max Rating

                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 mt-1">

                            {profile.maxRating || "N/A"}

                        </h2>

                    </div>

                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-3">

                        <p className="text-slate-400 text-xs">

                            Organization

                        </p>

                        <h2 className="text-base font-bold text-slate-800 mt-1 truncate">

                            {profile.organization || "N/A"}

                        </h2>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProfileCard;