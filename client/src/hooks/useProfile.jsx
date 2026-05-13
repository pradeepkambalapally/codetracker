import { useEffect, useState } from "react";
import api from "../api/axios";
const useProfile = () => {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                

                const response = await api.get(
                    "/users/codeforces-profile-stats"
                );

                setProfile(response.data.stats);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchProfile();

    }, []);

    return {
        profile,
        loading
    };
};

export default useProfile;