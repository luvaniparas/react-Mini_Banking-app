import React from 'react'

import { useParams,useNavigate } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Account from '../Account/Account';

function User() {
  const navigate = useNavigate();
  const userName = useParams().userName;
  const userId = useParams().id;

  function redirectToLogin(){
    navigate(`/`);
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>{userName}</Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Button variant="light" onClick={redirectToLogin}>Logout</Button>{' '}
            </Navbar.Collapse>
        </Container>
      </Navbar>

      <Account id={userId}/>
    </>
  )
}

export default User