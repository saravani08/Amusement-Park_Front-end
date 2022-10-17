import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import '../../styles/viewCustomers.css';
import NavbarAdmin from '../../layout/NavbarAdmin';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function ViewCustomers() {
    const [customers, setCustomers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer = async () => {
        const result = await axios.get("http://localhost:1234/customer/view/all");
        setCustomers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:1234/customer/deleteCustomer/${id}`);
        loadCustomer();
    };

    return (
        <>
            <NavbarAdmin />
            <div className='container'>
                <h1>Customers</h1>
                <div>
                    <Link className="btn btn-warning mx-2" to="/ViewCustomerById">View-Customer-By-Id</Link>
                </div>
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope='col'>S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">phoneNo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr >
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{customer.name}</td>
                                    <td>{customer.username}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phoneNo}</td>
                                    <td>
                                        <Link className="btn btn-warning mx-2"
                                            to={`/viewTickets/${customer.id}`}>
                                            view Tickets
                                        </Link>
                    
                                                <div>
                                                    <Popup trigger={<button className='btn btn-danger'> Delete </button>}
                                                        position="left center">
                                                        <div>Are you sure ?</div>
                                                        <button className='btn btn-danger' onClick={() => deleteUser(customer.customerId)}>Yes</button>
                                                    </Popup>
                                                </div>
                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ViewCustomers;