import { Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";   
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

    </Routes>
    </>

  )
}

export default App