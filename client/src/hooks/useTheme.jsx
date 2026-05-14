import { useEffect } from "react";
import useUser from "./useUser";

const useTheme = () => {

    const { user } =
        useUser();

    useEffect(() => {

        if (
            user?.theme ===
            "Dark"
        ) {

            document.documentElement
                .classList.add(
                    "dark"
                );

        }

        else {

            document.documentElement
                .classList.remove(
                    "dark"
                );
        }

    }, [user]);

};

export default useTheme;