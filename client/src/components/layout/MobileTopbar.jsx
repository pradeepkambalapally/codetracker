import { Menu } from "lucide-react";

const MobileTopbar = ({
    setMobileSidebarOpen
}) => {

    return (

        <div className="
            md:hidden

            fixed
            top-0
            left-0
            right-0

            z-[100]

            flex
            items-center
            justify-between

            px-4
            py-4

            bg-white
            dark:bg-slate-950

            border-b

            border-slate-200
            dark:border-slate-800
        ">

            <button

                onClick={() =>

                    setMobileSidebarOpen(
                        true
                    )

                }

                className="
                    p-2

                    rounded-xl

                    text-slate-700
                    dark:text-slate-200

                    hover:bg-slate-100
                    dark:hover:bg-slate-800

                    transition-colors
                "
            >

                <Menu size={24} />

            </button>

            <h1 className="
                    text-2xl
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

    );

};

export default MobileTopbar;