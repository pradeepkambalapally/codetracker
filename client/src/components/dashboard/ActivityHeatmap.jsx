import CalendarHeatmap from "react-calendar-heatmap";

import {
    subDays
} from "date-fns";

const ActivityHeatmap = ({
    heatmapData = []
}) => {

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            rounded-3xl

            p-6

            shadow-sm

            border
            border-slate-200
            dark:border-slate-700

            mt-6
        ">

            <h2 className="
                text-2xl
                font-bold

                text-slate-800
                dark:text-white
            ">

                Activity Heatmap

            </h2>

            <p className="
                mt-2
                mb-4

                text-slate-500
                dark:text-slate-400
            ">

                Combined coding activity across all platforms

            </p>

            <div className="
                overflow-x-auto
            ">

                <CalendarHeatmap

                    startDate={
                        subDays(
                            new Date(),
                            365
                        )
                    }

                    endDate={
                        new Date()
                    }

                    values={
                        heatmapData
                    }

                    titleForValue={(value) => {

                        if (!value) {

                            return "No submissions";

                        }

                        return `${value.count} submissions on ${value.date}`;

                    }}

                    classForValue={(value) => {

                        if (!value) {

                            return "color-empty";

                        }

                        if (value.count >= 15) {

                            return "color-github-4";

                        }

                        if (value.count >= 8) {

                            return "color-github-3";

                        }

                        if (value.count >= 4) {

                            return "color-github-2";

                        }

                        return "color-github-1";

                    }}

                    showWeekdayLabels

                />

            </div>

            <div className="
                flex
                items-center
                justify-end
                gap-2
                mt-4

                text-sm

                text-slate-500
                dark:text-slate-400
            ">

                <span>Less</span>

                <div className="
                    w-3
                    h-3
                    rounded-sm
                    color-empty
                " />

                <div className="
                    w-3
                    h-3
                    rounded-sm
                    color-github-1
                " />

                <div className="
                    w-3
                    h-3
                    rounded-sm
                    color-github-2
                " />

                <div className="
                    w-3
                    h-3
                    rounded-sm
                    color-github-3
                " />

                <div className="
                    w-3
                    h-3
                    rounded-sm
                    color-github-4
                " />

                <span>More</span>

            </div>

        </div>

    );

};

export default ActivityHeatmap;