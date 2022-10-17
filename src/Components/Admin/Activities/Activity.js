import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavbarAdmin from '../../../layout/NavbarAdmin';
import Popup from 'reactjs-popup';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../../styles/Activity.css';



export default function Activity() {
  const [act, setAct] = useState([]);

  const { activityId } = useParams();
  const [filterVal, setFilterVal] = useState('');
  console.log(filterVal);

  useEffect(() => {
    loadAct();
  }, []);

  const loadAct = async () => {
    const result = await axios.get("http://localhost:1234/activity/view/all");
    setAct(result.data);

  };
  const deleteActivity = async (activityId) => {
    await axios.delete(`http://localhost:1234/activity/deleteActivity/${activityId}`);
    loadAct();
  };



  return (
    <><NavbarAdmin />
      <div className="container">
        <div className="py-4">

          <h1 align="center" style={{ color: "blue" }}>Activities</h1>
  

          <div className="l">
            <br>
            </br>
            <label>Search:</label>
            <div className='search input'>
              <input
                placeholder='Search'
                value={filterVal}
                type={"text"}
                onInput={(e) => setFilterVal(e.target.value)} />
            </div>


          <div className="drop-down">
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Actions
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/addactivity">Add-Activity</Dropdown.Item>
                <Dropdown.Item href="/viewActivity1">View-Activity-By-Charge</Dropdown.Item>
                <Dropdown.Item href="/datewiseActivities">Datewise-Activites</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>




          </div>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Description</th>
                <th scope="col">Charges</th>
                <th scope="col">Action</th>
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

                  <td>{activity.description}</td>
                  <td>{activity.charges}</td>

                  <td>
                    <Link
                      className="btn btn-warning mx-2"
                      to={`/editactivity/${activity.activityId}`}
                    >
                      Edit
                    </Link>
                    <Popup trigger={<button className='btn btn-danger'> Delete </button>}
                      position="right center">
                      <div>Are you sure you want to delete this activity ?</div>
                      <button className='btn btn-danger' onClick={() => deleteActivity(activity.activityId)}>Yes</button>

                    </Popup>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link className="btn btn-primary mx-2"
                                to={'/AdminHome'}>
                                Back to Home
                            </Link>
        </div>
      </div>
    </>
  );
}