import axios from 'axios';
import React,{useEffect, useState} from 'react'
import ReactLoading from "react-loading";

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Transaction from '../Transaction/Transaction';


function Account(props) {

    const id = props.id;

    const [loading,setLoading] = useState(false);
    const [accounts,setAccounts] = useState([]);
    const [amount,setAmount] = useState();
    const [selectedAccount,setSelectedAccount] = useState();
    const [showTransactionModel, setShowTransactionModel] = useState(false);
    const [showPassbookModel, setShowPassbookModel] = useState(false);

    useEffect(()=>{
        getAccounts();
    },[])

    async function getAccounts() {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:5000/api/v1/bank-app/accounts`,{
            params : {customerID: id}
          });

          setAccounts(response.data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log("Error In getting the Accounts ",error);
        }
    }

    async function depositIntoAccount(){
        try {
            await axios.post(`http://localhost:5000/api/v1/bank-app/accounts/${selectedAccount.id}/deposit`,{
                data : {amount:amount, bankID: selectedAccount.bankID}
            });
            alert(`Amount Deposited Successfully!`);
        } catch (error) {
            console.log("Error In Deposit to Accounts ",error);
        }
    }

    async function withdrawIntoAccount(){
        try {
            await axios.post(`http://localhost:5000/api/v1/bank-app/accounts/${selectedAccount.id}/withdraw`,{
                data : {amount:amount, bankID: selectedAccount.bankID}
            });
            alert(`Amount Withdraw Successfully!`);
        } catch (error) {
            console.log("Error In Withdraw to Accounts ",error);
        }
    }

    function setTransactionModel(account){
        setSelectedAccount(account);
        setShowTransactionModel(true);
    }

    function setPassbookData(account){
        setSelectedAccount(account);
        setShowPassbookModel(true)
    }

    function resetTransactionModal(){
        setShowTransactionModel(false);
        setSelectedAccount();
        setAmount();
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
                <h2 className="header"><Badge bg="secondary">Account List</Badge></h2>

                <Table striped className="c-table">
                <thead>
                  <tr>
                    <th>Account Name</th>
                    <th>Balance</th>
                    <th>Transaction</th>
                    <th>PassBook</th>
                  </tr>
                </thead>

                <tbody>
                  {accounts.map(account =>
                    (
                      <tr>
                        <td>{account.accountName}</td>
                        <td>{account.balance}</td>
                        <td><Button variant="primary" onClick={()=>{setTransactionModel(account)}}>Transaction</Button></td>
                        <td><Button variant="success" onClick={()=>{setPassbookData(account)}}>PassBook</Button></td>
                      </tr>
                     )
                  )}
                </tbody>
                </Table>

                {/* transaction Modal */}
                <Modal show={showTransactionModel} onHide={()=>{resetTransactionModal()}}>

                <Modal.Header closeButton>
                    <Modal.Title>Perform Transaction</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Enter Amount"
                        autoFocus
                        onChange={(e) => setAmount(e.target.value) }
                        value={amount}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={()=>{depositIntoAccount()}}>
                    Deposit
                  </Button>
                    <Button Button variant="primary" onClick={()=>{withdrawIntoAccount()}}>
                        Withdrawal
                    </Button>
                    </Modal.Footer>
                </Modal>

                {/* passbook Modal */}
                {showPassbookModel === true && <Transaction account={selectedAccount.id}/>}
            </>
          )
      }
}

export default Account