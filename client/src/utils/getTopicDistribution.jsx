const getTopicDistribution = (
    problems
) => {

    const tagCount = {};

    problems.forEach((problem) => {

        problem.tags.forEach((tag) => {

            tagCount[tag] =
                (tagCount[tag] || 0) + 1;

        });

    });

    return Object.entries(tagCount)

        .map(([name, value]) => ({
            name,
            value
        }))

        .sort((a, b) => b.value - a.value)

        .slice(0, 10);
};

export default getTopicDistribution;