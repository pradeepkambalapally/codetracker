const Loading = () => {

    return (

        <div className="
            flex-1
            min-h-screen

            flex
            flex-col

            items-center
            justify-center

            bg-slate-100
            dark:bg-slate-900

            transition-colors
        ">

            <div className="
                w-16
                h-16

                border-4

                border-blue-200
                dark:border-blue-900

                border-t-blue-600
                dark:border-t-blue-400

                rounded-full

                animate-spin
            ">

            </div>

            <p className="
                mt-4
                text-lg
                font-medium

                text-slate-600
                dark:text-slate-300
            ">

                Loading...

            </p>

        </div>

    );
};

export default Loading;