import {
    Lock,
    LogOut
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const SecurityCard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    return (

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

            {/* Header */}

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-800">

                    Security

                </h2>

                <p className="text-slate-500 mt-2">

                    Manage your account security and access

                </p>

            </div>

            {/* Security Options */}

            <div className="space-y-4">

                {/* Change Password */}

                <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-4">

                    <div className="flex items-center gap-4">

                        <div className="bg-blue-100 p-3 rounded-2xl">

                            <Lock
                                className="text-blue-600"
                                size={22}
                            />

                        </div>

                        <div>

                            <h3 className="font-semibold text-slate-800">

                                Change Password

                            </h3>

                            <p className="text-sm text-slate-500 mt-1">

                                Update your account password securely

                            </p>

                        </div>

                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl font-semibold transition-colors">

                        Update

                    </button>

                </div>

                
                {/* Logout */}

                <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-2xl p-4">

                    <div className="flex items-center gap-4">

                        <div className="bg-red-100 p-3 rounded-2xl">

                            <LogOut
                                className="text-red-600"
                                size={22}
                            />

                        </div>

                        <div>

                            <h3 className="font-semibold text-slate-800">

                                Logout

                            </h3>

                            <p className="text-sm text-slate-500 mt-1">

                                Sign out from your account

                            </p>

                        </div>

                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl font-semibold transition-colors"
                    >

                        Logout

                    </button>

                </div>

            </div>

        </div>
    );
};

export default SecurityCard;