const SearchBar = ({
    search,
    setSearch,
    placeholder,
    count,
    label
}) => {

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            p-4

            rounded-3xl

            shadow-sm

            border
            border-slate-200
            dark:border-slate-700
            mt-5
            mb-6
        ">

            <div className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between

                gap-4
            ">

               

                <input

                    type="text"

                    placeholder={
                        placeholder
                    }

                    value={
                        search
                    }

                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }

                    className="

                    w-full
                    md:max-w-xl

                    px-4
                    py-3

                    rounded-2xl

                    border
                    border-slate-200
                    dark:border-slate-600

                    bg-white
                    dark:bg-slate-700

                    text-slate-800
                    dark:text-white

                    placeholder:text-slate-400
                    dark:placeholder:text-slate-400

                    outline-none

                    focus:ring-2
                    focus:ring-blue-500

                    transition-colors
                    "
                />

                

                <p className="
                    text-sm
                    font-medium

                    text-slate-500
                    dark:text-slate-400
                ">

                    Showing

                    <span className="
                        mx-1
                        font-semibold

                        text-slate-800
                        dark:text-white
                    ">

                        {count}

                    </span>

                    {label}

                </p>

            </div>

        </div>
    );
};

export default SearchBar;