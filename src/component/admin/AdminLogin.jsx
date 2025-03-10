import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const AdminLogin = () => {
    const [email, setEmail] = useState('');   // State for email
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({}); // State for validation errors
    const navigate = useNavigate();

const validate = () => {  //Validation for user registration
    let errors = {};
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
    setErrors(errors);  //checkError for validation
    return Object.keys(errors).length === 0;
};

const handleSubmit = (e) => {
    const data = { email, password };
    e.preventDefault();
    if (!validate()) return; // Stop form submission if validation fails    
    axios  //Axios for user registration & Server connection 
      .post('http://localhost:3001/adminlogin', data)
      .then((result) => {
        console.log(result.data);
        navigate('/Adminpage');
      })
      .catch((err) => console.log(err));  //Error handling for catching error
};
return (         //user registration Form with validation
    <div className="register-box" style={{ marginTop: 90, marginLeft: 560, textAlign: 'center' }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <h1>Admin Login</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ color: 'red' }}>{errors.email}</div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ color: 'red' }}>{errors.password}</div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
);
}


export const Adminlogin = () => {
    
};