const EmptyState = ({

    title,

    description

}) => {

    return (

        <div className="
            flex-1
            min-h-screen

            flex
            items-center
            justify-center

            px-4
            py-6

            bg-slate-100
            dark:bg-slate-900

            transition-colors
        ">

            <div className="
                w-full
                max-w-md

                p-6
                sm:p-8

                rounded-3xl

                text-center

                bg-white
                dark:bg-slate-800

                border
                border-slate-200
                dark:border-slate-700

                shadow-sm
            ">

                <h2 className="
                    text-2xl
                    sm:text-3xl

                    font-bold

                    text-slate-800
                    dark:text-white
                ">

                    {title}

                </h2>

                <p className="
                    mt-3

                    text-sm
                    sm:text-base

                    leading-relaxed

                    text-slate-500
                    dark:text-slate-400
                ">

                    {description}

                </p>

            </div>

        </div>

    );

};

export default EmptyState;