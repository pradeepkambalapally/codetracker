import dashboard from "../../assets/landing/dashboard.png";
import problems from "../../assets/landing/problems.png";
import contests from "../../assets/landing/contests.png";
import profile from "../../assets/landing/profile.png";

const images = [

    {
        title: "Dashboard",
        image: dashboard
    },

    {
        title: "Problems",
        image: problems
    },

    {
        title: "Contests",
        image: contests
    },

    {
        title: "Profile",
        image: profile
    }

];

const DashboardPreview = () => {

    return (

        <section className="
            py-24

            px-6

            bg-slate-50
            dark:bg-slate-950
        ">

            <div className="
                max-w-7xl
                mx-auto
            ">

                <h2 className="
                    text-4xl
                    font-bold

                    text-center

                    text-slate-900
                    dark:text-white
                ">

                    Beautiful Dashboard

                </h2>

                <p className="
                    mt-4

                    text-center

                    text-lg

                    text-slate-600
                    dark:text-slate-400
                ">

                    Everything you need to track your competitive programming journey.

                </p>

                <div className="
                    mt-14

                    grid
                    grid-cols-1
                    md:grid-cols-2

                    gap-8
                ">

                    {

                        images.map((item) => (

                            <div

                                key={item.title}

                                className="
                                    rounded-3xl

                                    overflow-hidden

                                    shadow-xl

                                    border

                                    border-slate-200
                                    dark:border-slate-800

                                    bg-white
                                    dark:bg-slate-900

                                    hover:-translate-y-2

                                    transition-all
                                    duration-300
                                "

                            >

                                <img

                                    src={item.image}

                                    alt={item.title}

                                    className="
                                        w-full

                                        object-cover
                                    "

                                />

                                <div className="p-6">

                                    <h3 className="
                                        text-xl
                                        font-bold

                                        text-slate-900
                                        dark:text-white
                                    ">

                                        {item.title}

                                    </h3>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

};

export default DashboardPreview;