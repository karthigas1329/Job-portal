import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
        <div>
      <header>
        <div>
          <span>ProJobs</span>
        </div>
        <nav>
          <a href="#">Job Search</a>
          <a href="#">Companies</a>
          <a href="#">Career Resources</a>
          <a href="#">For Employers</a>
          <a href="#">Sign In</a>
        </nav>
        <button>
        </button>
      </header>

      <main>
        <h1>Discover Your Next Professional Opportunity</h1>
        <p>
          Connecting top talent with leading companies worldwide. Your career journey starts here.
        </p>
        <div>
          <div>
            <label htmlFor="job-title">Job title, skills, or company</label>
            <input type="text" id="job-title" placeholder="Job title, skills, or company" />
          </div>
          <div>
            <label htmlFor="location">Location (e.g., City, State, Remote)</label>
            <input type="text" id="location" placeholder="Location (e.g., London, Remote)" />
          </div>
          <button>Search</button>
        </div>
      </main>

      <section>
        <h2>How It Works</h2>
        <div>
          <div>
            <div>1</div>
            <h3>Create Your Profile</h3>
            <p>Build a professional profile showcasing your skills and experience.</p>
          </div>
          <div>
            <div>2</div>
            <h3>Explore Opportunities</h3>
            <p>Browse thousands of jobs tailored to your preferences and apply easily.</p>
          </div>
          <div>
            <div>3</div>
            <h3>Land Your Dream Job</h3>
            <p>Connect with top employers and take the next step in your career.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Latest Job Listings</h2>
        <div>
          {/* Map job data here */}
        </div>
        <div>
          <button>View All Jobs</button>
        </div>
      </section>

      <section>
        <h2>Companies Hiring on ProJobs</h2>
        <div>
          {/* Map logos here */}
        </div>
        <div>
          <button>View All Companies</button>
        </div>
      </section>

      <section>
        <h2>Why Choose ProJobs?</h2>
        <p>
          We are dedicated to providing a seamless and effective job search experience for professionals and a robust platform for employers.
        </p>
        <div>
          <div>
            <h3>Vast Opportunities</h3>
            <p>Access a curated selection of jobs from top-tier companies globally.</p>
          </div>
          <div>
            <h3>Smart Matching</h3>
            <p>Our AI-powered system connects you with roles that truly fit your profile.</p>
          </div>
          <div>
            <h3>Career Growth</h3>
            <p>Access resources and insights to accelerate your professional development.</p>
          </div>
        </div>
      </section>

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
    </div>
    </>
  )
}

export default App
