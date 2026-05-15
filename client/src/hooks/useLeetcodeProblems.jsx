import { useEffect, useState } from "react";

import api from "../api/axios";
import useUser from "./useUser";

const useLeetcodeProblems = () => {

    const {
        user,
        loading:userLoading
    } = useUser();

    const [problems, setProblems] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        if(userLoading) return;

        const fetchProblems = async () => {

            try {

                setLoading(true);

                setError("");

                if(!user){

                    setProblems([]);

                    setError(
                        "User not found"
                    );

                    return;
                }

                if(!user?.leetcodeUsername){

                    setProblems([]);

                    setError(
                        "Connect your LeetCode account in Settings"
                    );

                    return;
                }

                const response =
                    await api.get(
                        "/users/leetcode-submissions"
                    );

                if(

                    !response ||

                    !response.data ||

                    !response.data.success

                ){

                    setProblems([]);

                    setError(
                        "Invalid server response"
                    );

                    return;
                }

                const submissions =
                    response.data.submissions || [];

                if(!Array.isArray(submissions)){

                    setProblems([]);

                    setError(
                        "Invalid submissions data"
                    );

                    return;
                }

                const cleanedProblems =

                    submissions.filter(

                        (problem)=>

                            problem &&

                            problem.problemName &&

                            problem.problemLink

                    );

                setProblems(
                    cleanedProblems
                );

                if(cleanedProblems.length === 0){

                    setError(
                        "No accepted LeetCode submissions found"
                    );

                }

            }

            catch(error){

                console.log(error);

                setProblems([]);

                if(

                    error.response?.status === 401

                ){

                    setError(
                        "Unauthorized access"
                    );

                }

                else if(

                    error.response?.status === 404

                ){

                    setError(
                        "LeetCode data not found"
                    );

                }

                else if(

                    error.response?.status === 429

                ){

                    setError(
                        "Too many requests. Try again later"
                    );

                }

                else if(

                    error.code === "ERR_NETWORK"

                ){

                    setError(
                        "Network error"
                    );

                }

                else{

                    setError(

                        error.response?.data?.message ||

                        "Failed to fetch LeetCode problems"

                    );

                }

            }

            finally{

                setLoading(false);

            }

        };

        fetchProblems();

    }, [

        user,
        userLoading

    ]);

    return {

        problems:
            Array.isArray(problems)
            ? problems
            : [],

        loading,

        error

    };

};

export default useLeetcodeProblems;