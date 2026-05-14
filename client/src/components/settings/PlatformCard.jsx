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

        <div className="
            bg-slate-50
            dark:bg-slate-700

            border
            border-slate-200
            dark:border-slate-600

            rounded-3xl
            p-4

            hover:shadow-md

            transition-all
            duration-300
        ">

            <div className="
                flex
                items-start
                justify-between
            ">

               

                <div className="
                    flex
                    gap-4
                ">

                    

                    <div className="
                        w-14
                        h-14

                        rounded-2xl

                        bg-white
                        dark:bg-slate-800

                        border
                        border-slate-200
                        dark:border-slate-600

                        flex
                        items-center
                        justify-center

                        overflow-hidden
                    ">

                        <img
                            src={platform.logo}
                            alt={platform.name}
                            className="
                                w-8
                                h-8
                                object-contain
                            "
                        />

                    </div>

                   

                    <div>

                        <h3 className="
                            text-lg
                            font-bold

                            text-slate-800
                            dark:text-white
                        ">

                            {platform.name}

                        </h3>

                        <p className="
                            mt-1

                            text-slate-500
                            dark:text-slate-300
                        ">

                            {
                                platform.value
                                ? `@${platform.value}`
                                : "Not Connected"
                            }

                        </p>

                        <div className="
                            flex
                            items-center
                            gap-2
                            mt-2
                        ">

                            {

                            platform.connected

                            ?

                            <CheckCircle
                                className="
                                text-green-600
                                dark:text-green-400
                                "
                                size={16}
                            />

                            :

                            <Clock3
                                className="
                                text-yellow-600
                                dark:text-yellow-400
                                "
                                size={16}
                            />

                            }

                            <p
                            className={`
                            text-sm
                            font-medium

                            ${
                            platform.connected

                            ?

                            "text-green-600 dark:text-green-400"

                            :

                            "text-yellow-600 dark:text-yellow-400"

                            }
                            `}
                            >

                                {platform.status}

                            </p>

                        </div>

                    </div>

                </div>

           

                {

                platform.available && (

                <button

                    onClick={() =>
                        setEditingPlatform(

                            editingPlatform
                            ===
                            platform.key

                            ?

                            null

                            :

                            platform.key
                        )
                    }

                    className="
                    bg-blue-600
                    hover:bg-blue-700

                    text-white

                    px-4
                    py-2

                    rounded-2xl

                    font-semibold

                    transition-colors
                    "
                >

                    {

                    platform.connected

                    ?

                    "Update"

                    :

                    "Connect"

                    }

                </button>

                )

                }

            </div>

           

            {

            editingPlatform ===
            platform.key && (

            <div className="
                mt-5
                flex
                gap-3
            ">

                <input

                    type="text"

                    value={
                        handles[
                            platform.key
                        ]
                    }

                    onChange={(e)=>

                        handleChange(

                            platform.key,

                            e.target.value

                        )

                    }

                    placeholder={`Enter ${platform.name} handle`}

                    className="

                    flex-1

                    px-4
                    py-3

                    rounded-2xl

                    border
                    border-slate-200
                    dark:border-slate-600

                    bg-white
                    dark:bg-slate-800

                    text-slate-800
                    dark:text-white

                    outline-none

                    focus:ring-2
                    focus:ring-blue-500
                    "
                />

                <button

                    onClick={() =>

                        handleSave(
                            platform.key
                        )

                    }

                    className="
                    bg-green-600
                    hover:bg-green-700

                    text-white

                    px-5
                    py-3

                    rounded-2xl

                    font-semibold

                    transition-colors
                    "
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