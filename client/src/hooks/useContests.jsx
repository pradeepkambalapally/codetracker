import { useEffect, useState } from "react";

import api from "../api/axios";
import useUser from "./useUser";

const useContests = () => {

    const {
        user,
        loading: userLoading
    } = useUser();

    const [contests, setContests] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        if (userLoading) return;

        const fetchContests = async () => {

            try {

                setLoading(true);

                setError("");

                if (!user) {

                    setContests([]);

                    setError(
                        "User not found"
                    );

                    return;

                }

                if (!user?.codeforcesUsername) {

                    setContests([]);

                    setError(
                        "Connect your Codeforces account in Settings"
                    );

                    return;

                }

                const response =
                    await api.get(
                        "/users/codeforces-contests"
                    );

                if (

                    !response ||

                    !response.data

                ) {

                    setContests([]);

                    setError(
                        "Invalid server response"
                    );

                    return;

                }

                const contestsData =
                    response.data.contests || [];

                if (

                    !Array.isArray(
                        contestsData
                    )

                ) {

                    setContests([]);

                    setError(
                        "Invalid contests data"
                    );

                    return;

                }

                setContests(
                    contestsData
                );

                // IMPORTANT:
                // no contests is NOT an error

            }

            catch (error) {

                console.log(error);

                setContests([]);

                if (

                    error.response?.status === 401

                ) {

                    setError(
                        "Unauthorized access"
                    );

                }

                else if (

                    error.response?.status === 404

                ) {

                    // no contests found

                    setError("");

                }

                else if (

                    error.response?.status === 400

                ) {

                    setError("");

                }

                else if (

                    error.code === "ERR_NETWORK"

                ) {

                    setError(
                        "Network error"
                    );

                }

                else {

                    setError(

                        error.response?.data?.message ||

                        "Failed to fetch contests"

                    );

                }

            }

            finally {

                setLoading(false);

            }

        };

        fetchContests();

    }, [

        user,
        userLoading

    ]);

    return {

        contests:
            Array.isArray(contests)
            ? contests
            : [],

        loading,

        error

    };

};

export default useContests;