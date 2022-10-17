import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from 'react-router-dom';

const DeleteAccount = () => {

    const navigate = useNavigate();

    const HandleDelete = async () =>{
        const id = localStorage.getItem("CustomerId")
        await axios.delete(`http://localhost:1234/customer/deleteCustomer/${id}`);
        alert("Account deleted successfully")
        localStorage.removeItem("session-detail")
        localStorage.removeItem("CustomerId")
        navigate("/Login")
    }

    return (
        <div className='logout-card'>
            <Card style={{ width: '85rem' }}>
                <Card.Body>
                    <Card.Title>Account Deletion</Card.Title>
                    <Card.Text>
                        Are you sure ? Do you want to delete your account?
                    </Card.Text>
                    <div className='logout-btn'>
                        <Button onClick={() => navigate(-1)}>No</Button>{' '}<Button onClick={HandleDelete}>Yes</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DeleteAccount;