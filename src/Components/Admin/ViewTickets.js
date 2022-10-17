import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../layout/NavbarAdmin';

const ViewTickets = () => {

    const [tickets, setTickets] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:1234/api/ticket/viewAllTicketsCustomer/${id}`).then((response) => {
            setTickets(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <><NavbarAdmin />
            <div>
                <div className='container'>
                    <div className="py-4">
                        <table className="table border shadow">
                            <thead>
                                <tr>
                                    <th scope='col'>S.No</th>
                                    <th scope="col">Activity-Name</th>
                                    <th scope="col">Charge</th>
                                    <th scope="col">Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket, index) => (
                                    <tr >
                                        <th scope="row" key={index}>
                                            {index + 1}
                                        </th>
                                        <td>{ticket.activity.description}</td>
                                        <td>{ticket.activity.charges}</td>
                                        <td>{ticket.dateTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Link className="btn btn-primary mx-2"
                            to={'/ViewCustomers'}>
                            Back to Home
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewTickets;