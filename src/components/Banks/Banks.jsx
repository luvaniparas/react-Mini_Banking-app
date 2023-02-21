import React,{useEffect, useState} from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ReactLoading from "react-loading";
import ToggleButton from 'react-bootstrap/ToggleButton'

import './Banks.css'

function Banks() {

  useEffect(()=>{
    getBanks();
  },[])

  const [loading,setLoading] = useState(false);
  const [banks,setBanks] = useState([]);

  const [show, setShow] = useState(false);
  const [name,setName] = useState("");

  const handleFormClose = () => setShow(false);
  const handleFormShow = () => setShow(true);

  async function getBanks() {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/bank-app/accounts/`);
    //   {
    //     "id": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
    //     "accountName": "shailesh hdfc bank",
    //     "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
    //     "customerID": "e45b93a3-39a5-4492-91d5-1513cce6d09e",
    //     "balance": 5800
    // }

      setBanks(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error In getting the Banks ",error);
    }
  }

  async function createBank(e) {
    e.preventDefault();

    try {
      // await axios.post(`http://localhost:5000/api/v1/bank-app/customers`,{
      //   firstName,lastName,email,password,balance
      // });

      handleFormClose();
      alert(`Successfully Saved`);
    } catch (error) {
      console.log("Error In saving Bank ",error);
    }
  }

  async function updateBanks(bankId,name) {
    handleFormShow();

    try {
      setName(name);

      // await axios.put(`http://localhost:5000/api/v1/bank-app/accounts/${bankId}`,{});

      console.log(`Bank Updated`);
    } catch (error) {
      console.log("Error In updating the Bank ",error);
    }
  }

  async function deleteBanks() {
    try {
      // await axios.delete(`http://localhost:5000/api/v1/bank-app/customers/${id}}`);

      alert(`Bank Deleted !`);
    } catch (error) {
      console.log("Error In deleting the Bank ",error);
    }
  }

  function resetForm(){
    setName("");

    handleFormClose();
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
          <h2 className="header"><Badge bg="secondary">Bank List</Badge></h2>

          <Button variant="primary" className="c-addCustomer" onClick={handleFormShow}>
            Add Bank
          </Button>

          <Table striped className="c-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Balance</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {banks.map(bank =>
                (
                  <tr>
                    <td>{bank.accountName}</td>
                    <td>{bank.balance}</td>
                    <td><Button variant="warning" onClick= {()=> {updateBanks(bank.bankID,bank.accountName)}}>Update</Button></td>
                    <td><Button variant="danger" onClick= {()=> {deleteBanks()}}>Delete</Button></td>
                  </tr>
                 )
              )}
            </tbody>
          </Table>

        <Modal show={show} onHide={resetForm}>
          <Modal.Header closeButton>
            <Modal.Title>Bank Form</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Bank Name here"
                  autoFocus
                  onChange={(e) => setName(e.target.value) }
                  value={name}
                />
              </Form.Group>

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={resetForm}>
              Close
            </Button>

            <Button variant="primary" onClick={createBank}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

}

export default Banks