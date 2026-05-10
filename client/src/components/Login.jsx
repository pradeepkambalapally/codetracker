import { useState } from "react";
import axios from "axios";
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/api/users/login", {
                username: username,
                password: password
            });

            localStorage.setItem("token", response.data.token);
            alert("Login successful!");

        }catch(error){
            console.error("Login failed:", error);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

    <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h1 className="text-4xl font-bold mb-6 text-center">
            Log in to your account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Name</label>

                <input 
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full border p-3 rounded-lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>

                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
                    Log In
                </button>
            </div>
            

        </form>

    </div>

</div>
    )
}

export default Login;