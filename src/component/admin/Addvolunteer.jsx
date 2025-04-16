import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaGlobe, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export const Addvolunteer = () => {
  const [volunteer, setVolunteer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/volunteer/volunteer");
        setVolunteer(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch volunteers');
        setLoading(false);
        console.error("Error fetching users:", err);
      }
    };
    fetchVolunteers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this volunteer?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/volunteer/Deletevolunteer/${id}`);
        console.log(response.data);
        setVolunteer((prevVolunteers) => prevVolunteers.filter((volunteer) => volunteer._id !== id));
      } catch (error) {
        setError('Failed to delete volunteer');
        console.error("Error deleting volunteer:", error);
      }
    }
  };
  
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 ">
              <FaUser className="me-2" />
              Volunteer Management
            </h2>
            <Link to="/Createvolunteer" className="btn btn-primary">
              <FaPlus className="me-2" />
              Add New Volunteer
            </Link>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
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
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteer.length > 0 ? (
                        volunteer.map((volunteer) => (
                          <tr key={volunteer._id}>
                            <td>{volunteer.name}</td>
                            <td>{volunteer.email}</td>
                            <td>{volunteer.phone}</td>
                            <td>{volunteer.address}</td>
                            <td>{volunteer.city}</td>
                            <td>{volunteer.area}</td>
                            <td>
                              <div className="btn-group" role="group">
                                <Link 
                                  to={`/Updatevolunteer/${volunteer._id}`} 
                                  className="btn btn-sm btn-outline-primary"
                                >
                                  <FaEdit className="me-1" />
                                  Edit
                                </Link>
                                <button 
                                  className="btn btn-sm btn-outline-danger" 
                                  onClick={() => handleDelete(volunteer._id)}
                                >
                                  <FaTrash className="me-1" />
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center py-4">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Addvolunteer;