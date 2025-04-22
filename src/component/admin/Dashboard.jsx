import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { AdminSidebar } from "../admin/Adminsidebar";
import { Link } from "react-router-dom";
import { FaPlus, FaUser, FaEye,FaGavel,FaEnvelope,FaUsers} from "react-icons/fa";
axios.defaults.withCredentials = true;

export const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVolunteers: 0,
    totalDonations: 0,
    pendingRequests: 0
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch User login Data and Statistics
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, statsResponse] = await Promise.all([
          axios.get("http://localhost:3001/user/Userlogindata"),
          axios.get("http://localhost:3001/admin/stats")
        ]);
        
        setUser(userResponse.data);
        setStats(statsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Sidebar
      <div style={{ width: "250px" }}>  
        <AdminSidebar />
      </div> */}

      {/* Main Content */}
      <div className="flex-grow-1 p-2" style={{ overflowX: "auto" }}>
        <h1 style={{ textAlign: "center" }}>
          <FaUser className="me-2" />
          Admin Dashboard
        </h1>
        
        {/* Statistics Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title text-center" >Total Users</h5>
                <h2 className="card-text text-center">{stats.totalUsers} </h2>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-success text-white">
              <div className="card-body">
                <h5 className="card-title text-center">Total Volunteers</h5>
                <h2 className="card-text text-center">{stats.totalVolunteers}</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-info text-white">
              <div className="card-body">
                <h5 className="card-title">Total Donations</h5>
                <h2 className="card-text text-center">{stats.totalDonations}</h2>
              </div>
            </div>
          </div>
         
        </div>

        {/* Quick Actions */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Quick Actions</h5>
              </div>
              <div className="card-body">
                <div className="d-flex gap-2">
                     <Link to="/Requestdonate" className="btn btn-success"> <FaPlus className="me-2" /> Create Donation Requests</Link>
                     <Link to="/Addvolunteer" className="btn btn-primary"> <FaGavel className="me-2" /> Manage Volunteers</Link>
                  <Link to="/RequestedDonation" className="btn btn-info"> <FaEye className="me-2" /> View Donations</Link>
                    <Link to="/Volunteerlist" className="btn btn-warning"> <FaUsers className="me-2" /> Volunteer List</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Details Table */}
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">User Details</h5>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>
                    <FaUsers className="me-2" />
                    Name
                  </th>
                  <th>
                    <FaEnvelope className="me-2" />
                    Email
                  </th>
                  <th>
                    <FaUser className="me-2" />
                    Role</th>
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
      </div>
    </div>
  );
};

export default Dashboard;
