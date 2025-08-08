import React from 'react'
import { Link } from 'react-router-dom'
import manSitting from '../assets/Illustration_1.png'
import eye from '../assets/show_password.png'
import Google from '../assets/GOOG.png'
import './Jlogin.css'

export const Jlogin = () => {
  return (
    <div className="login-page">
      <header className="login-header">
        <Link to="/Job-portal" className="logo">
          <span className="logo-text">job portal</span>
        </Link>
        <div className="header-links">
          <span className='no-account'>Don’t have an account?</span>
          <Link to="/Job-portal/jobseeker/signup" className="signup-btn">Sign up</Link>
          <div className="separator"></div>
          <Link to='/Job-portal/employer' className="employer-redirect-link">Employers Login</Link>
        </div>
      </header>

      <div className="login-body">
        <div className="login-illustration">
          <img src={manSitting} alt="Login Illustration" />
        </div>

        <div className="login-form">
          <h2>Login to continue</h2>

          <label>User name / Email ID</label>
          <input type="text" placeholder="Enter your User name / Email ID" />

          <label>Password</label>
          <div className="password-wrapper">
            <input type="password" placeholder="Enter your password" />
            <span className="eye-icon"><img src={eye} className='show-icon' alt='show'/></span>
          </div>

          <div className="form-options">
            <label><input type="checkbox" /> Remember me</label>
            <Link to="/Job-portal/jobseeker/login/forgotpassword" className='forgot-password'>Forgot Password?</Link>
          </div>

          <button className="j-login-btn">Login</button>

          <div className="divider">Or Continue with</div>

          <button className="google-btn">
            <img src={Google} alt="Google" />
            Google
          </button>
        </div>
      </div>
    </div>
  )
}