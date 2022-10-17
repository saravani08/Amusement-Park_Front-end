import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarCustomer from '../../layout/NavbarCustomer';
import GetUserData from '../../Constant/ConstantFunctions';


export default function BookActivity() {

  const [activityId, SetActivityId] = useState(0);


  const [customer, SetCustomer] = useState(0);
  

  const ticketBooking = {
    "activity_id": activityId,
    "customer_id": customer
  };

  console.log(ticketBooking)

  const HandleBooking = async () => {
    try {
      {/*const Email = localStorage.getItem("session-detail")
      const { email } = JSON.parse(Email);
      const result = await axios.get(`http://localhost:1234/customer/getCustomerByEmail/${email}`);
      SetCustomer(result.data.customerId)*/}
      GetUserData();
      const id = localStorage.getItem("CustomerId")
      SetCustomer(id)
      const confirmTicket = await axios.post("http://localhost:1234/api/ticket/addTicketBooking", ticketBooking);
      console.log(confirmTicket)
      alert("Ticket Booked !!!")
    }
    catch (e) {
      console.error()
    }
  }



  const [act, setAct] = useState([]);
  const [searchdata, setSearchData] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  console.log(filterVal);


  useEffect(() => {

    const fetchData = () => {
      axios.get("http://localhost:1234/admin/getAllActivities").then((response) => {
        setAct(response.data);
        setSearchData(response.data);
      });
    }
    fetchData();
  }, []);

  return (
    <><NavbarCustomer/>

      <div className='container'>
        <h1><u>Activities</u></h1>
        <div className="py-4">
          <div style={{ margin: '0 auto', marginTop: '10%' }}>
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
                    <button className="btn btn-warning mx-2" onClick={() => { SetActivityId(activity.activityId); HandleBooking() }}>
                      Book
                    </button>
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