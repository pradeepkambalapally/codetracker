import {
    Routes,
    Route
} from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import Contests from "./pages/Contests";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import LandingPage from "./pages/LandingPage";

import useTheme from "./hooks/useTheme";

function App() {

    useTheme();

    return (

        <Routes>
            <Route path ="/home" element =  {<LandingPage />} />
            <Route
                path="/"
                element={
                    <AppLayout>
                        <Dashboard />
                    </AppLayout>
                }
            />

            <Route
                path="/problems"
                element={
                    <AppLayout>
                        <Problems />
                    </AppLayout>
                }
            />

            <Route
                path="/contests"
                element={
                    <AppLayout>
                        <Contests />
                    </AppLayout>
                }
            />

            <Route
                path="/profile"
                element={
                    <AppLayout>
                        <Profile />
                    </AppLayout>
                }
            />

            <Route
                path="/settings"
                element={
                    <AppLayout>
                        <Settings />
                    </AppLayout>
                }
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

        </Routes>

    );

}

export default App;