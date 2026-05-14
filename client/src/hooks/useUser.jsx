import { useEffect, useState } from "react";
import api from "../api/axios";

const useUser = () => {
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchUser = async () => {

            try {

                const response =
                    await api.get("/users/me");

                setUser(response.data.user);
               

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchUser();

    }, []);

    return {
        user,
        loading
    };
};

export default useUser;