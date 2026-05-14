import {
    Lock,
    LogOut
} from "lucide-react";

import {
    useNavigate
} from "react-router-dom";

const SecurityCard = () => {

    const navigate =
        useNavigate();

    const handleLogout = () => {

        localStorage.removeItem(
            "token"
        );

        navigate(
            "/login"
        );
    };

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            rounded-3xl
            p-6

            shadow-sm

            border
            border-slate-200
            dark:border-slate-700
        ">

            

            <div className="mb-6">

                <h2 className="
                    text-2xl
                    font-bold

                    text-slate-800
                    dark:text-white
                ">

                    Security

                </h2>

                <p className="
                    mt-2

                    text-slate-500
                    dark:text-slate-400
                ">

                    Manage your account security and access

                </p>

            </div>

            

            <div className="
                space-y-4
            ">

                

                <div className="
                    flex
                    items-center
                    justify-between

                    bg-slate-50
                    dark:bg-slate-700

                    border
                    border-slate-200
                    dark:border-slate-600

                    rounded-2xl
                    p-4
                ">

                    <div className="
                        flex
                        items-center
                        gap-4
                    ">

                        <div className="
                            bg-blue-100
                            dark:bg-blue-900/40

                            p-3
                            rounded-2xl
                        ">

                            <Lock
                                className="
                                text-blue-600
                                dark:text-blue-300
                                "
                                size={22}
                            />

                        </div>

                        <div>

                            <h3 className="
                                font-semibold

                                text-slate-800
                                dark:text-white
                            ">

                                Change Password

                            </h3>

                            <p className="
                                text-sm
                                mt-1

                                text-slate-500
                                dark:text-slate-400
                            ">

                                Update your account password securely

                            </p>

                        </div>

                    </div>

                    <button className="
                        bg-blue-600
                        hover:bg-blue-700

                        text-white

                        px-4
                        py-2

                        rounded-2xl

                        font-semibold

                        transition-colors
                    ">

                        Update

                    </button>

                </div>

                
                <div className="
                    flex
                    items-center
                    justify-between

                    bg-red-50
                    dark:bg-red-900/20

                    border
                    border-red-200
                    dark:border-red-800

                    rounded-2xl
                    p-4
                ">

                    <div className="
                        flex
                        items-center
                        gap-4
                    ">

                        <div className="
                            bg-red-100
                            dark:bg-red-900/40

                            p-3
                            rounded-2xl
                        ">

                            <LogOut
                                className="
                                text-red-600
                                dark:text-red-300
                                "
                                size={22}
                            />

                        </div>

                        <div>

                            <h3 className="
                                font-semibold

                                text-slate-800
                                dark:text-white
                            ">

                                Logout

                            </h3>

                            <p className="
                                text-sm
                                mt-1

                                text-slate-500
                                dark:text-slate-400
                            ">

                                Sign out from your account

                            </p>

                        </div>

                    </div>

                    <button

                        onClick={
                            handleLogout
                        }

                        className="
                            bg-red-500
                            hover:bg-red-600

                            text-white

                            px-4
                            py-2

                            rounded-2xl

                            font-semibold

                            transition-colors
                        "
                    >

                        Logout

                    </button>

                </div>

            </div>

        </div>
    );
};

export default SecurityCard;