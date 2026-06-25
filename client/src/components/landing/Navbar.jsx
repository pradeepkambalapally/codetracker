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
                className="..."
            >
                Login
            </Link>

            <Link
                to="/register"
                className="..."
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