import { useEffect, useState } from "react";
import api from "../api/axios";

const useContests = () => {

    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchContests = async () => {

            try {

                const response = await api.get(
                    "/users/codeforces-contests"
                );

                setContests(response.data.contests);

            } catch (error) {
                setError("Failed to fetch contests");
                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchContests();

    }, []);

    return {
        contests,
        loading,
        error
    };
};

export default useContests;