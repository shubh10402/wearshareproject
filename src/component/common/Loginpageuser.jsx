// Login page for user

{/*UserLogin page*/}
//importing axios and react
  import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
    //Login page DB connection
export const Loginpageuser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    
    if (!email) {  //Email validation
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    
    if (!password) {   //Password validation
      errors.password = 'Password is required';
    } else if (password.length < 4) {
      errors.password = 'Password must be at least 4 characters long';
    }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return; // Stop submission if validation fails

    axios.post('http://localhost:3001/login', { email, password })  // Axios for user login & server connection
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/app');
        } else {
          alert(result.data);
        }
      })
      .catch(err => console.log(err)); // Error handling
  };

  return ( 
    <div className="card-body login-card-body" style={{ marginTop: 90, marginLeft: 450, marginRight:400 , textAlign: 'center', borderRadius:5,borderWidth: 2, borderColor: 'blue',borderStyle: 'double'}}>
      <div className="card-header text-center" style={{ borderWidth: 0.5, borderColor: 'grey',borderStyle: 'solid'}}>
          <a href="./" className="h1"><b>Wear</b>Share</a>
        </div>
      
      <h4 className="login-box-msg">Sign in with us</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3"> {/* EmailInput*/}  
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

        <div className="input-group mb-3">   {/*PasswordInput */}
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

        <div className="d-grid gap-2">         {/* Submitbutton */}
          <button type="submit" className="btn btn-primary">  
            Sign In
          </button>
        </div>
      </form>



{/* Forgot password link */}
      <p className="mb-1">  
        
        <a href="./Forgatpassword">I forgot my password</a>
      </p>
      
 {/* Register a new membership link */}
      <p className="mb-0">
        <a href="./Signup" className="text-center">Register a new membership</a>
      </p>
    </div>
  );
};

export default Loginpageuser;
