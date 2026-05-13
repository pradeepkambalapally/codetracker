import { useEffect, useState } from "react";
import api from "../api/axios";

const useProblems = () => {

    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProblems = async () => {

            try {

           

                const response = await api.get(
                    "/users/codeforces"
                   
                );

                setProblems(response.data.submissions);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchProblems();

    }, []);

    return {
        problems,
        loading
    };
};

export default useProblems;