import { useEffect, useState } from "react";
import api from "../api/axios";

const useContests = () => {

    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchContests = async () => {

            try {

                const response = await api.get(
                    "/users/codeforces-contests"
                );

                setContests(response.data.contests);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchContests();

    }, []);

    return {
        contests,
        loading
    };
};

export default useContests;