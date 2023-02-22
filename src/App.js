import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import UserNavBar from "./components/UserNavbar/User"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/adminDashboard/:userName" element={<AdminNavbar></AdminNavbar>}></Route>
        <Route path="/userDashboard/:userName/:id" element={<UserNavBar></UserNavBar>}></Route>
      </Routes>
    </>
  );
}

export default App;
