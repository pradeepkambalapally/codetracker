import {
    AlertTriangle,
    RefreshCw
} from "lucide-react";

const ErrorMessage = ({
    error
}) => {
    return (

        <div className="
            flex-1
            min-h-screen

            flex
            items-center
            justify-center

            p-6

            bg-slate-100
            dark:bg-slate-900
        ">

            <div className="
                w-full
                max-w-lg

                rounded-3xl

                p-8

                shadow-xl

                border

                bg-white
                dark:bg-slate-800

                border-red-200
                dark:border-red-800
            ">

                

                <div className="
                    w-16
                    h-16

                    rounded-2xl

                    bg-red-100
                    dark:bg-red-900/30

                    flex
                    items-center
                    justify-center

                    mx-auto
                ">

                    <AlertTriangle
                        size={32}
                        className="
                            text-red-600
                            dark:text-red-400
                        "
                    />

                </div>

                

                <h2 className="
                    text-3xl
                    font-bold

                    text-center

                    mt-6

                    text-slate-800
                    dark:text-white
                ">

                    Something went wrong

                </h2>

                

                <p className="
                    text-center

                    mt-3

                    text-slate-500
                    dark:text-slate-400
                ">

                    We couldn't load the requested data.

                </p>

                

                <div className="
                    mt-6

                    p-4

                    rounded-2xl

                    bg-red-50
                    dark:bg-red-900/20

                    border

                    border-red-100
                    dark:border-red-800
                ">

                    <p className="
                        text-sm
                        text-center

                        text-red-600
                        dark:text-red-300
                    ">

                        {error}

                    </p>

                </div>

                

                <button
                    onClick={() =>
                        window.location.reload()
                    }

                    className="
                        w-full

                        mt-6

                        flex
                        items-center
                        justify-center
                        gap-2

                        py-3

                        rounded-2xl

                        bg-red-600
                        hover:bg-red-700

                        text-white
                        font-semibold

                        transition-colors
                    "
                >

                    <RefreshCw
                        size={18}
                    />

                    Retry

                </button>

            </div>

        </div>
    );
};

export default ErrorMessage;