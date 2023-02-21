import React,{useState} from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Customers from '../Customers/Customers';
import Banks from '../Banks/Banks';

function AdminNavbar() {
  const userName = useParams().userName;

  const [selectedPage,setSelectedPage] = useState("customers");

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>{userName}</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link onClick={()=>{setSelectedPage("customers")}}>Customers</Nav.Link>
            <Nav.Link onClick={()=>{setSelectedPage("banks")}}>Banks</Nav.Link>
          </Nav>

        </Container>
      </Navbar>

      {selectedPage === "customers" && <Customers/>}
      {selectedPage === "banks" && <Banks/>}
      <br />
    </>
  );
}

export default AdminNavbar;