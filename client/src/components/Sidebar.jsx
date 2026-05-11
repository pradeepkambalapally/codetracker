import {
    LayoutDashboard,
    Code2,
    Trophy,
    User,
    Calendar,
    Settings,
    LogOut
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    const navLinks = [
        {
            name: "Dashboard",
            path: "/",
            icon: LayoutDashboard
        },
        {
            name: "Problems",
            path: "/problems",
            icon: Code2
        },
        {
            name: "Contests",
            path: "/contests",
            icon: Trophy
        },
        {
            name: "Profile",
            path: "/profile",
            icon: User
        },
        {
            name: "Calendar",
            path: "/calendar",
            icon: Calendar
        }
    ];

    return (

        <div className="w-64 bg-slate-950 text-white min-h-screen px-5 py-6 flex flex-col border-r border-slate-800">

            {/* Logo */}

            <div className="mb-10">

                <h1 className="text-3xl font-extrabold tracking-tight">

                    <span className="text-blue-500">
                        Code
                    </span>

                    Tracker

                </h1>

            </div>

            {/* Main Navigation */}

            <nav className="space-y-2">

                {
                    navLinks.map((link, index) => {

                        const Icon = link.icon;

                        const isActive =
                            location.pathname === link.path;

                        return (

                            <Link
                                key={index}
                                to={link.path}
                                className={`flex items-center gap-3 py-3 px-4 rounded-2xl transition-all duration-200 font-medium ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                                }`}
                            >

                                <Icon size={20} />

                                <span>
                                    {link.name}
                                </span>

                            </Link>
                        );
                    })
                }

            </nav>

            {/* Bottom Section */}

            <div className="mt-auto pt-6 border-t border-slate-800">

                <div className="space-y-2">

                    <Link
                        to="/settings"
                        className="flex items-center gap-3 py-3 px-4 rounded-2xl text-slate-300 hover:bg-slate-900 hover:text-white transition-all duration-200 font-medium"
                    >

                        <Settings size={20} />

                        <span>
                            Settings
                        </span>

                    </Link>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 py-3 px-4 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all duration-200 font-medium"
                    >

                        <LogOut size={20} />

                        <span>
                            Logout
                        </span>

                    </button>

                </div>

            </div>

        </div>
    );
};

export default Sidebar;