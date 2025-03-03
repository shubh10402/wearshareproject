import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Loginpageuser = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', { Email, Password })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          navigate('./app')
        } else {
          alert(result.data)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="card-body login-card-body">
        <p className="login-box-msg">Sign in with us</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="input-group-text">
              <span className="bi bi-envelope" />
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="input-group-text">
              <span className="bi bi-lock-fill" />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="form-check">
                {/* <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember Me
                </label> */}
              </div>
            </div>
            <div class="Submitbutton">
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </form>
        <p className="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p className="mb-0">
          <a href="./Signup" className="text-center">
            Register a new membership
          </a>
        </p>
      </div>
    </>
  )
}

export default Loginpageuser
