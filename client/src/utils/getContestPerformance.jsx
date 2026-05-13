const getContestPerformance = (
    contests
) => {

    return contests
        .slice(-10)
        .map((contest) => ({

            name:
                contest.contestName.slice(0, 12),

            change:
                contest.ratingChange

        }));
};

export default getContestPerformance;