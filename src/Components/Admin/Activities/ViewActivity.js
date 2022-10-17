import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from '../../../layout/NavbarAdmin';



export default function ViewActivity() {
  const [act, setAct] = useState([]);
  const [searchdata, setSearchData] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  console.log(filterVal);


  useEffect(() => {

    const fetchData = () => {
      axios.get("http://localhost:1234/activity/view/all").then((response) => {
        setAct(response.data);
        setSearchData(response.data);
      });
    }
    fetchData();
  }, []);

  return (

    <><NavbarAdmin />

      <div className='container'>
        <div className="py-4">
          <h1 align="center" style={{ color: "blue" }}>Activities</h1>
          <div style={{ margin: '0 auto', marginTop: '10%' }}>
            <label>Search:</label>
            <input
              placeholder='Search'
              value={filterVal}
              type={"text"}
              onInput={(e) => setFilterVal(e.target.value)} />


          </div>
          <table className="table table-bordered border shadow">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
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

                  <td>{activity.description}</td>
                  <td>{activity.charges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}