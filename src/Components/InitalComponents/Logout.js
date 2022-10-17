import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../styles/logout.css';
import { Link } from 'react-router-dom';
import Login from './Login';

const Logout = () => {

   

    const navigate = useNavigate();

    const HandleLogout = async () => {

        try {
            const email = localStorage.getItem("session-detail")
            const {Email} = JSON.parse(email);
            await axios.patch(`http://localhost:1234/logout/${Email}`);
            localStorage.removeItem("session-detail")
            localStorage.removeItem("AdminId")
            localStorage.removeItem("CustomerId")
            navigate("/Login")
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className='logout-card'>
            <Card style={{ width: '85rem' }}>
                <Card.Body>
                    <Card.Title>LogOut</Card.Title>
                    <Card.Text>
                        Are you sure ? Do you want to Logout ?
                    </Card.Text>
                    <div className='logout-btn'>
                        <Button onClick={() => navigate(-1)}>No</Button>{' '}<Button onClick={HandleLogout}>Yes</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Logout;