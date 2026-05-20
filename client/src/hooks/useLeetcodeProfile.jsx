import { useEffect, useState } from "react";

import api from "../api/axios";

const useLeetcodeProfile = () => {

    const [

        leetcodeProfile,

        setProfile

    ] = useState(null);

    const [

        loading,

        setLoading

    ] = useState(true);

    const [

        error,

        setError

    ] = useState("");

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const response =
                    await api.get(
                        "/users/leetcode-profile"
                    );

                if (

                    response.data.success

                ) {

                    setProfile(
                        response.data.profile
                    );

                }

            }

            catch (error) {

                setError(

                    error.response?.data?.message ||

                    "Failed to fetch LeetCode profile"

                );

            }

            finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, []);

    return {

        profile:
            leetcodeProfile,

        loading,

        error

    };

};

export default useLeetcodeProfile;