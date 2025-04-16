import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFilter, FaSort, FaEye } from "react-icons/fa";

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const RecentDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    sortBy: 'date',
    sortOrder: 'desc'
  });

  const fetchDonations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get("http://localhost:3001/volunteer/recent-donations");
      if (response.data.success) {
        setDonations(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching donations:', error);
      setError('Failed to fetch donations. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredDonations = donations.filter(donation => {
    if (filters.status !== 'all' && donation.status !== filters.status) return false;
    if (filters.type !== 'all' && donation.type !== filters.type) return false;
    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'date') {
      return filters.sortOrder === 'desc' 
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt);
    }
    return 0;
  });

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-warning';
      case 'completed':
        return 'bg-success';
      case 'in-progress':
        return 'bg-info';
      default:
        return 'bg-secondary';
    }
  };

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
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="mb-0">Donation Requests</h1>
            <button 
              className="btn btn-outline-primary" 
              onClick={fetchDonations}
              disabled={loading}
            >
              Refresh
            </button>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Filters */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-3">
                  <label className="form-label">Status</label>
                  <select 
                    className="form-select" 
                    name="status" 
                    value={filters.status}
                    onChange={handleFilterChange}
                  >
                    <option value="all">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In-Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Type</label>
                  <select 
                    className="form-select" 
                    name="type" 
                    value={filters.type}
                    onChange={handleFilterChange}
                  >
                    <option value="all">All Types</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Food">Food</option>
                    <option value="Books">Books</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Sort By</label>
                  <select 
                    className="form-select" 
                    name="sortBy" 
                    value={filters.sortBy}
                    onChange={handleFilterChange}
                  >
                    <option value="date">Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Order</label>
                  <select 
                    className="form-select" 
                    name="sortOrder" 
                    value={filters.sortOrder}
                    onChange={handleFilterChange}
                  >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Donations Table */}
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Donor</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDonations.length > 0 ? (
                      filteredDonations.map((donation, index) => (
                        <tr key={index}>
                          <td>{donation.name}</td>
                          <td>{donation.type}</td>
                          <td>{donation.condition}</td>
                          <td>
                            <span className={`badge ${getStatusBadgeClass(donation.status)}`}>
                              {donation.status}
                            </span>
                          </td>
                          <td>{new Date(donation.createdAt).toLocaleDateString()}</td>
                          <td>
                            <button 
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => {/* Handle view details */}}
                            >
                              <FaEye /> View
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">No donations found</td>
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

export default RecentDonations; 