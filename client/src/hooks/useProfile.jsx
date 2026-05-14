import { useEffect, useState } from "react";

import api from "../api/axios";
import useUser from "./useUser";

const useProfile = () => {

    const {
        user,
        loading:userLoading
    } = useUser();

    const [profile,setProfile] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(() => {

        if(userLoading) return;

        const fetchProfile = async () => {

            if(
                !user?.codeforcesUsername
            ){

                setError(
                    "Connect your Codeforces account in Settings"
                );

                setLoading(false);

                return;
            }

            try{

                setError("");

                const response =
                    await api.get(
                        "/users/codeforces-profile-stats"
                    );

                setProfile(
                    response.data.stats
                );

            }

            catch(error){

                setError(

                    error.response?.data?.message ||

                    "Failed to fetch profile"

                );

                console.error(error);

            }

            finally{

                setLoading(false);

            }

        };

        fetchProfile();

    },[
        user,
        userLoading
    ]);

    return{
        profile,
        loading,
        error
    };
};

export default useProfile;