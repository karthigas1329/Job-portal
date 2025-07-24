import React from 'react'
import { Header } from './Components-LandingPage/Header'
import { MainSection } from './Components-LandingPage/MainSection'
import { Works } from './Components-LandingPage/Works'
import { Joblisting } from './Components-LandingPage/Joblisting'
import { Topcompanies } from './Components-LandingPage/Topcompanies'
import { Choice } from './Components-LandingPage/Choice'

export const Landingpage = () => {
  return (
    <>
    <Header />
      <MainSection />
      <Works />
      <Joblisting />
      <Topcompanies />
      <Choice />
      <section>
        <h2>Stay Updated with New Opportunities</h2>
        <p>
          Subscribe to our newsletter and get the latest job alerts and career advice delivered to your inbox.
        </p>
        <div>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </section>

      <footer>
        <div>
          <div>
            <h3>ProJobs</h3>
            <p>Your trusted partner in career advancement.</p>
            <div>
              <a href="#"><svg fill="currentColor" viewBox="0 0 24 24"></svg></a>
              <a href="#"><svg fill="currentColor" viewBox="0 0 24 24"></svg></a>
              <a href="#"><svg fill="currentColor" viewBox="0 0 24 24"></svg></a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3>Job Seekers</h3>
            <ul>
              <li><a href="#">Create Profile</a></li>
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Saved Jobs</a></li>
              <li><a href="#">Application Status</a></li>
            </ul>
          </div>
          <div>
            <h3>Employers</h3>
            <ul>
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Find Talent</a></li>
              <li><a href="#">Employer Dashboard</a></li>
            </ul>
          </div>
        </div>
        <div>
          &copy; {new Date().getFullYear()} ProJobs. All rights reserved.
        </div>
      </footer>
    </>
  )
}
