import { useEffect, useState } from "react";
import api from "../api/axios";

const useProblems = () => {

    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProblems = async () => {

            try {

           

                const response = await api.get(
                    "/users/codeforces"
                   
                );

                setProblems(response.data.submissions);

            } catch (error) {
                    setError("Failed to fetch problems");
                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchProblems();

    }, []);

    return {
        problems,
        loading,
        error
    };
};

export default useProblems;