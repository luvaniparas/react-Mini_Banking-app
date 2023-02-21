import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/adminDashboard/:userName" element={<AdminNavbar></AdminNavbar>}></Route>

        {/* <Route path="/adminDashboard/customers" element={<Customers></Customers>}></Route>
        <Route path="/adminDashboard/banks" element={<Banks></Banks>}></Route> */}

      </Routes>
    </>
  );
}

export default App;
