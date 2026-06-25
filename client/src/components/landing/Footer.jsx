import {
    Globe,
    Heart
} from "lucide-react";

const Footer = () => {

    return (

        <footer className="
            py-10
            px-6

            border-t

            bg-white
            dark:bg-slate-950

            border-slate-200
            dark:border-slate-800
        ">

            <div className="
                max-w-7xl
                mx-auto

                flex
                flex-col
                md:flex-row

                items-center
                justify-between

                gap-6
            ">

                <div>

                    <h2 className="
                        text-2xl
                        font-black

                        text-slate-900
                        dark:text-white
                    ">

                        CodeTracker

                    </h2>

                    <p className="
                        mt-2

                        text-slate-500
                        dark:text-slate-400
                    ">

                        Track. Analyze. Improve.

                    </p>

                </div>

                <div className="
                    flex
                    items-center
                    gap-6
                ">

                    <a

                        href="https://github.com/pradeepkambalapally/codetracker"

                        target="_blank"

                        rel="noreferrer"

                        className="
                            flex
                            items-center
                            gap-2

                            text-slate-600
                            dark:text-slate-300

                            hover:text-blue-600
                        "

                    >

                        <Globe size={20} />

                        GitHub

                    </a>

                </div>

            </div>

            <div className="
                mt-10

                text-center

                text-sm

                text-slate-500
            ">

                Built with

                <Heart

                    size={14}

                    className="
                        inline
                        mx-1

                        text-red-500
                    "

                />

                using React, Node.js and MongoDB.

            </div>

        </footer>

    );

};

export default Footer;