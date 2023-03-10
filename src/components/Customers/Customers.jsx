// {
//     "firstName": "shailesh",
//     "lastName": "b",
//     "email": "shailesh@sbi.com",
//     "balance": 8200,
//     "accounts": [],
//     "id": "e45b93a3-39a5-4492-91d5-1513cce6d09e",
//     "credential": {
//         "id": "e45b93a3-39a5-4492-91d5-1513cce6d09e",
//         "username": "shailesh@sbi.com",
//         "password": null,
//         "roleName": "Customer",
//         "isActive": true
//     }
// }
import React,{useEffect, useState} from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ReactLoading from "react-loading";

import './Customers.css'

function Customers() {

  useEffect(()=>{
    getCustomers();
  },[])

  const [loading,setLoading] = useState(false);
  const [customers,setCustomers] = useState([]);
  const [page,setPage] = useState(0);
  const [show, setShow] = useState(false);
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [balance,setBalance] = useState(0);
  const [showPassword,setShowPassword] = useState(true);
  const [showCustomerAccount, setShowCustomerAccount] = useState(false);
  const [accountsOfCustomer,setAccountsOfCustomer] = useState([]);

  const pagination = {
    PREVIOUS: "previous",
    NEXT: "next"
  }
  const PAGE_SIZE = 5;

  const handleFormClose = () => setShow(false);
  const handleFormShow = () => setShow(true);

  async function getCustomers() {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/bank-app/customers?limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}`);

      //[To-Do] :: pagination size
      // let totalCount = response.headers['x-total-count'];

      setCustomers(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error In getting the Customers ",error);
    }
  }

  function setPagination(value){
      if(value === pagination.NEXT){
        setPage(page+1);
      }else if(value === pagination.PREVIOUS){
        setPage(page-1);
      }
      getCustomers();
  }

  async function createCustomer(e) {
    e.preventDefault();
    setShowPassword(true);

    try {
      setBalance(0);
      await axios.post(`http://localhost:5000/api/v1/bank-app/customers`,{
        firstName,lastName,email,password,balance
      });

      handleFormClose();
      alert(`Customer Created ${email}`);
    } catch (error) {
      console.log("Error In getting the Customers ",error);
    }
  }

  async function updateCustomer(id,firstName,lastName,email) {
    handleFormShow();
    setShowPassword(false);

    try {
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);

      // await axios.put(`http://localhost:5000/api/v1/bank-app/customers`,{
      //   firstName,lastName,email,password,balance
      // });

    } catch (error) {
      console.log("Error In updating the Customers ",error);
    }
  }

  // id,firstName,lastName
  async function deleteCustomer(data) {
    console.log(data);
    try {
      // await axios.delete(`http://localhost:5000/api/v1/bank-app/customers/${id}}`);

      // alert("Customer ",firstName ," ", lastName ," Deleted !");
    } catch (error) {
      console.log("Error In deleting the Customers ",error);
    }
  }

  function resetForm(){
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBalance("");

    handleFormClose();
  }

  function openCustomer(){
    handleFormShow();
    setShowPassword(true);
  }

  async function fetchAccountsOfCustomer(customerID){
    try {
        let res = await axios.get(`http://localhost:5000/api/v1/bank-app/accounts`,{
          params: {customerID}
        });

        if(res.data.length){
          setAccountsOfCustomer(res.data);
          setShowCustomerAccount(true);
        }

      } catch (error) {
        setShowCustomerAccount(false);
        console.log("Error In getting the banks for the customer :: ",error);
      }
  }

  if(loading === true){
    return(
        <div className="spinner">
            <ReactLoading className="spinner" type="spinningBubbles" color="#0000FF" height={100} width={120}/>
        </div>
    )
  }
  else{
    return (
      <>
          <h2 className="header"><Badge bg="secondary">Customer List</Badge></h2>

          <Button variant="primary" className="c-addCustomer" onClick={openCustomer}>
            Add Customer
          </Button>

          <Table striped className="c-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Accounts</th>
              </tr>
            </thead>

            <tbody>
              {customers.map(customer =>
                (
                  <tr>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                    <td>{customer.balance}</td>
                    <td><Button variant="warning" onClick= {()=> {updateCustomer(customer.id,customer.firstName,customer.lastName,customer.email)}}>Update</Button></td>

                    {/* <td><Button variant="danger" onClick= {()=> {deleteCustomer(customer.id,customer.firstName,customer.lastName)}}>Delete</Button></td> */}
                    {/* checked="" value="" */}
                    <td>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        onChange={(e)=> {deleteCustomer(e.target.value)}}
                      />
                    </td>

                    <td><Button variant="secondary" onClick={() => { fetchAccountsOfCustomer(customer.id) }}>Accounts</Button></td>
                  </tr>
                 )
              )}
            </tbody>
          </Table>

          <Pagination className='c-pagination'>
              <Pagination.Prev onClick = {() => {setPagination(pagination.PREVIOUS)} }/>
              <Pagination.Next onClick = {() => {setPagination(pagination.NEXT)} }/>
          </Pagination>

        {/* customer Form */}
        <Modal show={show} onHide={resetForm}>
          <Modal.Header closeButton>
            <Modal.Title>New Customer</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter FirstName here"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value) }
                  value={firstName}
  
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter LastName here"
                  onChange={(e) => setLastName(e.target.value) }
                  value={lastName}
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter Email here"
                  onChange={(e) => setEmail(e.target.value) }
                  value={email}
                />
              </Form.Group>

              {showPassword
                &&
                <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter Password here"
                  onChange={(e) => setPassword(e.target.value) }
                />
              </Form.Group>
              }

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={resetForm}>
              Close
            </Button>

            <Button variant="primary" onClick={createCustomer}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        {/* {customer accounts} */}
        <Modal show={showCustomerAccount} onHide={()=>{setShowCustomerAccount(false)}}>
          <Modal.Header closeButton>
            <Modal.Title>Customer Accounts</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          {accountsOfCustomer.map((account) =>
                (
                  <div> <span>{account.accountName}</span>  <span>{account.balance}</span> </div>
                )
              )}
          </Modal.Body>
        </Modal>
      </>
    )
  }

}

export default Customers