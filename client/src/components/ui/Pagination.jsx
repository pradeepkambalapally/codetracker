const Pagination = ({
    currentPage,
    setCurrentPage,
    indexOfLastItem,
    totalItems
}) => {

    return (

        <div className="
            flex
            items-center
            justify-center
            gap-3
            mt-6
        ">

           

            <button

                onClick={() =>
                    setCurrentPage(
                        currentPage - 1
                    )
                }

                disabled={
                    currentPage === 1
                }

                className="

                px-4
                py-2

                rounded-xl

                bg-white
                dark:bg-slate-800

                text-slate-700
                dark:text-white

                border
                border-slate-200
                dark:border-slate-700

                disabled:opacity-50
                disabled:cursor-not-allowed

                hover:bg-slate-100
                dark:hover:bg-slate-700

                transition-colors
                "
            >

                Previous

            </button>

           

            <span className="
                px-4
                py-2

                rounded-xl

                bg-blue-600
                dark:bg-blue-500

                text-white
                font-semibold
            ">

                {currentPage}

            </span>

            

            <button

                onClick={() =>
                    setCurrentPage(
                        currentPage + 1
                    )
                }

                disabled={
                    indexOfLastItem >=
                    totalItems
                }

                className="

                px-4
                py-2

                rounded-xl

                bg-white
                dark:bg-slate-800

                text-slate-700
                dark:text-white

                border
                border-slate-200
                dark:border-slate-700

                disabled:opacity-50
                disabled:cursor-not-allowed

                hover:bg-slate-100
                dark:hover:bg-slate-700

                transition-colors
                "
            >

                Next

            </button>

        </div>
    );
};

export default Pagination;