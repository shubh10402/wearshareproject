// import React, { useState } from 'react'
// import { UserNavbar } from '../layout/UserNavbar'
// import { UserSidebar } from '../layout/UserSidebar'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// export const SignUp = () => {
//   const [fullname,setname]=useState('')
//   const [email,setemail]=useState('')
//   const [password,setpassword]=useState('')
//   const [retypepassword,setretypepassword]=useState('')
//   const navigate=useNavigate()


//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     axios.post('http://localhost:3001/register',{fullname,email,password,retypepassword})
//     .then(result=>console.log(result))
//     navigate('/Loginpageuser')
    
//     .catch(err=>console.log(err))
    
//   }
//   return (
    
//     <>
//     {/* <UserNavbar ></UserNavbar> */}
//     {/* <UserSidebar></UserSidebar> */}
//   <div className="register-box" 
//       style={
//         {
//           marginTop: 90 ,
//       marginLeft: 560 , 
//       textAlign:'center',
//       }
//       }
//        >
        
//     <div className="card card-outline card-primary" >
      
//       <div className="card-header text-center" >
//         <a href="/" className="h1" >
//           <b>Wear</b>Share
//         </a>
//       </div>
//       <div className="card-body">
//         <p className="login-box-msg">Register With Us!</p>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Full name"
//               onChange={(e)=>setname(e.target.value)}
//             />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-user" />
//               </div>
//             </div>
//           </div>
//           <div className="input-group mb-3">
//             <input type="email" className="form-control" placeholder="Email"
//             onChange={(e=>setemail(e.target.value))} />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-envelope" />
//               </div>
//             </div>
//           </div>
//           <div className="input-group mb-3">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               mixLength="4"
//               maxLength="16"   
//               onChange={(e)=>setpassword(e.target.value)}

//              />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-lock" />
//               </div>
//             </div>
//           </div>
//           <div className="input-group mb-3">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Retype password"
//               onChange={(e)=>setretypepassword(e.target.value)}
//             />
//             <div className="input-group-append">
//               <div className="input-group-text">
//                 <span className="fas fa-lock" />
//               </div>
//             </div>
//           </div>
//           <div className="row">
            
//             {/* /.col */}
//             <div className="col-12">
//               <button type="submit" className="btn btn-primary btn-block" >
//                 Register
//               </button>
//             </div>
//             {/* /.col */}
//           </div>
//         </form>
        
//         <a href="./Loginpageuser" className="text-center">
//           I already have a Account
//         </a>
//       </div>
//       {/* /.form-box */}
//     </div>
//     {/* /.card */}
//   </div>
//   {/* /.register-box */}
//   {/* jQuery */}
//   {/* Bootstrap 4 */}
//   {/* AdminLTE App */}
// </>

    
//   )
// }
// export default SignUp

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [errors, setErrors] = useState({}); // State for validation errors
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};

    if (!fullname.trim()) {
      errors.fullname = 'Full name is required';
    }
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
    
    if (!retypePassword) {
      errors.retypePassword = 'Please confirm your password';
    } else if (password !== retypePassword) {
      errors.retypePassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return; // Stop form submission if validation fails

    axios
      .post('http://localhost:3001/register', { fullname, email, password })
      .then((result) => {
        console.log(result);
        navigate('/Loginpageuser');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-box" style={{ marginTop: 90, marginLeft: 560, textAlign: 'center' }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <a href="/" className="h1"><b>Wear</b>Share</a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Register With Us!</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                value={fullname}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.fullname && <p className="text-danger">{errors.fullname}</p>}
            </div>

            <div className="input-group mb-3">
              <input
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
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Retype password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
              {errors.retypePassword && <p className="text-danger">{errors.retypePassword}</p>}
            </div>

            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </form>

          <a href="./Loginpageuser" className="text-center">I already have an account</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
