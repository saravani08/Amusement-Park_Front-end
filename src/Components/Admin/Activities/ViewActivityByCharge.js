import React, { useState } from 'react';
import axios from 'axios';
import NavbarAdmin from '../../../layout/NavbarAdmin';
import { Link } from 'react-router-dom';

const ViewActivityByCharge = () => {

    const [activity, setActivity] = useState(
        []
    );
    const [charges, setCharges] = useState('');
    const onInputChange = (e) => {
        setCharges(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const activity = await axios.get(`http://localhost:1234/activity/getAllActivitiesbycharge/${charges}`);
        setActivity(activity.data);

    };


    return (
        <><NavbarAdmin />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Activities Search with Charge</h2>
                        <form onSubmit={(e) => onSubmit(e)}>

                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">
                                    Charge
                                </label>
                                <input
                                    type={'number'}
                                    className="form-control"
                                    placeholder="Enter Charge"
                                    name="charges"
                                    value={charges}
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


                <div className='container'>
                    <div className="py-4">
                        
                        <table className="table table-bordered border shadow">
                            
                            <thead>
                                <tr>
                                    <th scope="col">S.NO</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activity.map((act, index) => (

                                    <tr>
                                        <th scope="row" key={index}>
                                            {index + 1}
                                        </th>
                                        <td>{act.description}</td>
                                        <td>{act.charges}</td>
                                    </tr>))}

                            </tbody>
                        </table>
                        <Link className="btn btn-primary mx-2"
                                to={'/activity'}>
                                Back to Activity
                            </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ViewActivityByCharge;