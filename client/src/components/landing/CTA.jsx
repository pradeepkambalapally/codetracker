import { Link } from "react-router-dom";

const CTA = () => {
    const isAuthenticated = !!localStorage.getItem("token");

    return (

        <section className="
            py-24
            px-6

            bg-blue-600
        ">

            <div className="
                max-w-4xl
                mx-auto

                text-center
            ">

                <h2 className="
                    text-5xl

                    font-black

                    text-white
                ">

                    Ready to Track Your Progress?

                </h2>

                <p className="
                    mt-6

                    text-xl

                    text-blue-100
                ">

                    Join CodeTracker today and gain valuable insights
                    into your competitive programming journey.

                </p>

                {
    isAuthenticated ? (

        <Link
            to="/dashboard"
            className="
                        inline-block

                        mt-10

                        px-8
                        py-4

                        rounded-2xl

                        bg-white

                        text-blue-600

                        font-bold

                        hover:scale-105

                        transition-transform
                    "
        >
            Go to Dashboard
        </Link>

    ) : (

        <Link
            to="/register"
             className="
                        inline-block

                        mt-10

                        px-8
                        py-4

                        rounded-2xl

                        bg-white

                        text-blue-600

                        font-bold

                        hover:scale-105

                        transition-transform
                    "
        >
            Get Started Free
        </Link>

    )
}


            </div>

        </section>

    );

};

export default CTA;