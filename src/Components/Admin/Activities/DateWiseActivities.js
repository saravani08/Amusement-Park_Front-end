import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NavbarAdmin from '../../../layout/NavbarAdmin';
import { Link } from 'react-router-dom';

export default function DatewiseActivities() {
  const [act, setAct] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  console.log(filterVal);
  useEffect(() => {
    loadactivities();
  }, []);

  const loadactivities = async () => {
    const result = await axios.get("http://localhost:1234/admin/dateWiseActivities/");
    setAct(result.data);
  };

  return (

    <><NavbarAdmin />

      <div className="container">
        <div className="py-4">
          <h1 align="center" style={{ color: "blue" }}>Datewise Activities</h1>
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
              {act.filter((activity) => {
                return filterVal.toLowerCase() == '' ? activity : activity.description.toLowerCase().includes(filterVal)
                  || activity.description.toUpperCase().includes(filterVal) || activity.description.includes(filterVal)
                  || activity.charges.toString().includes(filterVal)
              }).map((activity, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{activity.activityId}</td>
                  <td>{activity.description}</td>
                  <td>{activity.charges}</td>

                </tr>
              ))}
            </tbody>
          </table>
          <Link className="btn btn-primary mx-2"
            to={'/activity'}>
            Back to Activity
          </Link>
        </div>
      </div>
    </>
  );
}