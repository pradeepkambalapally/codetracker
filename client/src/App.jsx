import { Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";  
import Problems from "./components/Problems"; 
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
       <Route path="/problems" element={<Problems />} />

    </Routes>
    </>

  )
}

export default App