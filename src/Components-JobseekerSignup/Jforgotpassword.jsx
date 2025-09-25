import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Jforgotpassword.css'
import forgot from "../assets/Forgot.png"

export const Jforgotpassword = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ email: "" })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleForm = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    setErrors({ ...errors, [name]: "" })
    setMessage("")
  }

  const validateForm = () => {
    const newErrors = {}
    const regexOfMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!regexOfMail.test(formValues.email)) {
      newErrors.email = "Invalid email format"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload
    if (!validateForm()) {
      return
    }

    try {
      setLoading(true)
      setMessage("")
      
      // Replace with your backend API endpoint
      const response = await axios.post("http://127.0.0.1:8000/api/ forgot-password/", {
        email: formValues.email
      })

      if (response.status === 200) {
        setMessage("Password reset link has been sent to your email.")
        // optional: redirect to create-password page after success
        setTimeout(() => {
          navigate("/Job-portal/jobseeker/login/forgotpassword/createpassword")
        }, 2000)
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error || "Something went wrong. Try again.")
      } else {
        setMessage("Server not reachable. Try again later.")
      }
    } finally {
      setLoading(false)
    }
  }

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
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <h2>Forgot Your Password?</h2>

          <label>Email ID</label>
          <input
            type="text"
            placeholder="Enter your Email ID"
            name="email"
            value={formValues.email}
            onChange={handleForm}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}

          <button className="j-send-link-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Link"}
          </button>

          {message && <p className="info-msg">{message}</p>}

          <div className='center-div-text'>
            <p>Remember your password? <Link to="/Job-portal/jobseeker/login" className='j-password-form-login-link'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}
