// Sign Up page for user registration

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../images/image1.jpg';
import { FaUser,FaEnvelope,FaLock,FaUserCircle,FaPlus } from 'react-icons/fa';



//Export for DB connection
export const SignUp = () => {
  const [fullname, setName] = useState(''); // State for full name
  const [email, setEmail] = useState('');   // State for email
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [errors, setErrors] = useState({}); // State for validation errors
  const navigate = useNavigate();

  const validate = () => {  //Validation for user registration
    let errors = {};
                             //Validation for full name
    if (!fullname.trim()) {
      errors.fullname = 'Full name is required';
    }                        //Validation for email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }                 //valid for password
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 4) {
      errors.password = 'Password must be at least 4 characters long';
    }
    
    if (!retypePassword) {
      errors.retypePassword = 'Please confirm your password';
    } else if (password !== retypePassword) {
      errors.retypePassword = 'Passwords do not match';
    }

    setErrors(errors);  //checkError for validation
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return; // Stop form submission if validation fails

    axios  //Axios for user registration & Server connection 
      .post('http://localhost:3001/auth/register', { fullname, email, password  })
      .then((result) => {
        console.log(result.data);
        navigate('/Loginpageuser');
      })
      .catch((err) => console.log(err));  //Error handling for catching error
  };

  return (         //user registration Form with validation 
    <div style={{ 
      background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="register-box" style={{ 
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '5px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)'
      }}>
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="./" className="h1"><b>Wear</b>Share</a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register With Us!</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text"><FaUser /></span>  {/* Icon for full name */}
                <input                      //Full name input
                  type="text"
                  className="form-control"
                  placeholder="Full name" 
                  value={fullname}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.fullname && <p className="text-danger">{errors.fullname}</p>}
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text"><FaEnvelope /></span>  {/* Icon for Email */}
                <input            //Email input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text"><FaLock /></span>  {/* Icon for Password*/}
                <input
                  type="password"    //Password input
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text"><FaLock /></span>  {/* Icon for Password*/}
                <input
                  type="password"    //Retype password input
                  className="form-control"
                  placeholder="Retype password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
                {errors.retypePassword && <p className="text-danger">{errors.retypePassword}</p>}
              </div>
              {/* Submit button */}
              
              <button type="submit" className="btn btn-primary btn-block">
                <FaPlus className="me-1" />  {/* Icon for Register */}
                Register</button>
            </form>

            <a href="./Loginpageuser" className="text-center">
            <FaUserCircle className="me-0" /> {/* Icon for Login */}
             I already have an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};
//Export for SignUp
export default SignUp;