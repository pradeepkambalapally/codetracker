import codeforces from "../../assets/codeforces.png";
import leetcode from "../../assets/leetcode.png";

const PlatformSupport = () => {

    return (

        <section className="
            py-24
            px-6
        ">

            <div className="
                max-w-6xl
                mx-auto

                text-center
            ">

                <h2 className="
                    text-4xl
                    font-black

                    text-slate-900
                    dark:text-white
                ">

                    Supported Platforms

                </h2>

                <p className="
                    mt-4

                    text-lg

                    text-slate-600
                    dark:text-slate-400
                ">

                    Connect your favorite competitive programming accounts
                    and monitor your progress from a single dashboard.

                </p>

                <div className="
                    mt-16

                    grid
                    md:grid-cols-2

                    gap-8
                ">

                    <div className="
                        p-8

                        rounded-3xl

                        bg-white
                        dark:bg-slate-800

                        border
                        border-slate-200
                        dark:border-slate-700

                        shadow-sm
                    ">

                        <img

                            src={codeforces}

                            alt="Codeforces"

                            className="
                                w-20
                                h-20

                                mx-auto

                                object-contain
                            "

                        />

                        <h3 className="
                            mt-6

                            text-2xl
                            font-bold

                            text-slate-900
                            dark:text-white
                        ">

                            Codeforces

                        </h3>

                        <p className="
                            mt-3

                            text-slate-500
                            dark:text-slate-400
                        ">

                            Contest history, rating progression,
                            solved problems, profile statistics,
                            and performance analytics.

                        </p>

                    </div>

                    <div className="
                        p-8

                        rounded-3xl

                        bg-white
                        dark:bg-slate-800

                        border
                        border-slate-200
                        dark:border-slate-700

                        shadow-sm
                    ">

                        <img

                            src={leetcode}

                            alt="LeetCode"

                            className="
                                w-20
                                h-20

                                mx-auto

                                object-contain
                            "

                        />

                        <h3 className="
                            mt-6

                            text-2xl
                            font-bold

                            text-slate-900
                            dark:text-white
                        ">

                            LeetCode

                        </h3>

                        <p className="
                            mt-3

                            text-slate-500
                            dark:text-slate-400
                        ">

                            Track solved problems,
                            topic distribution,
                            difficulty breakdown,
                            and coding consistency.

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default PlatformSupport;