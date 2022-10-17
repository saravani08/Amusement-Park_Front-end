import axios from "axios";
import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import NavbarAdmin from "../../../layout/NavbarAdmin";

export function AddActivity() {
  let navigate = useNavigate();

  const [act, setAct] = useState({
    description: "",
    charges: 0,

  });

  const { description, charges } = act;

  const onInputChange = (e) => {
    setAct({ ...act, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1234/activity/addActivity", act);
    alert("Activity Added successfully")
    navigate("/activity");
  };

  return (
    <><NavbarAdmin />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h1 className="text-center m-4">Add Activity</h1>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  required="required"
                  placeholder="Enter description"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">

                <label htmlFor="Charge" className="form-label">
                  Charge
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  required="required"
                  placeholder="Enter Charges"

                  name="charges"
                  value={charges}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/activity">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}