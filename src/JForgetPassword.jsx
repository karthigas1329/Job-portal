import React from 'react'
import { Link } from 'react-router-dom'
import './JForgetPassword.css'
import forgot from "./assets/Forgot.png"

export const JForgetPassword = () => {
  return (
    <div className="j-forget-password-page">
      <header className="j-forget-password-header">
        <Link to="/Job-portal" className="logo">
          <span className="logo-text">job portal</span>
        </Link>
          <div className="j-forget-password-header-links">
            <span className='no-account'>Don't have an account?</span>
            <Link to="/Job-portal/jobseeker/signup" className="signup-btn">Sign up</Link>
          </div>
      </header>
      <div className='j-forget-password-login-body'>
          <div className="forget-password-illustration">
            <img src={forgot} alt="Forgot password Illustration" />
          </div>
          <div className="forgot-password-form">
            <h2>Forgot Your Password?</h2>

            <label>Email ID / Mobile number</label>
            <input type="text" placeholder="Enter your Email ID / Mobile number" />

            <button className="j-send-link-btn">Send Link</button>

            <div className='center-div-text'>
              <p>Remember your password? <Link to="/Job-portal/jobseeker/login" className='j-password-form-login-link'>Login</Link></p>
            </div>
          </div>
      </div>
    </div>
  )
}
