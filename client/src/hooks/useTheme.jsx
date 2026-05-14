import {
    useEffect
} from "react";

import useUser
from "./useUser";

const useTheme = () => {

    const {
        user
    } = useUser();

    useEffect(() => {

        const savedTheme =
            localStorage.getItem(
                "theme"
            );

        const theme =

            savedTheme ||
            user?.theme ||
            "Light";

        if (
            theme === "Dark"
        ) {

            document
                .documentElement
                .classList.add(
                    "dark"
                );

        }

        else {

            document
                .documentElement
                .classList.remove(
                    "dark"
                );

        }

    }, [user]);

};

export default useTheme;