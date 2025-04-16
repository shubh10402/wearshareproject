import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../common/css/adminlte.css';
import "../common/css/adminlte.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease'
        });
    }, []);

    return (
        <div className="container-fluid">
            {/* Hero Section */}
            <div className="row hero-section" style={{ 
                background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/hero-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}>
                <div className="col-md-8 text-center" data-aos="fade-up">
                    <h1 className="display-4 mb-4">Welcome to WearShare</h1>
                    <p className="lead mb-4">Join us in making a difference through clothing donations</p>
                    <Link to="/Signup" className="btn btn-primary btn-lg">
                        Donate Now
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="row py-5">
                <div className="col-md-4 text-center mb-4" data-aos="fade-right" data-aos-delay="100">
                    <div className="card h-100">
                        <div className="card-body">
                            <i className="fas fa-tshirt fa-3x text-primary mb-3"></i>
                            <h3>Donate Clothes</h3>
                            <p>Give your gently used clothes a second life by donating them to those in need.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="card h-100">
                        <div className="card-body">
                            <i className="fas fa-hands-helping fa-3x text-primary mb-3"></i>
                            <h3>Make an Impact</h3>
                            <p>Your donations help provide clothing to underprivileged communities.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-4" data-aos="fade-left" data-aos-delay="300">
                    <div className="card h-100">
                        <div className="card-body">
                            <i className="fas fa-truck fa-3x text-primary mb-3"></i>
                            <h3>Easy Pickup</h3>
                            <p>Schedule a convenient pickup time for your donations.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="row bg-light py-5">
                <div className="col-12 text-center mb-4" data-aos="fade-up">
                    <h2>How It Works</h2>
                </div>
                <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="100">
                    <div className="step-number">1</div>
                    <h4>Fill the Form</h4>
                    <p>Provide details about your donation</p>
                </div>
                <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="200">
                    <div className="step-number">2</div>
                    <h4>Upload Photos</h4>
                    <p>Add images of the items you're donating</p>
                </div>
                <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="300">
                    <div className="step-number">3</div>
                    <h4>Schedule Pickup</h4>
                    <p>Choose a convenient pickup time</p>
                </div>
                <div className="col-md-3 text-center" data-aos="zoom-in" data-aos-delay="400">
                    <div className="step-number">4</div>
                    <h4>Get Confirmation</h4>
                    <p>Receive pickup details via email</p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="row py-5">
                <div className="col-12 text-center" data-aos="zoom-out" data-aos-delay="400">
                    <h2 className="mb-4">Ready to Make a Difference?</h2>
                    <h6>
                    "Transform lives with a simple act of kindness. 
                    </h6>
                    <h6>
                    Your unused clothes can bring warmth, dignity, and hope to someone in need. 
                    </h6>
                    <h6>
                    Join our donation drive and make a difference—one outfit at a time. 
                    </h6>
                    <h6>Clean out your closet, give with love, and spread the joy of giving !"
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Home; 