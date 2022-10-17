import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavbarAdmin from "../../../layout/NavbarAdmin";

export default function EditActivity() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [act, setAct] = useState({
    description: "",
    charges: 0,

  });

  const { description, charges } = act;

  const onInputChange = (e) => {
    setAct({ ...act, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadAct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:1234/activity/updateActivity/${id}`, act);
    alert("Activity updated successfully")
    navigate("/activity");
  };

  const loadAct = async () => {
    const result = await axios.get(`http://localhost:1234/activity/viewActivity/${id}`);
    setAct(result.data);
  };

  return (
    <><NavbarAdmin />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit Activity</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter description"
                  name="description"
                  value={description}
                  onInput={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Charges" className="form-label">
                  Charges
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter Charges"
                  name="charges"
                  value={charges}
                  onInput={(e) => onInputChange(e)}
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