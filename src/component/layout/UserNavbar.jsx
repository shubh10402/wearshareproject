import React from 'react'
import { Link } from "react-router-dom";
export const UserNavbar = () => {
  return (
   <nav className="app-header navbar navbar-expand bg-body">
  {/*begin::Container*/}
  <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
    {/*begin::Start Navbar Links*/}
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
      <li className="nav-item d-none d-md-block">
        <a href="./" className="nav-link">
          Home
        </a>
      </li>
      {/* <li className="nav-item d-none d-md-block">
        <Link class="nav-link" to="/SignUp">
          Register Now
          </Link>
        
      </li> */}
      <li className="nav-item d-none d-md-block">
        <Link class="nav-link" to="/SignUp">
          Donate Now
          </Link>
        
      </li>
      
      <li className="nav-item d-none d-md-block">
        <a href="/NGORequest" className="nav-link">
          NGO Request 
        </a>
      </li>
      
    </ul>
    {/* end::Start Navbar Links*/}
     </div> 
  {/*end::Container*/}
</nav>

  )
}
