import { Link } from "react-router-dom";

const Hero = () => {
    const isAuthenticated = !!localStorage.getItem("token");

    return (

        <section className="
            max-w-7xl
            mx-auto

            px-6
            py-24

            text-center
        ">

            <h1 className="
                text-5xl
                md:text-7xl

                font-black

                text-slate-900
                dark:text-white
            ">

                Track Your

                <span className="
                    text-blue-600
                ">
                    {" "}Coding Journey
                </span>

            </h1>

            <p className="
                mt-8

                max-w-3xl
                mx-auto

                text-lg
                md:text-xl

                text-slate-600
                dark:text-slate-400
            ">

                Connect Codeforces and LeetCode,
                analyze your performance,
                visualize contest progress,
                and improve consistently.

            </p>

            <div className="
                mt-10

                flex
                flex-col
                sm:flex-row

                justify-center

                gap-4
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

        </section>

    );

};

export default Hero;