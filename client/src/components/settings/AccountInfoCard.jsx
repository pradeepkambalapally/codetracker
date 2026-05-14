import {
    User,
    Mail,
    Calendar
} from "lucide-react";

const AccountInfoCard = ({
    user
}) => {

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

                    Account Information

                </h2>

                <p className="
                    mt-2

                    text-slate-500
                    dark:text-slate-400
                ">

                    Your personal account details

                </p>

            </div>

           

            <div className="space-y-4">

                {/* Username */}

                <div className="
                    flex
                    items-center
                    gap-4

                    bg-slate-50
                    dark:bg-slate-700

                    border
                    border-slate-200
                    dark:border-slate-600

                    rounded-2xl
                    p-4
                ">

                    <div className="
                        bg-blue-100
                        dark:bg-blue-900/40

                        p-3
                        rounded-2xl
                    ">

                        <User
                            className="
                            text-blue-600
                            dark:text-blue-300
                            "
                            size={22}
                        />

                    </div>

                    <div>

                        <p className="
                            text-sm
                            text-slate-400
                        ">

                            Username

                        </p>

                        <h3 className="
                            text-lg
                            font-semibold
                            mt-1

                            text-slate-800
                            dark:text-white
                        ">

                            {
                                user?.username ||
                                "N/A"
                            }

                        </h3>

                    </div>

                </div>

               

                <div className="
                    flex
                    items-center
                    gap-4

                    bg-slate-50
                    dark:bg-slate-700

                    border
                    border-slate-200
                    dark:border-slate-600

                    rounded-2xl
                    p-4
                ">

                    <div className="
                        bg-purple-100
                        dark:bg-purple-900/40

                        p-3
                        rounded-2xl
                    ">

                        <Mail
                            className="
                            text-purple-600
                            dark:text-purple-300
                            "
                            size={22}
                        />

                    </div>

                    <div>

                        <p className="
                            text-sm
                            text-slate-400
                        ">

                            Email

                        </p>

                        <h3 className="
                            text-lg
                            font-semibold
                            mt-1

                            text-slate-800
                            dark:text-white
                        ">

                            {
                                user?.email ||
                                "demo@gmail.com"
                            }

                        </h3>

                    </div>

                </div>

               

                <div className="
                    flex
                    items-center
                    gap-4

                    bg-slate-50
                    dark:bg-slate-700

                    border
                    border-slate-200
                    dark:border-slate-600

                    rounded-2xl
                    p-4
                ">

                    <div className="
                        bg-green-100
                        dark:bg-green-900/40

                        p-3
                        rounded-2xl
                    ">

                        <Calendar
                            className="
                            text-green-600
                            dark:text-green-300
                            "
                            size={22}
                        />

                    </div>

                    <div>

                        <p className="
                            text-sm
                            text-slate-400
                        ">

                            Joined

                        </p>

                        <h3 className="
                            text-lg
                            font-semibold
                            mt-1

                            text-slate-800
                            dark:text-white
                        ">

                            {
                                user?.createdAt

                                ?

                                new Date(
                                    user.createdAt
                                ).toLocaleDateString(
                                    "en-US",
                                    {
                                        year:"numeric",
                                        month:"long"
                                    }
                                )

                                :

                                "N/A"
                            }

                        </h3>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AccountInfoCard;