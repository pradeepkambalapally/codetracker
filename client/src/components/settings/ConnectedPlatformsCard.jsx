import { useEffect, useState } from "react";

import api from "../../api/axios";

import PlatformCard from "./PlatformCard";

import codeforcesLogo from "../../assets/codeforces.png";
import leetcodeLogo from "../../assets/leetcode.png";
import codechefLogo from "../../assets/codechef.png";

const ConnectedPlatformsCard = ({
    user
}) => {

    const [
        editingPlatform,
        setEditingPlatform
    ] = useState(null);

    

    const [
        handles,
        setHandles
    ] = useState({

        codeforcesUsername: "",

        leetcodeUsername: "",

        codechefHandle: ""
    });

    
    const [
        savedHandles,
        setSavedHandles
    ] = useState({

        codeforcesUsername: "",

        leetcodeUsername: "",

        codechefHandle: ""
    });

   

    useEffect(() => {

        if (!user?.username) return;

        const userHandles = {

            codeforcesUsername:
                user.codeforcesUsername || "",

            leetcodeUsername:
                user.leetcodeUsername || "",

            codechefHandle:
                user.codechefHandle || ""
        };

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHandles(userHandles);

        setSavedHandles(userHandles);

    }, [user]);

    
    const handleChange = (
        key,
        value
    ) => {

        setHandles((prev) => ({

            ...prev,

            [key]: value
        }));
    };

    

    const handleSave = async (
        key
    ) => {

        try {

            const response =
                await api.put(
                    "/users/update-profile",
                    {
                        [key]:
                            handles[key]
                    }
                );

            const updatedUser =
                response.data.user;

            const updatedHandles = {

                codeforcesUsername:
                    updatedUser.codeforcesUsername || "",

                leetcodeUsername:
                    updatedUser.leetcodeUsername || "",

                codechefHandle:
                    updatedUser.codechefHandle || ""
            };

            setSavedHandles(
                updatedHandles
            );

            setHandles(
                updatedHandles
            );

            setEditingPlatform(
                null
            );

            alert(
                "Handle updated successfully!"
            );

        } catch (error) {

            console.error(
                "Update failed:",
                error
            );

        }
    };

   

    const platforms = [

        {
            name: "Codeforces",
            key: "codeforcesUsername",
            connected:
                !!savedHandles.codeforcesUsername,
            status:
                savedHandles.codeforcesUsername
                    ? "Connected"
                    : "Available",
            value:
                savedHandles.codeforcesUsername,
            available: true,
            logo: codeforcesLogo
        },

        {
            name: "LeetCode",
            key: "leetcodeUsername",
            connected:
                !!savedHandles.leetcodeUsername,
            status:
                "Coming Soon",
            value:
                savedHandles.leetcodeUsername,
            available: false,
            logo: leetcodeLogo
        },

        {
            name: "CodeChef",
            key: "codechefHandle",
            connected:
                !!savedHandles.codechefHandle,
            status:
                "Coming Soon",
            value:
                savedHandles.codechefHandle,
            available: false,
            logo: codechefLogo
        }
    ];
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
    ">

        

        <div className="mb-8">

            <h2 className="
                text-2xl
                font-bold

                text-slate-800
                dark:text-white
            ">

                Connected Platforms

            </h2>

            <p className="
                mt-2

                text-slate-500
                dark:text-slate-400
            ">

                Manage your competitive programming accounts

            </p>

        </div>

        

        <div className="space-y-5">

            {

            platforms.map(
                (
                    platform
                ) => (

                <PlatformCard

                    key={
                        platform.name
                    }

                    platform={
                        platform
                    }

                    editingPlatform={
                        editingPlatform
                    }

                    setEditingPlatform={
                        setEditingPlatform
                    }

                    handles={
                        handles
                    }

                    handleChange={
                        handleChange
                    }

                    handleSave={
                        handleSave
                    }

                />

                )
            )

            }

        </div>

    </div>
);
};

export default ConnectedPlatformsCard;