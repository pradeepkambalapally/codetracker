import { Link } from "react-router-dom";

const Navbar = () => {
    const isAuthenticated = !!localStorage.getItem("token");

    return (

        <nav className="
            flex
            items-center
            justify-between

            px-6
            py-5

            border-b

            border-slate-200
            dark:border-slate-800
        ">

            <h1 className="
                text-2xl
                font-black

                text-slate-900
                dark:text-white
            ">

                CodeTracker

            </h1>

            <div className="
                flex
                gap-3
            ">

                {
    isAuthenticated ? (

        <Link
            to="/dashboard"
            className="
                px-5
                py-2

                rounded-xl

                bg-blue-600
                hover:bg-blue-700

                text-white
                font-semibold

                transition-colors
            "
        >
            Go to Dashboard
        </Link>

    ) : (

        <>

            <Link
                to="/login"
                className="
    px-5
    py-2.5

    rounded-xl

    border
    border-slate-300
    dark:border-slate-700

    bg-white
    dark:bg-slate-900

    text-slate-700
    dark:text-slate-200

    shadow-sm
    hover:shadow-md

    hover:bg-slate-100
    dark:hover:bg-slate-800

    hover:border-slate-400
    dark:hover:border-slate-600

    font-medium

    transition-all
    duration-300
"
            >
                Login
            </Link>

            <Link
                to="/register"
                className="
    px-5
    py-2.5

    rounded-xl

    border
    border-slate-300
    dark:border-slate-700

    bg-white
    dark:bg-slate-900

    text-slate-700
    dark:text-slate-200

    shadow-sm
    hover:shadow-md

    hover:bg-slate-100
    dark:hover:bg-slate-800

    hover:border-slate-400
    dark:hover:border-slate-600

    font-medium

    transition-all
    duration-300
"
            >
                Get Started
            </Link>

        </>

    )
}

            </div>

        </nav>

    );

};

export default Navbar;