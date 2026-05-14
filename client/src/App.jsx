import { Routes, Route } from "react-router-dom"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard"
import Problems from "./pages/Problems"; 
import Contests from "./pages/Contests";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import Settings from "./pages/Settings";
import useTheme from "./hooks/useTheme";
function App() {
    useTheme();
  return (
    <>
      =
    <Routes>


    <Route
        path="/"
        element={
            <ProtectedRoutes>

                <div className="flex">

                    <Sidebar />
                    <Dashboard />

                </div>

            </ProtectedRoutes>
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

    

    <Route
        path="/problems"
        element={

            <ProtectedRoutes>

                <div className="flex">

                    <Sidebar />
                    <Problems />

                </div>

            </ProtectedRoutes>
        }
    />


    <Route
        path="/contests"
        element={

            <ProtectedRoutes>

                <div className="flex">

                    <Sidebar />
                    <Contests />

                </div>

            </ProtectedRoutes>
        }
    />

   

    <Route
        path="/profile"
        element={

            <ProtectedRoutes>

                <div className="flex">

                    <Sidebar />
                    <Profile />

                </div>

            </ProtectedRoutes>
        }
    />
        <Route
    path="/settings"
    element={

        <ProtectedRoutes>

            <div className="flex">

                <Sidebar />
                <Settings />

            </div>

        </ProtectedRoutes>
    }
/>
</Routes>
    </>

  )
}

export default App