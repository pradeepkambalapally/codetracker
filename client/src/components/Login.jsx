import { useState } from "react";
import axios from "axios";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:3000/api/users/login",
                {
                    username,
                    password
                }
            );

            localStorage.setItem("token", response.data.token);

            alert("Login successful!");
                navigate("/");

        } catch (error) {

            console.error("Login failed:", error);

        }
    };

    return (

        <div className="flex-1 min-h-screen bg-gray-100 flex items-center justify-center p-6">

            <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">

                {/* Header */}

                <div className="flex flex-col items-center mb-8">

                    <div className="bg-blue-100 p-4 rounded-2xl mb-4">

                        <LogIn
                            className="text-blue-600"
                            size={32}
                        />

                    </div>

                    <h1 className="text-4xl font-bold text-gray-800">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2 text-center">
                        Login to continue tracking your coding journey
                    </p>

                </div>

                {/* Form */}

                <form
                    className="space-y-5"
                    onSubmit={handleSubmit}
                >

                    {/* Username */}

                    <div>

                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Username
                        </label>

                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your username"
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>

                    {/* Password */}

                    <div>

                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                    {/* Button */}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200"
                    >
                        Log In
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Login;