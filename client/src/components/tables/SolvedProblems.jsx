import {
    CheckCircle2,
    ArrowRight,
    ExternalLink
} from "lucide-react";

import {
    useNavigate
} from "react-router-dom";

const SolvedProblems = ({
    problems
}) => {

    const navigate =
        useNavigate();

    return (

        <div className="
            bg-white
            dark:bg-slate-800

            p-6

            rounded-3xl

            shadow-sm

            border
            border-slate-200
            dark:border-slate-700
        ">

            

            <div className="
                flex
                items-center
                justify-between
                mb-6
            ">

                <div className="
                    flex
                    items-center
                    gap-3
                ">

                    <div className="
                        bg-blue-100
                        dark:bg-blue-900/40

                        p-3

                        rounded-2xl
                    ">

                        <CheckCircle2
                            className="
                            text-blue-600
                            dark:text-blue-400
                            "
                            size={22}
                        />

                    </div>

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            text-slate-800
                            dark:text-white
                        ">

                            Solved Problems

                        </h2>

                        <p className="
                            text-sm
                            mt-1
                            text-slate-500
                            dark:text-slate-400
                        ">

                            Your latest accepted submissions

                        </p>

                    </div>

                </div>

                <button

                    onClick={() => {

                        navigate(
                            "/problems"
                        );

                    }}

                    className="
                    flex
                    items-center
                    gap-2

                    text-sm
                    font-semibold

                    text-blue-600
                    hover:text-blue-700

                    dark:text-blue-400
                    dark:hover:text-blue-300

                    transition-colors
                    "
                >

                    View All

                    <ArrowRight
                        size={16}
                    />

                </button>

            </div>

            

            <div className="
                overflow-x-auto
            ">

                <table className="
                    w-full
                    min-w-[900px]
                ">

                    

                    <thead>

                        <tr className="
                            border-b
                            border-slate-200
                            dark:border-slate-700

                            text-left
                        ">

                            {

                            [
                                "#",
                                "Problem",
                                "Contest",
                                "Tags",
                                "Rating",
                                "Language",
                                "Solved At",
                                "Action"

                            ].map(

                                (
                                    item
                                ) => (

                                <th
                                    key={item}

                                    className="
                                    pb-4

                                    text-sm
                                    font-semibold

                                    text-slate-500
                                    dark:text-slate-400
                                    "
                                >

                                    {item}

                                </th>

                                ))

                            }

                        </tr>

                    </thead>

                    

                    <tbody>

                        {

                        problems.map(

                        (
                            problem,
                            index
                        ) => (

                            <tr

                                key={index}

                                className="
                                border-b
                                border-slate-100
                                dark:border-slate-700

                                last:border-none

                                hover:bg-slate-50
                                dark:hover:bg-slate-700/40

                                transition-colors
                                "
                            >

                                <td className="
                                    py-3
                                    font-medium

                                    text-slate-500
                                    dark:text-slate-400
                                ">

                                    {index+1}

                                </td>

                                <td className="
                                    py-3
                                    pr-6
                                ">

                                    <p className="
                                        font-semibold
                                        text-slate-800
                                        dark:text-white
                                    ">

                                        {
                                            problem.problemName
                                        }

                                    </p>

                                </td>

                                <td className="
                                    py-3
                                ">

                                    <span className="
                                        font-medium

                                        text-slate-600
                                        dark:text-slate-300
                                    ">

                                        {
                                            problem.contestId
                                        }

                                        {
                                            problem.problemIndex
                                        }

                                    </span>

                                </td>

                                <td className="
                                    py-3
                                ">

                                    <div className="
                                        flex
                                        flex-wrap
                                        gap-2
                                    ">

                                    {

                                    problem.tags
                                    .slice(0,2)
                                    .map(

                                    (
                                        tag,
                                        idx
                                    ) => (

                                    <span

                                        key={idx}

                                        className="
                                        bg-blue-100
                                        dark:bg-blue-900/40

                                        text-blue-600
                                        dark:text-blue-300

                                        text-xs
                                        font-medium

                                        px-2.5
                                        py-1

                                        rounded-full
                                        whitespace-nowrap
                                        "
                                    >

                                        {tag}

                                    </span>

                                    ))

                                    }

                                    </div>

                                </td>

                                <td className="
                                    py-3
                                ">

                                    <span className="
                                        bg-yellow-100
                                        dark:bg-yellow-900/40

                                        text-yellow-700
                                        dark:text-yellow-300

                                        text-sm
                                        font-semibold

                                        px-3
                                        py-1

                                        rounded-full
                                    ">

                                        {

                                        problem.rating
                                        ? problem.rating
                                        : "-"

                                        }

                                    </span>

                                </td>

                                <td className="
                                    py-3

                                    text-sm
                                    font-medium

                                    text-slate-600
                                    dark:text-slate-300
                                ">

                                    {
                                    problem.programmingLanguage
                                    }

                                </td>

                                <td className="
                                    py-4

                                    text-sm

                                    text-slate-600
                                    dark:text-slate-300
                                ">

                                    {
                                        problem.submissionTime
                                    }

                                </td>

                                <td className="
                                    py-3
                                ">

                                    <a

                                        href={
                                            problem.problemLink
                                        }

                                        target="_blank"

                                        rel="noreferrer"

                                        className="
                                        inline-flex
                                        items-center
                                        justify-center

                                        w-9
                                        h-9

                                        rounded-xl

                                        border
                                        border-slate-200
                                        dark:border-slate-600

                                        hover:bg-slate-100
                                        dark:hover:bg-slate-700

                                        transition-colors
                                        "
                                    >

                                        <ExternalLink

                                            size={16}

                                            className="
                                            text-slate-600
                                            dark:text-slate-300
                                            "
                                        />

                                    </a>

                                </td>

                            </tr>

                        ))

                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default SolvedProblems;