import { useEffect, useState } from "react";
import api from "../api/axios";
const useProfile = () => {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {

        const fetchProfile = async () => {

            try {

                

                const response = await api.get(
                    "/users/codeforces-profile-stats"
                );

                setProfile(response.data.stats);

            } catch (error) {
                setError("Failed to fetch data");
                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchProfile();

    }, []);

    return {
        profile,
        loading,
        error
    };
};

export default useProfile;