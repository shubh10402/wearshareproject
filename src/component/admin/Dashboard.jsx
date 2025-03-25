import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AdminSidebar } from "../admin/Adminsidebar";

axios.defaults.withCredentials = true;

export const Dashboard = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // Fetch User login Data
  useEffect(() => {
    axios
      .get("http://localhost:3001/user/Userlogindata")
      .then((response) => setUser(response.data))
      .catch((err) => console.log("Error fetching users:", err));
  }, []);

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{ width: "250px" }}>  
        <AdminSidebar />
      </div>

      {/* Table Section */}
      <div className="flex-grow-1 p-4" style={{ overflowX: "auto" }}>
        <h1 style={{ textAlign:"center"}}>Dashboard</h1>
        <h3 style={{ textAlign:"center", paddingTop:"5px"}}> User Detail</h3>
        
        <table className="table table-bordered" style={{ width: "100%" , borderStyle:"solid",borderColor:"grey"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userData, index) => (
              <tr key={index}>
                <td>{userData.fullname}</td>
                <td>{userData.email}</td>
                <td>{userData.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      
    </div>

    
  );
};

export default Dashboard;
