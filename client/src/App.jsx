import { Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";  
import Problems from "./components/Problems"; 
import Contests from "./components/Contests";
import Profile from "./components/Profile";
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