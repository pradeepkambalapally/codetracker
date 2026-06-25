const FeatureCard = ({
    icon,
    title,
    description
}) => {

    return (

        <div className="
            p-6

            rounded-3xl

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700
        ">

            <div className="mb-4">
                {icon}
            </div>

            <h3 className="
                text-xl
                font-bold

                text-slate-800
                dark:text-white
            ">
                {title}
            </h3>

            <p className="
                mt-3

                text-slate-500
                dark:text-slate-400
            ">
                {description}
            </p>

        </div>

    );

};

export default FeatureCard;