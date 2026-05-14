import { useEffect, useState } from "react";
import api from "../api/axios";
import useUser from "./useUser";

const useContests = () => {

    const {
        user,
        loading: userLoading
    } = useUser();

    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        // wait for user fetch
        if(userLoading) return;

        const fetchContests = async () => {

            if(!user?.codeforcesUsername){

                setError(
                    "Connect your Codeforces account in Settings"
                );

                setLoading(false);

                return;
            }

            try{

                const response =
                    await api.get(
                        "/users/codeforces-contests"
                    );

                setContests(
                    response.data.contests || []
                );

            }

            catch(error){

                if(

                    error.response?.status===400 ||

                    error.response?.status===404

                ){

                    setContests([]);
                }

                else{

                    setError(

                        error.response?.data?.message ||

                        "Failed to fetch contests"

                    );

                }

            }

            finally{

                setLoading(false);

            }

        };

        fetchContests();

    }, [

        user,

        userLoading

    ]);

    return {

        contests,

        loading,

        error

    };

};

export default useContests;