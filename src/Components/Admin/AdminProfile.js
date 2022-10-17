import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,  CardBody,
    CardText
} from "reactstrap";
import axios from 'axios';
import { useEffect } from 'react';
import '../../styles/card.css';
import NavbarAdmin from '../../layout/NavbarAdmin';
import GetUserData from '../../Constant/ConstantFunctions';




const Profile = () => {
    const id = localStorage.getItem("AdminId")

    const [admin, setAdmin] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: ""
    });
    const { username, firstName, lastName, email, password, mobileNumber } = admin;

    const onInputChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:1234/admin/updateAdmin/${id}`, admin);
        alert("profile updated");
    }
    



    const obj = localStorage.getItem("session-detail")
    const { Email } = JSON.parse(obj);

    useEffect(() => {
        getDetailsByEmail();
    }, [])

    const getDetailsByEmail = async () => {

        GetUserData();
        const result = await axios.get("http://localhost:1234/admin/getAdminByEmail/" + Email);
        //console.log(result.data);
        setAdmin(result.data);
    }




    return (
        <><NavbarAdmin />
            <div>
                <div style={{
                    display: 'block', width: 1175, padding: 30 
                }}>
                
                     <h2>Profile</h2>
                    <Card className='profile-card'>
                        <CardBody className='profile-body'>
                            <form className='profile-form' autoComplete='off' onSubmit={(e) => onSubmit(e)}>
                                <label>UserName: </label><br/>
                                <input type="text" name="username" id="username" value={username} onChange={(e) => onInputChange(e)} ></input><br /><br />
                                <label>FirstName: </label><br/>
                                <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => onInputChange(e)}></input><br /><br />
                                <label>LastName: </label><br/>
                                <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => onInputChange(e)}></input><br /><br />
                                <label>Email: </label><br/>
                                <input type="text" name="email" id="email" value={email} onChange={(e) => onInputChange(e)}></input><br /><br />
                                <label>Password:</label><br/>
                                <input type="text" name="password" id="password" value={password} onChange={(e) => onInputChange(e)}></input><br /><br />
                                <label>MobileNo: </label><br/>
                                <input type="tel" name="mobileNumber" id="mobileNumber" value={mobileNumber} onChange={(e) => onInputChange(e)}></input><br /><br />

                                <div>
                                    <button className='submit' type="submit">Update</button><br />
                                </div>
                            </form>
                            <CardText></CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Profile;