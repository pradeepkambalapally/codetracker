import { useEffect, useState } from "react";

import api from "../api/axios";

const useActivityHeatmap = () => {

    const [heatmapData, setHeatmapData] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const response =
                    await api.get(
                        "/users/activity-heatmap"
                    );

                setHeatmapData(
                    response.data.heatmapData || []
                );

            }

            catch (error) {

                console.log(error);

            }

            finally {

                setLoading(false);

            }

        };

        fetchData();

    }, []);

    return {

        heatmapData,
        loading

    };

};

export default useActivityHeatmap;