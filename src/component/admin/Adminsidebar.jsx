import React from 'react'
import '../common/css/adminlte.css' // Use only the minified version
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
      
      {/* Brand Section */}
      <div className="sidebar-brand">
        <a href="/" className="brand-link">
          <img
            src="/assets/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image opacity-75 shadow"
          />
          <span className="brand-text fw-light">AdminLTE 4</span>
        </a>
      </div>

      {/* Navigation */}
      <div className="sidebar-content" data-overlayscrollbars-viewport="scrollbarHidden overflow-auto" style={{ padding: 8 }}>
        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
            
            {/* Wear Share Menu */}
            <li className="nav-item menu-open">
            <Link className="nav-link active" to="/Dashboard">
                <i className="nav-icon bi bi-speedometer" />
                <p>
                  Registered Details
                  <i className="nav-arrow bi bi-chevron-right" />
                </p>
                </Link>
            </li>
            <li className="nav-item menu-open">
            <Link className="nav-link active" to="/Addvolunteer">
                <i className="nav-icon bi bi-speedometer" />
                <p>
                  Add Volunteer
                  <i className="nav-arrow bi bi-chevron-right" />
                </p>
                </Link>
            </li>


            {/* Theme Generate */}
            <li className="nav-item">
              <a href="./generate/theme.html" className="nav-link">
                <i className="nav-icon bi bi-palette" />
                <p>Theme Generate</p>
              </a>
            </li>

            {/* Widgets */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-box-seam-fill" />
                <p>
                  Widgets
                  <i className="nav-arrow bi bi-chevron-right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                {['Small Box', 'Info Box', 'Cards'].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a href={`./widgets/${item.toLowerCase().replace(' ', '-')}.html`} className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>{item}</p>
                    </a>
                  </li>
                ))}
              </ul>

            </li>
          </ul>
        </nav>
      </div>
      
    </aside>
  )
}
