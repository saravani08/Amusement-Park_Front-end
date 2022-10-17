import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewCustomers from './Components/Admin/ViewCustomers';
import ViewTickets from './Components/Admin/ViewTickets';
import ViewCustomerById from './Components/Admin/ViewCustomerById';
import SignUp from './Components/InitalComponents/SignUp';
import NavbarLatest from './layout/NavbarLatest';
import Login from './Components/InitalComponents/Login';
import Logout from './Components/InitalComponents/Logout';
import React,{useState,useEffect} from 'react';
import NavbarCustomer from './layout/NavbarCustomer';
import BookActivity from './Components/Customer/BookActivity';
import NavbarAdmin from './layout/NavbarAdmin';
import CustomerHome from './Components/Customer/CustomerHome';
import ViewTicketsByCustomer from './Components/Customer/ViewTicketsByCustomer';
import AdminHome from './Components/Admin/AdminHome';
import { AddActivity } from './Components/Admin/Activities/AddActivity';
import Activity from './Components/Admin/Activities/Activity';
import DatewiseActivities from './Components/Admin/Activities/DateWiseActivities';
import EditActivity from './Components/Admin/Activities/EditActivity';
import ViewActivity from './Components/Admin/Activities/ViewActivity';
import ViewActivityByCharge from './Components/Admin/Activities/ViewActivityByCharge';
import AllActivitiesByCustomerId from './Components/Admin/Activities/AllActivitiesByCustomerId';
import CustomerProfile from './Components/Customer/CustomerProfile';
import AdminProfile from './Components/Admin/AdminProfile';
import DeleteAccount from './Components/Customer/DeleteAccount';





function App() {

  

  const [state, setstate] = useState(<Login/>)

  useEffect(() => {
    
    setstate(checkUserSession());
  
  }, [])


  const checkUserSession = () => {
    const loggedIn = localStorage.getItem("session-detail");
    console.log(loggedIn)
    if(loggedIn){
      const {userType} = JSON.parse(loggedIn);
      return userType == 'Admin' ? <AdminHome/> : <CustomerHome/>
    }else{
      return (<Login/>)
    }
  }
 
  return (
    <div className="App">
      <Router>


        <Routes>
          <Route exact path="/" element={state} />
          <Route exact path="/viewCustomers" element={<ViewCustomers />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/AdminHome" element={<AdminHome />} />

          <Route exact path='/CustomerHome' element={<CustomerHome />} />
          <Route exact path="/ViewTickets/:id" element={<ViewTickets />} />
          <Route exact path="/ViewCustomers" element={<ViewCustomerById />} />
          <Route exact path='/ViewTicketsByCustomer' element={<ViewTicketsByCustomer />} />

          <Route exact path="/SignUp" element={<><NavbarLatest /> <SignUp /></>} />
          <Route exact path="/NavbarCustomer" element={<NavbarCustomer />} />
          <Route exact path="/NavbarAdmin" element={<NavbarAdmin />} />

          <Route exact path="/viewCustomerById" element={<ViewCustomerById />} />
          <Route exact path="/Logout" element={<Logout />} />
          <Route exact path="/BookActivity" element={<BookActivity />} />
    


          <Route path="/addActivity" element={<AddActivity />} />
          <Route path="/viewActivity" element={<ViewActivity />} />
          <Route path="/viewActivity1" element={<ViewActivityByCharge />} />
          <Route exact path="/editActivity/:id" element={<EditActivity />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/activitiesbycusId" element={<AllActivitiesByCustomerId />} />
          <Route path="/datewiseActivities" element={<DatewiseActivities />} />
          <Route path="/customerProfile" element={<CustomerProfile/>}/>
          <Route path="/AdminProfile" element={<AdminProfile/>}/>

          <Route path="/DeleteAccount" element={<DeleteAccount/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
