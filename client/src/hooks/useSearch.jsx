const useSearch = (
    data,
    search,
    key
) => {

    return data.filter((item) =>
        item[key]
            .toLowerCase()
            .includes(search.toLowerCase())
    );
};

export default useSearch;