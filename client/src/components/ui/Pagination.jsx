const Pagination = ({
    currentPage,
    setCurrentPage,
    indexOfLastItem,
    totalItems
}) => {

    return (

        <div className="flex items-center justify-center gap-3 mt-6">

            {/* Previous */}

            <button
                onClick={() =>
                    setCurrentPage(currentPage - 1)
                }
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
            >

                Previous

            </button>

            {/* Current Page */}

            <span className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold">

                {currentPage}

            </span>

            {/* Next */}

            <button
                onClick={() =>
                    setCurrentPage(currentPage + 1)
                }
                disabled={
                    indexOfLastItem >= totalItems
                }
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
            >

                Next

            </button>

        </div>
    );
};

export default Pagination;