import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link, isCookie } from 'react-router-dom';


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

    axios.post('http://localhost:3001/auth/login', { email, password })
      .then(result => {
        console.log(result.data);
        if (result.data.status === "Success") {
          if (result.data.role === 'admin') {
            navigate('/Dashboard');
          } else if (result.data.role==='volunteer'){
            navigate('/Volunteerdashboard')
          }
          else {
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
    <div className="register-box" style={{ marginTop: 90, marginLeft: 560, textAlign: 'center', borderRadius: 5, borderWidth: 0, borderColor: 'blue', borderStyle: 'double' }}>
      
      <div className="card card-outline card-primary">
      <div className="card-header text-center">
        <a href="./" className="h1"><b>Wear</b>Share</a>
      </div>
      <div className="card-body">
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
         
        </div>
        {errors.password && <p className="text-danger">{errors.password}</p>}

        
          <button type="submit" className="btn btn-primary btn-block">  
            Sign In
          </button>
        

        {errors.general && <p className="text-danger">{errors.general}</p>}
      </form>

      {/* <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p> */}
      
      <p className="mb-0">
        <Link to="/Signup" className="text-center">Register a new membership</Link>
      </p>
      </div>
    </div>
  </div>
  );
};

export default Loginpageuser;
