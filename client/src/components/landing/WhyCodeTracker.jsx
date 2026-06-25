import {
    BarChart3,
    Trophy,
    LayoutDashboard,
    Smartphone
} from "lucide-react";

import WhyCard from "./WhyCard";

const WhyCodeTracker = () => {

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

                <div className="text-center">

                    <h2 className="
                        text-4xl
                        md:text-5xl

                        font-black

                        text-slate-900
                        dark:text-white
                    ">

                        Why CodeTracker?

                    </h2>

                    <p className="
                        mt-6

                        max-w-3xl
                        mx-auto

                        text-lg

                        text-slate-600
                        dark:text-slate-400
                    ">

                        Everything you need to monitor your competitive programming
                        journey in one beautiful dashboard.

                    </p>

                </div>

                <div className="
                    mt-16

                    grid

                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-4

                    gap-8
                ">

                    <WhyCard

                        icon={<LayoutDashboard size={28} />}

                        title="Unified Dashboard"

                        description="
                        Connect multiple platforms and
                        view all your coding progress
                        in one place.
                        "

                    />

                    <WhyCard

                        icon={<BarChart3 size={28} />}

                        title="Visual Analytics"

                        description="
                        Interactive charts help you
                        understand your strengths,
                        weaknesses and growth.
                        "

                    />

                    <WhyCard

                        icon={<Trophy size={28} />}

                        title="Contest Insights"

                        description="
                        Analyze contest ratings,
                        ranking changes and
                        performance trends.
                        "

                    />

                    <WhyCard

                        icon={<Smartphone size={28} />}

                        title="Responsive"

                        description="
                        Beautiful experience across
                        desktop, tablet and
                        mobile devices.
                        "

                    />

                </div>

            </div>

        </section>

    );

};

export default WhyCodeTracker;