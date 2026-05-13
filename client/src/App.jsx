import { Routes, Route } from "react-router-dom"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard"
import Problems from "./pages/Problems"; 
import Contests from "./pages/Contests";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
      =
     <Routes>

      <Route path="/" element={
        <div className="flex">
        <Sidebar />
        <Dashboard />
        </div>
      } />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/problems" element={
         <div className="flex">
         <Sidebar />
         <Problems />
         </div>
       } />

       <Route path="/contests" element={
         <div className="flex">
         <Sidebar />
         <Contests />
         </div>
       } />

       <Route path="/profile" element={
         <div className="flex">
         <Sidebar />
         <Profile />
         </div>
       } />





    </Routes>
    </>

  )
}

export default App