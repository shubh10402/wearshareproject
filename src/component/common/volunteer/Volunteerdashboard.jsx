import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUsers, FaHandHoldingHeart, FaSync, FaUser, FaEnvelope, FaPhone, FaGratipay, } from "react-icons/fa";

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const VolunteerDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [volunteers, setVolunteers] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Starting to fetch dashboard data...');

      // Get user data
      console.log('Fetching user data...');
      const userResponse = await axios.get("http://localhost:3001/user/Userlogindata");
      console.log('User response:', userResponse.data);
      
      if (userResponse.data && userResponse.data.success) {
        setUser(userResponse.data.data);
      } else {
        console.warn('User data not in expected format:', userResponse.data);
      }

      // Get volunteers list
      console.log('Fetching volunteers list...');
      const volunteersResponse = await axios.get("http://localhost:3001/volunteer/volunteer");
      console.log('Volunteers response:', volunteersResponse.data);
      
      if (volunteersResponse.data && Array.isArray(volunteersResponse.data)) {
        setVolunteers(volunteersResponse.data);
      } else {
        console.warn('Volunteers data not in expected format:', volunteersResponse.data);
        setVolunteers([]);
      }

    } catch (error) {
      console.error('Detailed error:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        setError(`Server error: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        setError('No response from server. Please check your connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        setError(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="flex-grow-1 ">
            <h1 className="text-center mb-0 justify-content-center">Volunteer Dashboard</h1>
            {/* <button 
              className="btn btn-outline-primary" 
              onClick={fetchData}
              disabled={loading}
            >
              <FaSync className={loading ? "fa-spin" : ""} /> Refresh
            </button> */}
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              <strong>Error:</strong> {error}
              <button 
                className="btn btn-sm btn-outline-danger ms-3" 
                onClick={() => setError(null)}
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Quick Actions */}
          <div className="row mb-4" >
            <div className="col-12">
              <div className="card">
                <div className="card-header ">
                  <h5 className="card-title mb-0">Quick Actions</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2 ">
                    <Link to="/RequestedDonation" className="btn btn-primary">
                      <FaHandHoldingHeart className="me-2" />
                      View Donations
                    </Link>
                    <Link to="/NGORequest" className="btn btn-info">
                      <FaHandHoldingHeart className="me-2" />
                      Our NGO Request
                    </Link>
                    <Link to="/Requestdonate" className="btn btn-info">
                      <FaGratipay className="me-2" />
                      Request Donation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteers List */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <FaUsers className="me-2" />
                Volunteers List
              </h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteers.length > 0 ? (
                      volunteers.map((volunteer, index) => (
                        <tr key={index}>
                          <td>
                            <FaUser className="me-2" />
                            {volunteer.name || 'N/A'}
                          </td>
                          <td>
                            <FaEnvelope className="me-2" />
                            {volunteer.email || 'N/A'}
                          </td>
                          <td>
                            <FaPhone className="me-2" />
                            {volunteer.phone || 'N/A'}
                          </td>
                          <td>
                            {volunteer.area || 'N/A'}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">No volunteers found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
