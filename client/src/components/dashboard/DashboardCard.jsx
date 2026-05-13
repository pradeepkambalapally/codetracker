import {
    CheckCircle,
    Trophy,
    Star,
    Flame
} from "lucide-react";

const Card = ({ problems, profileStats, contests }) => {

    const cardData = [
        {
            title: "Solved Problems",
            value: problems.length,
            subtitle: "Across all time",
            icon: CheckCircle,
            border: "border-blue-500",
            bg: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            title: "Contests Attended",
            value: contests.length,
            subtitle: "Rated contests",
            icon: Trophy,
            border: "border-purple-500",
            bg: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            title: "Highest Rating",
            value: profileStats?.maxRating || "Unrated",
            subtitle: "Keep grinding!",
            icon: Star,
            border: "border-yellow-500",
            bg: "bg-yellow-100",
            iconColor: "text-yellow-600"
        },
        {
            title: "Current Streak",
            value: "5 Days",
            subtitle: "Keep it up!",
            icon: Flame,
            border: "border-red-500",
            bg: "bg-red-100",
            iconColor: "text-red-600"
        }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {
                cardData.map((card, index) => {

                    const Icon = card.icon;

                    return (

                        <div
                            key={index}
                            className={`bg-white rounded-3xl border ${card.border} border-l-4 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                        >

                            <div className="flex items-start justify-between">

                                {/* Left Content */}

                                <div>

                                    <p className="text-slate-500 text-sm font-medium">

                                        {card.title}

                                    </p>

                                    <h2 className="text-4xl font-bold text-slate-800 mt-3">

                                        {card.value}

                                    </h2>

                                    <p className={`text-sm mt-3 font-medium ${card.iconColor}`}>

                                        {card.subtitle}

                                    </p>

                                </div>

                                {/* Icon */}

                                <div className={`${card.bg} p-4 rounded-2xl`}>

                                    <Icon
                                        className={card.iconColor}
                                        size={28}
                                    />

                                </div>

                            </div>

                        </div>
                    );
                })
            }

        </div>
    );
};

export default Card;