import { useEffect, useState } from "react";
import api from "../api/axios";
import useUser from "./useUser";

const useProblems = () => {

    const {

        user,

        loading:userLoading

    } = useUser();

    const [problems, setProblems] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        if(userLoading){

            return;

        }

        const fetchProblems = async () => {

            if (

                !user?.codeforcesUsername

            ) {

                setError(

                    "Connect your Codeforces account in Settings"

                );

                setLoading(false);

                return;

            }

            try {

                setLoading(true);

                const response =

                    await api.get(

                        "/users/codeforces"

                    );

                
                setProblems(

                    response.data.problems || []

                );

                setError("");

            }

            catch(error){

                console.log(error);

                setError(

                    error.response?.data?.message ||

                    "Failed to load problems"

                );

            }

            finally{

                setLoading(false);

            }

        };

        fetchProblems();

    }, [

        user,

        userLoading

    ]);

    return {

        problems,

        loading,

        error

    };

};

export default useProblems;