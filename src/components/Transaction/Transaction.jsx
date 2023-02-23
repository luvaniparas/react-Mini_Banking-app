import axios from 'axios';
import React,{useState,useEffect} from 'react'

import Table from 'react-bootstrap/Table';

function Transaction(props) {

    // const {id} = props;

    let selectedAccount = {};
    selectedAccount.id = "e45b93a3-39a5-4492-91d5-1513cce6d09e";
    const [transactions, setTransactions] = useState([]);
    const limit = 10;
    const offset = 0;

    let data = [
        {
          "amount": 100,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "79c8a1a6-c885-4241-8269-967b84435cd5"
        },
        {
          "amount": 100,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "e9fee70e-4fa4-4843-91d6-3913dbba1172"
        },
        {
          "amount": 500,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "cb377a70-748d-4fb7-a6c3-6c79e5d8bb98"
        },
        {
          "amount": 100,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "a748a66e-3844-4a8e-a1a2-7423385c42dc"
        },
        {
          "amount": 100,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "0cd60b74-10c9-4d45-89cb-39791788fdfb"
        },
        {
          "amount": 100,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "1a474502-d6b8-4673-9723-42cc8e19c07b"
        },
        {
          "amount": 1000,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "ae8aff89-098a-4de0-b439-5c575ad83897"
        },
        {
          "amount": 500,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "ad59ce6d-d653-43d1-b071-45fc642ba53a"
        },
        {
          "amount": 200,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": "06aa8619-b8b5-4d66-973f-3e95e907dc1a",
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "52e78f96-5d03-4234-97a1-c1f6f94c7d2a"
        },
        {
          "amount": 500,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "b44c3594-42e0-45af-a5a0-bff56abb7fad"
        },
        {
          "amount": 500,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "286155e8-993a-4b32-b9e9-edd543f85250"
        },
        {
          "amount": 500,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "c39830f1-301c-461a-9795-c475569f50a0"
        },
        {
          "amount": 500,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "11bd29c0-582f-4934-abd7-a47002443ace"
        },
        {
          "amount": 500,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "4c97e307-be0b-409e-883b-39997a4c5bc6"
        },
        {
          "amount": 100,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "c3e1f028-5635-4bf2-bda8-17f4b75db10b"
        },
        {
          "amount": 100,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "2229db88-04ce-4a82-ad1c-0f47893b6a82"
        },
        {
          "amount": 55,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "b9dc34c4-516d-4ddb-a1e9-7e4cf1b89a14"
        },
        {
          "amount": 125,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "4001cdf3-57be-4ac8-9acc-233534371321"
        },
        {
          "amount": 140,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "d8c7b94c-06a7-4515-a0d2-60e6581d44f4"
        },
        {
          "amount": 501,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "86f84704-3def-481e-8c5e-ce523c992b5e"
        },
        {
          "amount": 501,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "5b202c5c-7e01-453b-b486-faa4dfd71f36"
        },
        {
          "amount": 500,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Deposit",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "423c449c-e37b-455b-bed4-dfc87a12aa00"
        },
        {
          "amount": 101,
          "fromAccountID": "093df91a-d8f4-4c44-b4e7-ce05d9519c25",
          "toAccountID": null,
          "date": "2023-02-22T13:08:19.014Z",
          "type": "Withdraw",
          "bankID": "0851c433-f43c-4d78-ad83-9143d566672f",
          "id": "29f3a303-76f4-4dbf-998d-e549fb8816ed"
        }
      ]

    useEffect(()=>{
        getAccountTransactions();
    },[])

    async function getAccountTransactions(){
        setTransactions(data);
           try {
        const response = await axios.get(`http://localhost:5000/api/v1/bank-app/accounts/${selectedAccount.id}/transactions?limit=${limit}&offset=${offset}`);

        setTransactions(response.data);
       } catch (error) {
        console.log("Error In getting the transaction for the account ",error);
       }
    }

  return (
    <>
        <div>Transactions</div>
        <Table striped className="c-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map(transaction =>
                    (
                      <tr>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.fromAccountID}</td>
                        <td>{transaction.toAccountID}</td>
                        <td>{transaction.date}</td>
                      </tr>
                     )
                  )}
                </tbody>
            </Table>
    </>
  )
}

export default Transaction