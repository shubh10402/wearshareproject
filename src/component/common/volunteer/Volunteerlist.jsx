import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaGlobe, FaHome } from 'react-icons/fa';

const Volunteerlist = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/volunteer/volunteer");
        setVolunteers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch volunteers');
        setLoading(false);
        console.error("Error fetching volunteers:", err);
      }
    };
    fetchVolunteers();
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
        <div className="flex-grow-1 p-2" style={{ overflowX: "auto" }}>
        <h1 style={{ textAlign: "center" }}>
          <FaUser className="me-2" />
          Volunteer List
        </h1>
                      </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Volunteers Table */}
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th><FaUser className="me-2" />Name</th>
                      <th><FaEnvelope className="me-2" />Email</th>
                      <th><FaPhone className="me-2" />Phone</th>
                      <th><FaMapMarkerAlt className="me-2" />Address</th>
                      <th><FaCity className="me-2" />City</th>
                      <th><FaGlobe className="me-2" />Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteers.length > 0 ? (
                      volunteers.map((volunteer) => (
                        <tr key={volunteer._id}>
                          <td>{volunteer.name}</td>
                          <td>{volunteer.email}</td>
                          <td>{volunteer.phone}</td>
                          <td>{volunteer.address}</td>
                          <td>{volunteer.city}</td>
                          <td>{volunteer.area}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          <div className="text-muted">
                            <FaUser className="mb-2" style={{ fontSize: '2rem' }} />
                            <p>No volunteers found</p>
                          </div>
                        </td>
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

export default Volunteerlist;