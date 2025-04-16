import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../common/css/adminlte.css';
import "../common/css/adminlte.min.css";
import { FaPhone, FaTshirt, FaInfoCircle, FaCalendarAlt, FaSearch } from 'react-icons/fa';

const NGORequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/requests');
        setRequests(response.data.requests);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch donation requests');
        setLoading(false);
        console.error('Error fetching requests:', err);
      }
    };

    fetchRequests();
  }, []);

  const filteredRequests = requests.filter(request => {
    if (!request) return false;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      (request.phone && request.phone.toString().toLowerCase().includes(searchLower)) ||
      (request.type && request.type.toLowerCase().includes(searchLower)) ||
      (request.condition && request.condition.toLowerCase().includes(searchLower)) ||
      (request.fabric && request.fabric.toLowerCase().includes(searchLower)) ||
      (request.size && request.size.toLowerCase().includes(searchLower)) ||
      (request.numClothes && request.numClothes.toString().includes(searchTerm))
    );
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title mb-0">NGO Donation Requests</h3>
            </div>
            <div className="card-body">
              {/* Search Bar */}
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by phone, type, or condition..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Requests Table */}
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                    <th><FaCalendarAlt className="me-2" />Created At</th>
                    <th><FaTshirt className="me-2" />Type</th>
                    <th><FaTshirt className="me-2" />Fabric</th>
                      <th><FaTshirt className="me-2" />Number of Clothes</th>
                      
                      <th><FaInfoCircle className="me-2" />Condition</th>
                      
                      <th><FaTshirt className="me-2" />Size</th>
                      <th><FaInfoCircle className="me-2" />Additional Info</th>
                      
                      <th><FaPhone className="me-2" />Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRequests.map((request) => (
                      <tr key={request._id} className="align-middle">
                        <td>{new Date(request.createdAt).toLocaleDateString()}</td>
                        <td>{request.type}</td>
                       
                        <td>{request.fabric}</td>
                        <td>{request.numClothes}</td>
                        <td>
                          <span className={`badge bg-${getStatusBadgeClass(request.condition)}`}>
                            {request.condition}
                          </span>
                        </td>
                        
                        <td>{request.size}</td>
                        <td>{request.additionalInfo || 'N/A'}</td>
                        <td>{request.phone}</td>
                        
                      </tr>
                    ))}
                    {filteredRequests.length === 0 && (
                      <tr>
                        <td colSpan="8" className="text-center py-4">
                          <div className="text-muted">
                            <FaSearch className="mb-2" style={{ fontSize: '2rem' }} />
                            <p>No requests found matching your search</p>
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

const getStatusBadgeClass = (condition) => {
  switch (condition.toLowerCase()) {
    case 'brand new':
      return 'success';
    case 'very good condition':
      return 'info';
    case 'good condition':
      return 'primary';
    case 'average condition':
      return 'warning';
    case 'bad condition':
      return 'danger';
    default:
      return 'secondary';
  }
};

export default NGORequest; 