// Sign Up page for user registration

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
      .post('http://localhost:3001/register', { fullname, email, password  })
      .then((result) => {
        console.log(result.data);
        navigate('/Loginpageuser');
      })
      .catch((err) => console.log(err));  //Error handling for catching error
  };

  return (         //user registration Form with validation 
    <div className="register-box" style={{ marginTop: 90, marginLeft: 560, textAlign: 'center' }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <a href="./" className="h1"><b>Wear</b>Share</a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Register With Us!</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
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
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </form>

          <a href="./Loginpageuser" className="text-center">I already have an account</a>
        </div>
      </div>
    </div>
    
  );
};
//Export for SignUp
export default SignUp;