import React, { useState } from 'react'
import axios from 'axios';
import NavbarAdmin from '../../../layout/NavbarAdmin';

export default function AllActivitiesByCustomerId() {
    const [customerId, setCustomerId] = useState('');
    const onInputChange = (e) => {
        setCustomerId(e.target.value);

    };
    const [filterVal, setFilterVal] = useState('');
    console.log(filterVal);
    const onSubmit = async (e) => {
        e.preventDefault();
        const activity = await axios.get('http://localhost:1234/admin/allActivities/' + customerId);
        setActivity(activity.data);
    };
    const [activity, setActivity] = useState([]
    );
    return (
        <>
            <NavbarAdmin />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Activities By Customer Id</h2>
                        <form onSubmit={(e) => onSubmit(e)}>

                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">
                                    CustomerId
                                </label>
                                <input
                                    type={'number'}
                                    className="form-control"
                                    placeholder="Enter customerId "
                                    name="customerId"
                                    value={customerId}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-outline-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
            <br></br>
            <div className="container">
                <div className="py-4">
                    {/* <h1 align="center" style={{color:"blue"}}>All Activities By CustomerId</h1> */}
                    <div className="l">
                        <label>Search:</label>
                        <div className='search input'>
                            <input
                                placeholder='Search'
                                value={filterVal}
                                type={"text"}
                                onInput={(e) => setFilterVal(e.target.value)} />
                        </div>


                    </div>
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">S.NO</th>
                                <th scope="col">activity Id</th>
                                <th scope="col">Description</th>
                                <th scope="col">Charges</th>

                            </tr>
                        </thead>
                        <tbody>
                            {activity.filter((act) => {
                                return filterVal.toLowerCase() == '' ? act : act.description.toLowerCase().includes(filterVal)
                                    || act.description.toUpperCase().includes(filterVal) || act.description.includes(filterVal)
                                    || act.charges.toString().includes(filterVal)
                            }).map((act, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{act.activityId}</td>
                                    <td>{act.description}</td>
                                    <td>{act.charges}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>        </>
    )
}