import {
    LayoutDashboard,
    Code2,
    Trophy,
    User,
    Settings,
    LogOut,
    LogIn,
    UserPlus
} from "lucide-react";

import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

const Sidebar = () => {

    const location =
        useLocation();

    const navigate =
        useNavigate();

    const token =
        localStorage.getItem(
            "token"
        );

    const handleLogout = () => {

        localStorage.removeItem(
            "token"
        );

        localStorage.removeItem(
            "theme"
        );

        navigate(
            "/home"
        );
    };

    const authLinks = [

        {
            name:"Dashboard",
            path:"/",
            icon:LayoutDashboard
        },

        {
            name:"Problems",
            path:"/problems",
            icon:Code2
        },

        {
            name:"Contests",
            path:"/contests",
            icon:Trophy
        },

        {
            name:"Profile",
            path:"/profile",
            icon:User
        }

    ];

    const guestLinks = [

        {
            name:"Login",
            path:"/login",
            icon:LogIn
        },

        {
            name:"Register",
            path:"/register",
            icon:UserPlus
        }

    ];

    const links =
        token
        ?
        authLinks
        :
        guestLinks;

    return (

        <div className="
    w-64

    min-h-screen

    px-5
    py-6

    flex
    flex-col

    border-r

    bg-white
    dark:bg-slate-950

    border-slate-200
    dark:border-slate-800

    transition-colors
">

            {/* Logo */}

            <div className="mb-10">

                <h1 className="
                    text-3xl
                    font-extrabold
                    tracking-tight
                ">

                    <span
                    className="
                    text-blue-500
                    "
                    >

                        Code

                    </span>

                    <span
                    className="
                    text-slate-800
                    dark:text-white
                    "
                    >

                        Tracker

                    </span>

                </h1>

            </div>

            {/* Navigation */}

            <nav className="space-y-2">

                {

                    links.map(

                        (
                            link,
                            index
                        ) => {

                            const Icon =
                                link.icon;

                            const isActive =

                                location.pathname
                                ===
                                link.path;

                            return (

                                <Link

                                    key={index}

                                    to={
                                        link.path
                                    }

                                    className={`

                                    flex
                                    items-center
                                    gap-3

                                    py-3
                                    px-4

                                    rounded-2xl

                                    font-medium

                                    transition-all
                                    duration-200

                                    ${

                                    isActive

                                    ?

                                    "bg-blue-600 text-white shadow-lg shadow-blue-500/20"

                                    :

                                    "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"

                                    }

                                    `}
                                >

                                    <Icon
                                        size={20}
                                    />

                                    <span>

                                        {link.name}

                                    </span>

                                </Link>

                            );

                        }

                    )

                }

            </nav>

            {/* Bottom section */}

            {

                token && (

                <div className="
                    mt-auto
                    pt-6

                    border-t

                    border-slate-200
                    dark:border-slate-800
                ">

                    <div className="
                        space-y-2
                    ">

                        <Link

                            to="/settings"

                            className="
                            flex
                            items-center
                            gap-3

                            py-3
                            px-4

                            rounded-2xl

                            font-medium

                            text-slate-600
                            dark:text-slate-300

                            hover:bg-slate-100
                            dark:hover:bg-slate-900

                            hover:text-slate-900
                            dark:hover:text-white

                            transition-all
                            duration-200
                            "
                        >

                            <Settings
                                size={20}
                            />

                            <span>

                                Settings

                            </span>

                        </Link>

                        <button

                            onClick={
                                handleLogout
                            }

                            className="
                            w-full

                            flex
                            items-center
                            gap-3

                            py-3
                            px-4

                            rounded-2xl

                            font-medium

                            text-red-400

                            hover:bg-red-500/10

                            transition-all
                            duration-200
                            "
                        >

                            <LogOut
                                size={20}
                            />

                            <span>

                                Logout

                            </span>

                        </button>

                    </div>

                </div>

                )

            }

        </div>

    );

};

export default Sidebar;