import React from 'react'
import { Link } from 'react-router-dom'
import workTime from './assets/WorkTime.png'
import Google from './assets/GOOG.png'
import eye from './assets/show_password.png'
import './Jsignup.css'

export const Jsignup = () => {
  return (
    <div className="j-sign-up-page">
      <header className="j-sign-up-header">
        <Link to="/Job-portal" className="logo">
          <span className="logo-text">job portal</span>
        </Link>
        <div className="j-sign-up-header-links">
          <span className='no-account'>Already have an account?</span>
          <Link to="/Job-portal/jobseeker/login" className="signup-btn">Login</Link>
          <div className="separator"></div>
          <Link to='/Job-portal/employer' className="employer-redirect-link">Employers Login</Link>
        </div>
      </header>

      <div className="j-sign-up-body">
        <div className="signup-illustration">
          <img src={workTime} alt="Signup Illustration" />
        </div>

        <div className="j-sign-up-form">
          <h2>Create an Account</h2>

          <label>User name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email ID</label>
          <input type="email" placeholder="Enter your Email ID" />

          <label>Password</label>
          <div className="password-wrapper">
            <input type="password" placeholder="Create a new password" />
            <span className="eye-icon"><img src={eye} className='show-icon' alt='show'/></span>
          </div>

          <label>Mobile number (optional)</label>
          <input type="text" placeholder="Enter your mobile number" />

          <button className="j-sign-up-submit">Signup</button>

          <div className="divider">Or Continue with</div>

          <button className="google-btn">
            <img
              src={Google}
              alt="Google"
            />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
