import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
// import Customers from "./components/Customers/Customers"
// import Banks from './components/Banks/Banks';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/adminDashboard/:userName" element={<AdminNavbar></AdminNavbar>}></Route>

        {/* <Route path="/adminDashboard/customers" element={<Customers></Customers>}></Route>
        <Route path="/adminDashboard/banks" element={<Banks></Banks>}></Route> */}

        {/* <Route path="/navbar/userDashboard" element={<Navbar></Navbar>}></Route> */}
        {/* <Route path="/adminDashboard/:adminData" element={<AdminDashboard/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
