import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

axios.defaults.withCredentials = true; // Set globally

export const Loginpageuser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result.data);
        if (result.data.Status === "Success") {
          if (result.data.role === 'admin') {
            navigate('/Dashboard');
          } else {
            navigate('/Userdonateform'); // Redirect non-admin users
          }
        } else {
          setErrors({ general: result.data.message || "Invalid credentials" });
        }
      })
      .catch(err => {
        console.log(err);
        setErrors({ general: "Server error" });
      });
  };

  return ( 
    <div className="card-body login-card-body" style={{ marginTop: 90, marginLeft: 450, marginRight: 400, textAlign: 'center', borderRadius: 5, borderWidth: 2, borderColor: 'blue', borderStyle: 'double' }}>
      <div className="card-header text-center" style={{ borderWidth: 0.5, borderColor: 'grey', borderStyle: 'solid' }}>
        <a href="./" className="h1"><b>Wear</b>Share</a>
      </div>
      
      <p className="login-box-msg">Sign in with us</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3"> 
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-group-text">
            <span className="bi bi-envelope" />
          </div>
        </div>
        {errors.email && <p className="text-danger">{errors.email}</p>}

        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="input-group-text">
            <span className="bi bi-lock-fill" />
          </div>
        </div>
        {errors.password && <p className="text-danger">{errors.password}</p>}

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">  
            Sign In
          </button>
        </div>

        {errors.general && <p className="text-danger">{errors.general}</p>}
      </form>

      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      
      <p className="mb-0">
        <Link to="/Signup" className="text-center">Register a new membership</Link>
      </p>
    </div>
  );
};

export default Loginpageuser;
