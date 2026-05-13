import { useState } from "react";

const usePagination = (data, itemsPerPage) => {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem =
        currentPage * itemsPerPage;

    const indexOfFirstItem =
        indexOfLastItem - itemsPerPage;

    const currentItems = data.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    return {
        currentPage,
        setCurrentPage,
        currentItems,
        indexOfLastItem
    };
};

export default usePagination;