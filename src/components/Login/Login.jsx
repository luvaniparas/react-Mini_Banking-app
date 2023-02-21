import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  // const [username,setUsername]= useState("");
  // const [password,setPassword]= useState("");

  const [username, setUsername] = useState("shailesh@admin.com");
  const [password, setPassword] = useState("admin");

  // const [username, setUsername] = useState("shailesh@sbi.com");
  // const [password, setPassword] = useState("sbi");
  let userData = [];
  const userRoles = {
    ADMIN : "admin",
    CUSTOMER : "Customer"
  };

  async function login(e){
    e.preventDefault();

    try {
      let res = await axios.post(`http://localhost:5000/api/v1/bank-app/auth/login`,{username,password});
      userData = res.data;
      // {id: '7a6552d6-ebea-4e33-ac0c-f375922da187', username: 'shailesh@admin.com', roleName: 'admin'}
    } catch (error) {
      console.log("Login Error :: ",error);
    }

    if(userData.roleName === userRoles.ADMIN){
      navigate(`/adminDashboard/${userData.username}`);
    }else if(userData.roleName === userRoles.CUSTOMER){
      navigate(`/userDashboard/${userData.username}`);
    }else{
      alert("Bad User");
    }
  }

  return (
    <>
    <Form onSubmit={login}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={username}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Login;