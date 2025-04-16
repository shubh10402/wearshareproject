import React from 'react';
import { Link } from 'react-router-dom';
import '../common/css/adminlte.css';
import "../common/css/adminlte.min.css";

const Thankyou = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="card shadow">
                        <div className="card-body p-5">
                            <h1 className="text-success mb-4">🎉 Thank You! 🎉</h1>
                            <div className="mb-4">
                                <i className="fas fa-check-circle fa-5x text-success"></i>
                            </div>
                            <h3 className="mb-4">Your Donation Request has been Submitted Successfully</h3>
                            <p className="lead mb-4">
                                We appreciate your generosity and will process your request shortly.
                                Our team will contact you for the pickup details.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <Link to="/" className="btn btn-primary">
                                    <i className="fas fa-home mr-2"></i> Back to Home
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thankyou; 