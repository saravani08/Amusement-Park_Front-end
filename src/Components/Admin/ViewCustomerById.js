import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../layout/NavbarAdmin';

const ViewCustomerById = () => {

    const [customer, setCustomer] = useState({
        "id": '',
        "name": "",
        "username": "",
        "email": "",
        "phoneNo": ""
    });
    const [customerId, setCustomerId] = useState('');
    const onInputChange = (e) => {
        setCustomerId(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const customer = await axios.get(`http://localhost:1234/customer/viewCustomer/${customerId}`);
        setCustomer(customer.data);

    };

    return (
        <><NavbarAdmin />
            <div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <h2><u>CUSTOMER-BY-ID</u></h2>
                        </label>
                        <input
                            type={'number'}
                            className="form-control"
                            placeholder="Enter Customer Id"
                            name="customerId"
                            value={customerId}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">
                        Submit
                    </button>
                </form>

                <div className='container'>
                    <div className="py-4">
                        <table className="table border shadow">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">phoneNo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>{customer.name}</td>
                                <td>{customer.username}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneNo}</td>
                            </tbody>
                        </table>
                    </div>
                    <Link className="btn btn-primary mx-2"
                        to={'/'}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ViewCustomerById;