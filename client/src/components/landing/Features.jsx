import {
    BarChart3,
    Trophy,
    Code2
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const Features = () => {

    return (

        <section className="
            max-w-7xl
            mx-auto

            px-6
            py-20
        ">

            <h2 className="
                text-4xl
                font-bold

                text-center

                text-slate-900
                dark:text-white
            ">

                Features

            </h2>

            <div className="
                grid
                md:grid-cols-3

                gap-6

                mt-12
            ">

                <FeatureCard
                    icon={<BarChart3 />}
                    title="Analytics Dashboard"
                    description="Track solved problems, ratings, and progress."
                />

                <FeatureCard
                    icon={<Code2 />}
                    title="Problem Tracking"
                    description="Monitor topics, difficulties, and submissions."
                />

                <FeatureCard
                    icon={<Trophy />}
                    title="Contest Insights"
                    description="Visualize contest performance and rating growth."
                />

            </div>

        </section>

    );

};

export default Features;