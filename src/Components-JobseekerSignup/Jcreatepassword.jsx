import React from 'react'
import { Link } from 'react-router-dom'
import './Jcreatepassword.css'
import confirm_password from "../assets/ConfirmPassword.png"
import eye from '../assets/show_password.png'

export const Jcreatepassword = () => {
  return (
    <div className="j-create-password-page">
      <header className="j-create-password-header">
        <Link to="/Job-portal" className="logo">
          <span className="logo-text">job portal</span>
        </Link>
        <div className="j-create-password-header-links">
          <span className='no-account'>Create a new account?</span>
          <Link to="/Job-portal/jobseeker/signup" className="signup-btn">Create</Link>
        </div>
      </header>
      <div className='j-create-password-login-body'>
        <div className="create-password-illustration">
          <img src={confirm_password} alt="create password Illustration" />
        </div>
        <div className="create-password-form">
          <h2>Create a New Password</h2>

          <label>New Password</label>
          <div className="password-wrapper">
            <input type="password" placeholder="Enter new password" />
          </div>

          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input type="password" placeholder="Re-enter new password" />
          </div>

          <button className="j-reset-link-btn">Rest Password</button>

          <div className='center-div-text'>
            <p>Remember your password? <Link to="/Job-portal/jobseeker/login" className='j-password-form-login-link'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
