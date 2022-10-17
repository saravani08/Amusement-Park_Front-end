import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarCustomer from '../../layout/NavbarCustomer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



const ViewTicketsByCustomer = () => {

    const [bill, setBill] = useState(0);

    const [tickets, setTickets] = useState([]);




    const id = localStorage.getItem("CustomerId")

    const Bill = async () => {
        const bill_c = await axios.get(`http://localhost:1234/api/ticket/calculateBill/${id}`);
        setBill(bill_c.data.bill)
    }


    useEffect(() => {
        LoadTickets();
    });
    //console.log(tickets)

    useEffect(() => {
        Bill()
    });

    const LoadTickets = async () => {
        const result = await axios.get(`http://localhost:1234/api/ticket/viewAllTicketsCustomer/${id}`)
        setTickets(result.data);
    }



    const deleteTicket = async (ticket_id) => {
        await axios.delete(`http://localhost:1234/api/ticket/deleteTicket/${ticket_id}`);
    };


    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Total-Bill</Popover.Header>
            <Popover.Body>
                <strong>bill:{bill}</strong>
            </Popover.Body>
        </Popover>
    );


    return (
        <><NavbarCustomer />
            <div>
                <div>
                    <div className='container'>
                        <h1><u>Tickets</u></h1>
                        <div className="py-4">
                            <table className="table border shadow">
                                <thead>
                                    <tr>
                                        <th scope='col'>S.No</th>
                                        <th scope="col">Activity-Name</th>
                                        <th scope="col">Charge</th>
                                        <th scope="col">Date & Time</th>
                                        <th scope="col">Action</th>
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
                                            <td>
                                                <div>
                                                    <Popup trigger={<button className='btn btn-danger'> Delete </button>}
                                                        position="left center">
                                                        <div>Are you sure ?</div>
                                                        <button className='btn btn-danger' onClick={() => deleteTicket(ticket.ticketBookingId)}>Yes</button>
                                                    </Popup>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <OverlayTrigger trigger={["hover","focus"]} placement="left" overlay={popover}>
                                <Button variant="warning">Bill</Button>
                            </OverlayTrigger>

                            <Link className="btn btn-primary mx-2"
                                to={'/CustomerHome'}>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewTicketsByCustomer;