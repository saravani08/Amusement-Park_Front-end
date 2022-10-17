import { useFormik } from 'formik';
import '../../styles/login.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import log from '../../icons/login.png';
import React, { useEffect } from 'react';
import NavbarLatest from '../../layout/NavbarLatest';

const Login = () => {



  const Navigate = useNavigate();
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const formik = useFormik({
    initialValues: {
      loginEmail: '',
      loginPassword: ''
    },
    onSubmit: async (values) => {
      var select = document.getElementById('users');
      var text = select.options[select.selectedIndex].text;
      console.log(text)
      try {
        const result = await axios.post('http://localhost:1234/login/dto', values)
        console.log("result-value", result)
        alert("logged in successfully")
        const saveObj = {
          "isLoggedIn": true,
          "Email": values.loginEmail,
          "userType": text
        }
        //localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("session-detail", JSON.stringify(saveObj));
        //const job = GetCustomerByEmail();
        if (text === 'Admin') {
          Navigate("/AdminHome")
        }
        else {
          Navigate("/CustomerHome")
        }
      } catch (e) {
        console.error(e)
        alert("Invalid Credentials")
      }


    },

    validate: (values) => {
      let errors = {};
      if (!values.loginEmail) {
        errors.loginEmail = "Email Required"
      }
      if (!isValidEmail(values.loginEmail)) {
        errors.loginEmail = "Invalid Email"
      }
      if (!values.loginPassword) {
        errors.loginPassword = "Password Required"
      }

      return errors;
    }
  })
  //console.log('form values', formik.values)
  return (
    <>
      <NavbarLatest />
      <div className="c">
        <div className='c2'>
          <div className="app-wrapper">
            <div>
              <img src={log} height='50' weight='50' />
            </div>
            <form className='form-wrapper' autoComplete="off" onSubmit={formik.handleSubmit}>

              <div className='name'>
                <label className='label'>E mail</label>
                <input className='input' type="email" name="loginEmail" id="loginEmail"
                  value={formik.values.loginEmail} onChange={formik.handleChange} />
                {formik.errors.loginEmail ? <div className="error">{formik.errors.loginEmail}</div> : null}

              </div>

              <div className='name'>
                <label className='label'>Password</label>
                <input className='input' type="password" name="loginPassword" id="loginPassword"
                  value={formik.values.loginPassword} onChange={formik.handleChange} />
                {formik.errors.loginPassword ? <div className="error">{formik.errors.loginPassword}</div> : null}
              </div>

              <div>
                <label ></label>{' '}
                <select id="users" name="users">
                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>
                </select>
              </div><br />

              <button className='submit' type="submit">Login</button><br />

              <Link to='/SignUp'>Dont have an account ? Signup</Link>


            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;