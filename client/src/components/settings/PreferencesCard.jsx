import {
    Moon,
    Code2
} from "lucide-react";

const PreferencesCard = () => {

    return (

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

            {/* Header */}

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-800">

                    Preferences

                </h2>

                <p className="text-slate-500 mt-2">

                    Customize your coding dashboard experience

                </p>

            </div>

            {/* Preferences */}

            <div className="space-y-4">

                {/* Theme */}

                <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-4">

                    <div className="flex items-center gap-4">

                        <div className="bg-indigo-100 p-3 rounded-2xl">

                            <Moon
                                className="text-indigo-600"
                                size={22}
                            />

                        </div>

                        <div>

                            <h3 className="font-semibold text-slate-800">

                                Theme

                            </h3>

                            <p className="text-sm text-slate-500 mt-1">

                                Select your preferred theme

                            </p>

                        </div>

                    </div>

                    <select className="border border-slate-200 rounded-xl px-3 py-2 outline-none">

                        <option>

                            Light

                        </option>

                        <option>

                            Dark

                        </option>

                    </select>

                </div>

                {/* Default Platform */}

                <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-4">

                    <div className="flex items-center gap-4">

                        <div className="bg-blue-100 p-3 rounded-2xl">

                            <Code2
                                className="text-blue-600"
                                size={22}
                            />

                        </div>

                        <div>

                            <h3 className="font-semibold text-slate-800">

                                Default Platform

                            </h3>

                            <p className="text-sm text-slate-500 mt-1">

                                Choose your primary coding platform

                            </p>

                        </div>

                    </div>

                    <select className="border border-slate-200 rounded-xl px-3 py-2 outline-none">

                        <option>

                            Codeforces

                        </option>

                        <option>

                            LeetCode

                        </option>

                    </select>

                </div>

                {/* Difficulty */}

               

            </div>

        </div>
    );
};

export default PreferencesCard;