import { useState } from "react";
import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
const Register = () => {
    
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/users/register",
                {
                    username,
                    password
                }
            );

            alert("Registration successful!");

            navigate("/login");

        } catch (error) {

            console.error(
                "Registration failed:",
                error
            );
        }  
    };
    return (

    <div className="
        flex-1
        min-h-screen

        flex
        items-center
        justify-center

        p-6

        bg-gray-100
        dark:bg-slate-900

        transition-colors
    ">

        <div className="
            w-full
            max-w-md

            p-8

            rounded-3xl

            shadow-xl

            bg-white
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700
        ">

           
            <div className="
                flex
                flex-col
                items-center

                mb-8
            ">

                <div className="
                    bg-blue-100
                    dark:bg-blue-900/40

                    p-4
                    rounded-2xl
                    mb-4
                ">

                    <UserPlus
                        className="
                            text-blue-600
                            dark:text-blue-300
                        "
                        size={32}
                    />

                </div>

                <h1 className="
                    text-4xl
                    font-bold

                    text-gray-800
                    dark:text-white
                ">

                    Create an Account

                </h1>

                <p className="
                    mt-2
                    text-center

                    text-gray-500
                    dark:text-slate-400
                ">

                    Register to continue tracking your coding journey

                </p>

            </div>

            {/* Form */}

            <form
                className="space-y-5"
                onSubmit={handleSubmit}
            >

                

                <div>

                    <label
                        htmlFor="name"
                        className="
                            block
                            mb-2

                            text-sm
                            font-semibold

                            text-gray-700
                            dark:text-slate-300
                        "
                    >

                        Username

                    </label>

                    <input
                        type="text"
                        id="name"

                        placeholder="Enter your username"

                        value={username}

                        onChange={(e)=>
                            setUsername(
                                e.target.value
                            )
                        }

                        className="
                            w-full

                            p-3

                            rounded-xl

                            border
                            border-gray-300
                            dark:border-slate-600

                            bg-white
                            dark:bg-slate-700

                            text-gray-800
                            dark:text-white

                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />

                </div>

                
                <div>

                    <label
                        htmlFor="password"
                        className="
                            block
                            mb-2

                            text-sm
                            font-semibold

                            text-gray-700
                            dark:text-slate-300
                        "
                    >

                        Password

                    </label>

                    <input
                        type="password"
                        id="password"

                        placeholder="Enter your password"

                        value={password}

                        onChange={(e)=>
                            setPassword(
                                e.target.value
                            )
                        }

                        className="
                            w-full

                            p-3

                            rounded-xl

                            border
                            border-gray-300
                            dark:border-slate-600

                            bg-white
                            dark:bg-slate-700

                            text-gray-800
                            dark:text-white

                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />

                </div>

               

                <button
                    type="submit"

                    className="
                        w-full

                        p-3

                        rounded-xl

                        font-semibold

                        text-white

                        bg-blue-600
                        hover:bg-blue-700

                        transition-all
                        duration-200
                    "
                >

                    Create Account

                </button>

            </form>

        </div>

    </div>
);
   
}
export default Register;