import React from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaHeart, FaHandsHelping, FaInfoCircle } from 'react-icons/fa';

export const UserNavbar = () => {
  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-lte-toggle="sidebar"
              href="#"
              role="button"
            >
              <i className="bi bi-list" />
            </a>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <span className="fw-bold" style={{ 
                fontSize: '1.8rem', 
                background: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.5px'
              }}>
                WearShare
              </span>
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          {/* Home Button */}
          <li className="nav-item d-none d-md-block">
            <Link to="/" className="nav-link">
              <span className="me-1"><FaHome /></span>
              Home
            </Link>
          </li>

          {/* About Us Button */}
          <li className="nav-item d-none d-md-block">
            <Link to="/about" className="nav-link">
              <span className="me-1"><FaInfoCircle /></span>
              About Us
            </Link>
          </li>

          {/* Donate Now Button */}
          <li className="nav-item d-none d-md-block">
            <Link to="/SignUp" className="nav-link">
              <span className="me-1"><FaHeart /></span>
              Donate Now
            </Link>
          </li>
          
          {/* NGO Request Button */}
          <li className="nav-item d-none d-md-block">
            <Link to="/NGORequest" className="nav-link">
              <span className="me-1"><FaHandsHelping /></span>
              NGO Request 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
