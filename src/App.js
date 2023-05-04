// import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Admin/Dashboard";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
