import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true; // Set once, outside the component

export const Dashboard = () => {
  const [Success, setSuccess] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // Authentication Check
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/Dashboard")
  //     .then((result) => {
  //       if (result.data.Status === "Success") {
  //         setSuccess("Success Login");
  //       } else {
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => console.log("Error fetching dashboard data:", err));
  // }, [navigate]);

  // Fetch User login Data
  useEffect(() => {
    axios
      .get("http://localhost:3001/Userlogindata")
      .then((response) => setUser(response.data))
      .catch((err) => console.log("Error fetching users:", err));
  }, []);

  return (
    <>
      <div>Dashboard</div>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              {/* <th>Password</th> */}
            </tr>
          </thead>
          <tbody>
            {user.map((userData, index) => (
              <tr key={index}>
                <td>{userData.fullname}</td>
                <td>{userData.email}</td>
                <td>{userData.role}</td>
                {/* <td>{userData.password}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
