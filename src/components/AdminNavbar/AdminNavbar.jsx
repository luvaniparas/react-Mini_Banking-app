import React from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Customers from '../Customers/Customers';

function AdminNavbar() {
  const userName = useParams().userName;

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{userName}</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link >Customers</Nav.Link>
            <Nav.Link href="#banks">Banks</Nav.Link>
            {/* <button> Customers </button>
            <button> Banks </button> */}
          </Nav>

        </Container>
      </Navbar>

      <Customers/>
      <br />
    </>
  );
}

export default AdminNavbar;