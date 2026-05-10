
// import Register from "./Register";
// import Login from "./Login";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white h-screen p-4">
            <h1 className="text-2xl font-bold mb-6">CodeTracker</h1>
            <nav className="space-y-4">
                <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
                <Link to="/problems" className="block py-2 px-4 rounded hover:bg-gray-700">Problems</Link>
                <Link to="/contests" className="block py-2 px-4 rounded hover:bg-gray-700">Contests</Link>
                <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</Link>
                <Link to="/calender" className="block py-2 px-4 rounded hover:bg-gray-700">Calender</Link>
                <Link to="/login" className="block py-2 px-4 rounded hover:bg-gray-700">Login</Link>
                <Link to="/register" className="block py-2 px-4 rounded hover:bg-gray-700">Register</Link>
                <Link to="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</Link>

            </nav>
        </div>
    )
}

export default Sidebar;