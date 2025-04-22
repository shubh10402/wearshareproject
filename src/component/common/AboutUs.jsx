import React from 'react';
import { FaHeart, FaHandsHelping, FaUsers, FaRecycle, FaHandshake } from 'react-icons/fa';
import heroImage from '../../images/image1.jpg';

const AboutUs = () => {
  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem 0',
      }}
    >
      <div className="container">
        <div 
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '3rem',
            borderRadius: '15px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h1 className="text-center mb-5">About WearShare</h1>
          
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="mb-4">Our Mission</h2>
              <p className="lead">
                At WearShare, we believe in the power of giving and the impact of sustainable fashion. 
                Our mission is to connect generous donors with those in need, creating a community of 
                care and support through clothing donations.
              </p>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <FaHeart style={{ fontSize: '5rem', color: '#dc3545', marginBottom: '1rem' }} />
                <h3>Making a Difference</h3>
                <p>
                  Every piece of clothing donated through our platform helps someone in need and 
                  contributes to a more sustainable future.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-4">
              <div className="text-center mb-4">
                <FaHandsHelping style={{ fontSize: '3rem', color: '#0d6efd', marginBottom: '1rem' }} />
                <h4 className="text-primary">Easy Donation Process</h4>
                <p>
                  Our streamlined donation process makes it simple for you to give back to the community.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mb-4">
                <FaUsers style={{ fontSize: '3rem', color: '#198754', marginBottom: '1rem' }} />
                <h4>Community Impact</h4>
                <p>
                  We work with local NGOs and communities to ensure your donations reach those who need them most.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mb-4">
                <FaRecycle style={{ fontSize: '3rem', color: '#20c997', marginBottom: '1rem' }} />
                <h4 className="text-primary">Sustainable Fashion</h4>
                <p>
                  By promoting clothing reuse, we contribute to reducing textile waste and environmental impact.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <FaHandshake style={{ fontSize: '4rem', color: '#6c757d', marginBottom: '1rem' }} />
                <h3>Join Our Community</h3>
                <p className="lead">
                  Whether you're looking to donate clothes or receive assistance, WearShare is here to help. 
                  Together, we can make a difference in our community and create a more sustainable future.
                </p>
                <p> Email Us:- info@wearshare.com
                  <br />
                  Phone:- +1 (123) 456-7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 