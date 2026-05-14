import {
    useEffect,
    useState
} from "react";

import api from "../api/axios";

const useUser = () => {

    const [
        user,
        setUser
    ] = useState({});

    const [
        loading,
        setLoading
    ] = useState(true);

    useEffect(() => {

        const token =
            localStorage.getItem(
                "token"
            );

        // Don't call /me if user
        // isn't logged in

        if (!token) {

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLoading(
                false
            );

            return;

        }

        const fetchUser =
        async () => {

            try {

                const response =

                    await api.get(
                        "/users/me"
                    );

                setUser(

                    response.data.user

                );

            }

            catch(error){

                console.error(
                    error
                );

                localStorage.removeItem(
                    "token"
                );

            }

            finally{

                setLoading(
                    false
                );

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