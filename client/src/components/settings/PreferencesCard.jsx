import {
    Moon,
    Code2
} from "lucide-react";

import {
    useEffect,
    useState
} from "react";

import api from "../../api/axios";

const PreferencesCard = ({
    user
}) => {

    const [
        preferences,
        setPreferences
    ] = useState({

        theme: "",

        defaultPlatform: ""
    });

 useEffect(() => {

    if (!user?.username)
        return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPreferences((prev) => {

        

        if (
            prev.theme ===
            (user.theme || "Light") &&

            prev.defaultPlatform ===
            (user.defaultPlatform || "Codeforces")
        ) {

            return prev;
        }

        return {

            theme:
                user.theme ||
                "Light",

            defaultPlatform:
                user.defaultPlatform ||
                "Codeforces"
        };
    });

}, [user]);


    const handleChange =
        async (
            key,
            value
        ) => {

            const updated = {

                ...preferences,

                [key]:
                    value
            };

            setPreferences(
                updated
            );

            try {

                await api.put(
                    "/users/update-preferences",
                    updated
                );

            } catch (
                error
            ) {

                console.error(
                    error
                );
            }
        };

 return (

    <div className="
        bg-white
        dark:bg-slate-800

        rounded-3xl
        p-6

        shadow-sm

        border
        border-slate-200
        dark:border-slate-700
    ">

       

        <div className="mb-6">

            <h2 className="
                text-2xl
                font-bold

                text-slate-800
                dark:text-white
            ">

                Preferences

            </h2>

            <p className="
                mt-2

                text-slate-500
                dark:text-slate-400
            ">

                Customize your coding dashboard experience

            </p>

        </div>

        <div className="space-y-4">

           
            <div className="
                flex
                items-center
                justify-between

                bg-slate-50
                dark:bg-slate-700

                border
                border-slate-200
                dark:border-slate-600

                rounded-2xl
                p-4
            ">

                <div className="
                    flex
                    items-center
                    gap-4
                ">

                    <div className="
                        bg-indigo-100
                        dark:bg-indigo-900/40

                        p-3
                        rounded-2xl
                    ">

                        <Moon
                            className="
                            text-indigo-600
                            dark:text-indigo-300
                            "
                            size={22}
                        />

                    </div>

                    <div>

                        <h3 className="
                            font-semibold

                            text-slate-800
                            dark:text-white
                        ">

                            Theme

                        </h3>

                        <p className="
                            text-sm
                            mt-1

                            text-slate-500
                            dark:text-slate-400
                        ">

                            Select your preferred theme

                        </p>

                    </div>

                </div>

                <select

                    value={
                        preferences.theme
                    }

                    onChange={(e)=>

                        handleChange(
                            "theme",
                            e.target.value
                        )
                    }

                    className="
                        px-3
                        py-2

                        rounded-xl

                        border
                        border-slate-200
                        dark:border-slate-600

                        bg-white
                        dark:bg-slate-800

                        text-slate-800
                        dark:text-white

                        outline-none
                    "
                >

                    <option>

                        Light

                    </option>

                    <option>

                        Dark

                    </option>

                </select>

            </div>

           

            <div className="
                flex
                items-center
                justify-between

                bg-slate-50
                dark:bg-slate-700

                border
                border-slate-200
                dark:border-slate-600

                rounded-2xl
                p-4
            ">

                <div className="
                    flex
                    items-center
                    gap-4
                ">

                    <div className="
                        bg-blue-100
                        dark:bg-blue-900/40

                        p-3
                        rounded-2xl
                    ">

                        <Code2
                            className="
                            text-blue-600
                            dark:text-blue-300
                            "
                            size={22}
                        />

                    </div>

                    <div>

                        <h3 className="
                            font-semibold

                            text-slate-800
                            dark:text-white
                        ">

                            Default Platform

                        </h3>

                        <p className="
                            text-sm
                            mt-1

                            text-slate-500
                            dark:text-slate-400
                        ">

                            Choose your primary coding platform

                        </p>

                    </div>

                </div>

                <select

                    value={
                        preferences.defaultPlatform
                    }

                    onChange={(e)=>

                        handleChange(
                            "defaultPlatform",
                            e.target.value
                        )
                    }

                    className="
                        px-3
                        py-2

                        rounded-xl

                        border
                        border-slate-200
                        dark:border-slate-600

                        bg-white
                        dark:bg-slate-800

                        text-slate-800
                        dark:text-white

                        outline-none
                    "
                >

                    <option>

                        Codeforces

                    </option>

                    <option>

                        LeetCode

                    </option>

                </select>

            </div>

        </div>

    </div>
);
};

export default PreferencesCard;