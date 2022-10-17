import '../../styles/login.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css'


function SignUp() {

  function isUnique(str) {
    return new Set(str).size === str.length;
  }



  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const formik = useFormik({
    initialValues: {
      userName: "",
      firstname: "",
      lastName: "",
      loginEmail: "",
      logiPassword: "",
      mobileNo: ""
    },
    onSubmit: (values) => {
      console.log('form submit', values)
      axios.post("http://localhost:1234/customer/insertCustomer", values);
      alert("Your account is created")
    },
    validate: (values) => {
      let errors = {};
      if (!values.userName) {
        errors.userName = "UserName Required"
      }
      if (!values.loginEmail) {
        errors.loginEmail = "Email Required"
      }
      else if (!isValidEmail(values.loginEmail)) {
        errors.loginEmail = "Invalid Email"
      }
      if (!values.logiPassword) {
        errors.logiPassword = "Password Required"
      }
      if (!values.firstname) {
        errors.firstname = "Firstname Required"
      }
      if (!values.lastName) {
        errors.lastName = "Lastname Rquired"
      }
      if (!values.mobileNo) {
        errors.mobileNo = "MobileNo Rquired"
      }
      if (values.logiPassword.length < 6) {
        errors.logiPassword = "Password must contain min 6 characters"
      }
      if (!(values.mobileNo.match('[0-9]{10}'))) {
        errors.mobileNo = "Mobile number should be 10 digits"
      }
      if (!isUnique(values.userName)) {
        errors.userName = "Username Should be Unique"
      }

      return errors;
    }
  })

  return (
    <div className='c'>
      <div className='c2'>
        <div className='app-wrapper'>
          <form className="form-wrapper" autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className='t'>
              <h1>SignUp</h1>
            </div>

            <div className="name">
              <label className='label'>User Name</label>
              <input className='input' type="text" name="userName" id="userName" value={formik.values.userName} onChange={formik.handleChange} />
              {formik.errors.userName ? <div className="error">{formik.errors.userName}</div> : null}
            </div>

            <div className="name">
              <label className='label'>First Name</label>
              <input className='input' type="text" name="firstname" id="firstname" value={formik.values.firstname} onChange={formik.handleChange} />
              {formik.errors.firstname ? <div className="error">{formik.errors.firstname}</div> : null}
            </div>

            <div className="name">
              <label className='label'>Last Name</label>
              <input className='input' type="text" name="lastName" id="lastName" value={formik.values.lastName} onChange={formik.handleChange} />
              {formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
            </div>

            <div className="email">
              <label className='label'>Email</label>
              <input className='input' type="email" name="loginEmail" id="loginEmail" value={formik.values.loginEmail} onChange={formik.handleChange} />
              {formik.errors.loginEmail ? <div className="error">{formik.errors.loginEmail}</div> : null}


            </div>
            <div className="password">
              <label className='label'>Password</label>
              <input className='input' type="password" name="logiPassword" id="logiPassword" value={formik.values.logiPassword} onChange={formik.handleChange} />
              {formik.errors.logiPassword ? <div className="error">{formik.errors.logiPassword}</div> : null}
            </div>

            <div className="mobileNumber">
              <label className='label'>Mobile Number</label>
              <input className='input' type="tel" name="mobileNo" id="mobileNo" value={formik.values.mobileNo} onChange={formik.handleChange} />
              {formik.errors.mobileNo ? <div className="error">{formik.errors.mobileNo}</div> : null}
            </div>
            <div>
              <button className='submit' type="submit">Sign Up</button><br />
              <Link to='/'>Already Have an Account?Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default SignUp;