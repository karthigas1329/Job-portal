import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Jforgotpassword.css'
import forgot from "../assets/Forgot.png"

export const Jforgotpassword = () => {
  const navigate = useNavigate();
  return (
    <div className="j-forgot-password-page">
      <header className="j-forgot-password-header">
        <Link to="/Job-portal" className="logo">
          <span className="logo-text">job portal</span>
        </Link>
          <div className="j-forgot-password-header-links">
            <span className='no-account'>Don't have an account?</span>
            <Link to="/Job-portal/jobseeker/signup" className="signup-btn">Sign up</Link>
          </div>
      </header>
      <div className='j-forgot-password-login-body'>
          <div className="forgot-password-illustration">
            <img src={forgot} alt="Forgot password Illustration" />
          </div>
          <div className="forgot-password-form">
            <h2>Forgot Your Password?</h2>

            <label>Email ID / Mobile number</label>
            <input type="text" placeholder="Enter your Email ID / Mobile number" />

            <button onClick={() => navigate("/Job-portal/jobseeker/login/forgetpassword/createpassword")} className="j-send-link-btn">Send Link</button>

            <div className='center-div-text'>
              <p>Remember your password? <Link to="/Job-portal/jobseeker/login" className='j-password-form-login-link'>Login</Link></p>
            </div>
          </div>
      </div>
    </div>
  )
}
