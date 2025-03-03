  // import axios from 'axios'
  // import React, { useState } from 'react'
  // import { useNavigate } from 'react-router-dom'

  // export const Loginpageuser = () => {
  //   const [Email, setEmail] = useState('')
  //   const [Password, setPassword] = useState('')
  //   const navigate = useNavigate()

  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     axios.post('http://localhost:3001/login', { Email, Password })
  //       .then(result => {
  //         console.log(result)
  //         if (result.data === "Success") {
  //           navigate('/app')
  //         } else {
  //           alert(result.data)
  //         }
  //       })
  //       .catch(err => console.log(err))
  //   }

  //   return (
  //     <>
  //       <div className="card-body login-card-body">
  //         <p className="login-box-msg">Sign in with us</p>
  //         <form onSubmit={handleSubmit}>
  //           <div className="input-group mb-3">
  //             <input
  //               type="email"
  //               className="form-control"
  //               placeholder="Email"
  //               onChange={(e) => setEmail(e.target.value)}
  //             />
  //             <div className="input-group-text">
  //               <span className="bi bi-envelope" />
  //             </div>
  //           </div>
  //           <div className="input-group mb-3">
  //             <input
  //               type="password"
  //               className="form-control"
  //               placeholder="Password"
  //               onChange={(e) => setPassword(e.target.value)}
  //             />
  //             <div className="input-group-text">
  //               <span className="bi bi-lock-fill" />
  //             </div>
  //           </div>
  //           <div className="row">
  //             <div className="col-8">
  //               <div className="form-check">
  //                 {/* <input
  //                   className="form-check-input"
  //                   type="checkbox"
  //                   defaultValue=""
  //                   id="flexCheckDefault"
  //                 />
  //                 <label className="form-check-label" htmlFor="flexCheckDefault">
  //                   Remember Me
  //                 </label> */}
  //               </div>
  //             </div>
  //             <div class="Submitbutton">
  //               <div className="d-grid gap-2">
  //                 <button type="submit" className="btn btn-primary">
  //                   Sign In
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </form>
  //         <p className="mb-1">
  //           <a href="forgot-password.html">I forgot my password</a>
  //         </p>
  //         <p className="mb-0">
  //           <a href="./Signup" className="text-center">
  //             Register a new membership
  //           </a>
  //         </p>
  //       </div>
  //     </>
  //   )
  // }

  // export default Loginpageuser



  import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    } else if (password.length < 4) {
      errors.password = 'Password must be at least 4 characters long';
    }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return; // Stop submission if validation fails

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/app');
        } else {
          alert(result.data);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="card-body login-card-body">
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
      </form>

      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="./Signup" className="text-center">Register a new membership</a>
      </p>
    </div>
  );
};

export default Loginpageuser;
