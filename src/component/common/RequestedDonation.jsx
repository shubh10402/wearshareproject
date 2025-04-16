import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../common/css/adminlte.css';
import "../common/css/adminlte.min.css";
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaCalendarAlt, FaImage, FaInfoCircle, FaTshirt } from 'react-icons/fa';

const RequestedDonation = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:3001/donate/requests');
                setRequests(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch donation requests');
                setLoading(false);
                console.error('Error fetching requests:', err);
            }
        };

        fetchRequests();
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

    if (error) {
        return (
            <div className="alert alert-danger mt-5 mx-3" role="alert">
                {error}
            </div>
        );
    }

    return (
        <div className="container-fluid py-4">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="mb-0">
                            <FaTshirt className="me-2" />
                            Donation Requests
                        </h2>
                        
                    </div>
                </div>
            </div>

            <div className="row">
                {requests.map((request) => (
                    <div key={request._id} className="col-md-6 col-lg-4 mb-4 ">
                        <div className="card h-100 shadow-sm ">
                            <div className="card-header bg-light">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <h5 className="card-title mb-0">
                                        <FaUser className="me-2" />
                                        {request.name}
                                    </h5>
                                    <span className="badge bg-primary">
                                        {new Date(request.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                            <div className="card-body ">
                                <div className="mb-3 ">
                                    <h6 className="text-muted mb-2 text-center ">
                                        <FaEnvelope className="me-2" />
                                        Contact Information
                                    </h6>
                                    <p className="mb-1"><strong>Email:</strong> {request.email}</p>
                                    <p className="mb-1"><strong>Phone:</strong> {request.phone}</p>
                                </div>

                                <div className="mb-3">
                                    <h6 className="text-muted mb-2 text-center">
                                        <FaMapMarkerAlt className="me-2" />
                                        Address Details
                                    </h6>
                                    <p className="mb-1"><strong>Address:</strong> {request.address}</p>
                                    <p className="mb-1"><strong>City:</strong> {request.city}</p>
                                    <p className="mb-1"><strong>Pincode:</strong> {request.pincode}</p>
                                </div>

                                <div className="mb-3">
                                    <h6 className="text-muted mb-2 text-center ">
                                        <FaTshirt className="me-2" />
                                        Clothing Details
                                    </h6>
                                    <p className="mb-1"><strong>Number of Clothes:</strong> {request.numClothes}</p>
                                    <p className="mb-1"><strong>Condition:</strong> {request.condition}</p>
                                    <p className="mb-1"><strong>Type:</strong> {request.type}</p>
                                    <p className="mb-1"><strong>Fabric:</strong> {request.fabric}</p>
                                    <p className="mb-1"><strong>Size:</strong> {request.size}</p>
                                </div>

                                {request.additionalInfo && (
                                    <div className="mb-3">
                                        <h6 className="text-muted mb-2 text-center">
                                            <FaInfoCircle className="me-2" />
                                            Additional Information
                                        </h6>
                                        <p className="mb-0">{request.additionalInfo}</p>
                                    </div>
                                )}

                                {request.ImageURL && request.ImageURL.length > 0 && (
                                    <div className="mb-3">
                                        <h6 className="text-muted mb-2 text-center">
                                            <FaImage className="me-2" />
                                            Images
                                        </h6>
                                        <div className="d-flex flex-wrap gap-2">
                                            {request.ImageURL.map((url, index) => (
                                                <img
                                                    key={index}
                                                    src={url}
                                                    alt={`Donation ${index + 1}`}
                                                    className="img-thumbnail"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        objectFit: 'cover',
                                                        borderRadius: '8px',
                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {requests.length === 0 && (
                <div className="text-center py-5">
                    <FaTshirt className="mb-3" style={{ fontSize: '3rem', color: '#6c757d' }} />
                    <h4 className="text-muted">No Donation Requests Found</h4>
                    <p className="text-muted">There are currently no donation requests available.</p>
                </div>
            )}
        </div>
    );
};

export default RequestedDonation; 