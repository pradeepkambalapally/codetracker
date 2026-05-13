const SearchBar = ({
    search,
    setSearch,
    placeholder,
    count,
    label
}) => {

    return (

        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 mb-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* Search Input */}

                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full md:max-w-xl border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                {/* Results Count */}

                <p className="text-slate-500 text-sm font-medium">

                    Showing

                    <span className="text-slate-800 font-semibold mx-1">

                        {count}

                    </span>

                    {label}

                </p>

            </div>

        </div>
    );
};

export default SearchBar;