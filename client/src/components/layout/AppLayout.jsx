import {

    useState

} from "react";

import Sidebar from "./Sidebar";

import ProtectedRoutes from "../auth/ProtectedRoutes";

import MobileTopbar from "./MobileTopbar";
import MobileSidebar from "./MobileSidebar";

const AppLayout = ({
    children
}) => {

    const [

        mobileSidebarOpen,

        setMobileSidebarOpen

    ] = useState(false);

    return (

        <ProtectedRoutes>

            <div className="
                flex
                min-h-screen
            ">

                <MobileTopbar

                    setMobileSidebarOpen={
                        setMobileSidebarOpen
                    }

                />

                <MobileSidebar

                    mobileSidebarOpen={
                        mobileSidebarOpen
                    }

                    setMobileSidebarOpen={
                        setMobileSidebarOpen
                    }

                />

                {/* DESKTOP SIDEBAR */}

                <div className="
                    hidden
                    md:flex
                ">

                    <Sidebar />

                </div>

                {/* PAGE CONTENT */}

                <main className="
                    flex-1
                    w-full

                    pt-[72px]
                    md:pt-0
                ">

                    {children}

                </main>

            </div>

        </ProtectedRoutes>

    );

};

export default AppLayout;