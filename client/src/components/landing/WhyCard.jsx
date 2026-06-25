const WhyCard = ({
    title,
    description,
    icon
}) => {

    return (

        <div className="
            rounded-3xl

            p-6

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            shadow-sm

            hover:-translate-y-1
            hover:shadow-lg

            transition-all
            duration-300
        ">

            <div className="
                w-14
                h-14

                rounded-2xl

                bg-blue-100
                dark:bg-blue-900/30

                flex
                items-center
                justify-center

                text-blue-600
                dark:text-blue-400
            ">

                {icon}

            </div>

            <h3 className="
                mt-6

                text-xl
                font-bold

                text-slate-800
                dark:text-white
            ">

                {title}

            </h3>

            <p className="
                mt-3

                leading-7

                text-slate-500
                dark:text-slate-400
            ">

                {description}

            </p>

        </div>

    );

};

export default WhyCard;