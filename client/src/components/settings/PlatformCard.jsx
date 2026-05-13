import {
    CheckCircle,
    Clock3
} from "lucide-react";

const PlatformCard = ({
    platform,
    editingPlatform,
    setEditingPlatform,
    handles,
    handleChange,
    handleSave
}) => {

    return (

        <div className="border border-slate-200 rounded-3xl p-4 hover:shadow-md transition-all duration-300 bg-slate-50">

            <div className="flex items-start justify-between">

                {/* Left */}

                <div className="flex gap-4">

                    {/* Logo */}

                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center overflow-hidden">

                        <img
                            src={platform.logo}
                            alt={platform.name}
                            className="w-8 h-8 object-contain"
                        />

                    </div>

                    {/* Info */}

                    <div>

                        <h3 className="text-lg font-bold text-slate-800">

                            {platform.name}

                        </h3>

                        <p className="text-slate-500 mt-1">

                            {
                                platform.value
                                    ? `@${platform.value}`
                                    : "Not Connected"
                            }

                        </p>

                        <div className="flex items-center gap-2 mt-2">

                            {
                                platform.connected
                                    ? (
                                        <CheckCircle
                                            className="text-green-600"
                                            size={16}
                                        />
                                    )
                                    : (
                                        <Clock3
                                            className="text-yellow-600"
                                            size={16}
                                        />
                                    )
                            }

                            <p className={`text-sm font-medium ${
                                platform.connected
                                    ? "text-green-600"
                                    : "text-yellow-600"
                            }`}>

                                {platform.status}

                            </p>

                        </div>

                    </div>

                </div>

                {/* Button */}

                {
                    platform.available && (

                        <button
                            onClick={() =>
                                setEditingPlatform(
                                    editingPlatform ===
                                    platform.key
                                        ? null
                                        : platform.key
                                )
                            }
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl font-semibold transition-colors"
                        >

                            {
                                platform.connected
                                    ? "Update"
                                    : "Connect"
                            }

                        </button>
                    )
                }

            </div>

            {/* Expandable Input */}

            {
                editingPlatform ===
                platform.key && (

                    <div className="mt-5 flex gap-3">

                        <input
                            type="text"
                            value={
                                handles[
                                    platform.key
                                ]
                            }
                            onChange={(e) =>
                                handleChange(
                                    platform.key,
                                    e.target.value
                                )
                            }
                            placeholder={`Enter ${platform.name} handle`}
                            className="flex-1 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={() =>
                                handleSave(
                                    platform.key
                                )
                            }
                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-semibold transition-colors"
                        >

                            Save

                        </button>

                    </div>
                )
            }

        </div>
    );
};

export default PlatformCard;