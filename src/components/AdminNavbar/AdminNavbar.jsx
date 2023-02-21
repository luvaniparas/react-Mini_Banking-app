import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Navbar from 'react-bootstrap/Navbar';
import Customers from '../Customers/Customers';
import Banks from '../Banks/Banks';



function AdminNavbar() {

  const navigate = useNavigate();
  const userName = useParams().userName;

  const [selectedPage,setSelectedPage] = useState("customers");

  function redirectToLogin(){
    navigate(`/`);
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>{userName}</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link onClick={()=>{setSelectedPage("customers")}}>Customers</Nav.Link>
            <Nav.Link onClick={()=>{setSelectedPage("banks")}}>Banks</Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Button variant="light" onClick={redirectToLogin}>Logout</Button>{' '}
            </Navbar.Collapse>
        </Container>
      </Navbar>

      {selectedPage === "customers" && <Customers/>}
      {selectedPage === "banks" && <Banks/>}
      <br />
    </>
  );
}

export default AdminNavbar;