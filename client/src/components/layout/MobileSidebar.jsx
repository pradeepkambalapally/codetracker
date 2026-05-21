import Sidebar from "./Sidebar";

const MobileSidebar = ({

    mobileSidebarOpen,

    setMobileSidebarOpen

}) => {

    return (

        <div className={`

            fixed
            inset-0

            z-[200]

            md:hidden

            ${

                mobileSidebarOpen

                ?

                "block"

                :

                "hidden"

            }

        `}>

            {/* BACKDROP */}

            <div

                onClick={() =>

                    setMobileSidebarOpen(
                        false
                    )

                }

                className="
                    absolute
                    inset-0

                    bg-black/50
                "
            />

            {/* SIDEBAR */}

            <div className={`

                relative

                h-full
                w-64

                transition-transform
                duration-300

                ${

                    mobileSidebarOpen

                    ?

                    "translate-x-0"

                    :

                    "-translate-x-full"

                }

            `}>

                <Sidebar />

            </div>

        </div>

    );

};

export default MobileSidebar;