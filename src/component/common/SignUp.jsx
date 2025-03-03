import React, { useState } from 'react'
import { UserNavbar } from '../layout/UserNavbar'
import { UserSidebar } from '../layout/UserSidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const [fullname,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [retypepassword,setretypepassword]=useState('')
  const navigate=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{fullname,email,password,retypepassword})
    .then(result=>console.log(result))
    navigate('/Loginpageuser')
    
    .catch(err=>console.log(err))
    
  }
  return (
    
    <>
    {/* <UserNavbar ></UserNavbar> */}
    {/* <UserSidebar></UserSidebar> */}
  <div className="register-box" 
      style={
        {
          marginTop: 90 ,
      marginLeft: 560 , 
      textAlign:'center',
      }
      }
       >
        
    <div className="card card-outline card-primary" >
      
      <div className="card-header text-center" >
        <a href="/" className="h1" >
          <b>Wear</b>Share
        </a>
      </div>
      <div className="card-body">
        <p className="login-box-msg">Register With Us!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              onChange={(e)=>setname(e.target.value)}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email"
            onChange={(e=>setemail(e.target.value))} />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              mixLength="4"
              maxLength="16"   
              onChange={(e)=>setpassword(e.target.value)}

             />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Retype password"
              onChange={(e)=>setretypepassword(e.target.value)}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            
            {/* /.col */}
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-block" >
                Register
              </button>
            </div>
            {/* /.col */}
          </div>
        </form>
        
        <a href="./Loginpageuser" className="text-center">
          I already have a Account
        </a>
      </div>
      {/* /.form-box */}
    </div>
    {/* /.card */}
  </div>
  {/* /.register-box */}
  {/* jQuery */}
  {/* Bootstrap 4 */}
  {/* AdminLTE App */}
</>

    
  )
}
export default SignUp