import {
    User,
    Mail,
    Calendar
} from "lucide-react";

const AccountInfoCard = ({
    user
}) => {
   
    return (

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

            {/* Header */}

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-800">

                    Account Information

                </h2>

                <p className="text-slate-500 mt-2">

                    Your personal account details

                </p>

            </div>

            {/* Info Cards */}

            <div className="space-y-4">

                {/* Username */}

                <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4">

                    <div className="bg-blue-100 p-3 rounded-2xl">

                        <User
                            className="text-blue-600"
                            size={22}
                        />

                    </div>

                    <div>

                        <p className="text-sm text-slate-400">

                            Username

                        </p>

                        <h3 className="text-lg font-semibold text-slate-800 mt-1">

                            {
                                user?.username ||
                                "N/A"
                            }
                            

                        </h3>
                        

                    </div>

                </div>

                {/* Email */}

                <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4">

                    <div className="bg-purple-100 p-3 rounded-2xl">

                        <Mail
                            className="text-purple-600"
                            size={22}
                        />

                    </div>

                    <div>

                        <p className="text-sm text-slate-400">

                            Email

                        </p>

                        <h3 className="text-lg font-semibold text-slate-800 mt-1">

                            {
                                user?.email ||
                                "demo@gmail.com"
                            }

                        </h3>

                    </div>

                </div>

                {/* Joined */}

                <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4">

                    <div className="bg-green-100 p-3 rounded-2xl">

                        <Calendar
                            className="text-green-600"
                            size={22}
                        />

                    </div>

                    <div>

                        <p className="text-sm text-slate-400">

                            Joined

                        </p>

                        <h3 className="text-lg font-semibold text-slate-800 mt-1">

                            {
                                user?.createdAt
                                    ? new Date(
                                          user.createdAt
                                      ).toLocaleDateString(
                                          "en-US",
                                          {
                                              year: "numeric",
                                              month: "long"
                                          }
                                      )
                                    : "N/A"
                            }

                        </h3>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AccountInfoCard;